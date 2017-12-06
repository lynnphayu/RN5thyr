var io = require("socket.io")(3030, { pingTimeout: 30000 });
var actionsCreater = require("./actionsCreater.js");
var bluebird = require("bluebird");
var redis = require("redis"),
rdclient = redis.createClient();
var subChannel = redis.createClient();
bluebird.promisifyAll(redis.RedisClient.prototype);

var Sockets = [];

rdclient.on("error", function (err) {
    console.log("Error " + err);
});

subChannel.on("ready", function () {
    subChannel.subscribe("__keyspace@0__:client_list");
});

io.on("connection", function (socket) {

    socket.on("publicChannel", function (action) {

        switch (action.type) {
            case "INITIAL_CONNECT":
                var sock_obj = {};
                sock_obj.socket_id = socket.id;
                sock_obj.client_id = action.id;
                Sockets.push(sock_obj);
                addActiveClient(socket.id, action.id, action.name);
                return returnClientList(socket, actionsCreater.connectedOkAttachedWithClientList);

            case "PARTIAL_DISCONNECT":
                return deleteClientFromList(socket.id);

            case "MESSAGE_SEND":
                return ackSenderAndSendToRecipient(action,socket);
        }

    });

    socket.on("disconnect", function (reason) {
        for (var i = 0; i < Sockets.length; i++) {
            if (Sockets[i].socket_id === socket.id) {
                console.log(Sockets[i].socket_id);
                if (i > -1) {
                    Sockets.splice(i, 1);
                 }
            }
        }
        console.log(Sockets);
        deleteClientFromList(socket.id);
        console.log("unplanned disconnection");
    });


});

subChannel.on("message", function (channel, message) {
    returnClientList(io.sockets, actionsCreater.aClientConnect);
});

const addActiveClient = function (sockid, id, name) {
    const userObj = { "name": name, "id": id , "new_msg": 0};
    rdclient.hset("client_list", sockid, JSON.stringify(userObj));
};

const deleteClientFromList = function (id) {
    rdclient.hdel("client_list", id);
};


const returnClientList = function (socket, func) {
    rdclient.hgetallAsync("client_list").then(function (obj) {
        var clientArr = [];
        if (obj) {
            for (var x in obj) {
                clientArr.push(JSON.parse(obj[x]));
            }
        }
        socket.emit("publicChannel", func(clientArr));
    });
};


const ackSenderAndSendToRecipient = function (action,socket) {
    // storeMessages(action.message);
    Sockets.forEach( function(sock){ if (sock.client_id === action.recipient_id) {
        socket.to(sock.socket_id).emit("publicChannel", actionsCreater.messageFromAnotherClient(action.message));
    }});
};

// const storeMessages = function (message){
//     rdclient.append("message", message[0].recipient_id , JSON.stringify(message));
//     rdclient.append("message", message[0].user._id, JSON.stringify(message));
// };