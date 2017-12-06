exports.connectedOkAttachedWithClientList=(data)=>{
	return {
		type: "CONNCETED_OK_ATTACHED_WITH_CLIENT_LIST",
		data
	}
}

exports.aClientConnect=(data)=>{
	return {
		type: "A_CLIENT_CONNECT",
		data
	}
}

exports.messageArrivedServer=()=>{
    return {
        type : "MESSAGE_ARRIVED_SERVER"
    }
}

exports.messageArrivedRecipient=()=>{
    return {
        type : "MESSAGE_ARRIVED_RECIPIENT"
    }
}

exports.messageFromAnotherClient=(message)=>{
    return {
        type : "MESSAGE_RECEIVE",
        message
    }
}