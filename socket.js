import socketIO from "socekt.io";
import userModel from "./model/user.model.js";
import captainModel from "./model/captain.model.js";


let io;
function initializeSocket(server){
    io = socketIO(server,{
        cors: {
            origin:"*",
            methods:["GET","POST"]
        }
    });

    io.on("connection",(socket)=>{
        socket.on("join",async(data) => {
            const {userId,userType} = data;

            if(userType === "user"){
                await userModel.findByIdAndUpdate(userId,{socketId:socket.id})
            }
            else if(userType === "captain"){
                await captainModel.findByIdAndUpdate(userId,{socketId:socket.id})
            }
        });
    
        socket.on("update-location-captain",async(data)=>{
            const{userId,location} = data;

            await captainModel.findByIdAndUpdate(usrId,{location:{
                ltd:location.ltd,
                lng:location.lng
            }});
        });

        socket.on("disconnect",()=>{
            console.log("user connected")
        })
    });

}

const sendMessageToSocketId = (socketId,messageObject) => {
    if(io){
        io.to(socketId).emit(messageObject.event , messageObject.data);
    }
    else{
        console.log("socket not initialized")
    }
}

export {initializeSocket , sendMessageToSocketId};