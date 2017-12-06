export function messageListChange(message){
    return {
        type : "MESSAGE_LIST_CHANGE",
        message
    }
}

export function messageSend(message,recipient_id){
    return {
        type : "MESSAGE_SEND",
        overSocket : true,
        message: message,
        recipient_id: recipient_id
    }
}

export function messageArrivedServer(){
    return {
        type : "MESSAGE_ARRIVED_SERVER"
    }
}

export function messageArrivedRecipient(){
    return {
        type : "MESSAGE_ARRIVED_RECIPIENT"
    }
}


