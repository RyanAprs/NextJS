import mongoose from "mongoose";

const connect = async () => {
    try {
       await mongoose.connect(process.env.MONGO);
       console.log("databases connected")
    } catch (error) {
        throw new Error("Couldn't connect to Mongo")
    }
}

export default connect;