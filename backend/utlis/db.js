import mongoose from "mongoose"

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log('mongodb connected Successfully')
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
    }      
}

export default connectDB