import mongoose ,{Schema} from "mongoose";

const listedPropertySchema=new Schema({
    nftURL:{
        type : String ,
        required: true,
        unique:true
    },
    description:{
        type:String,
        required:true,
    },
    rate:{
        type: Number,
        required:true
    },
    images:{
        type: Array,
        required:true
    },
    pincode:{
        type:Number,
        required:true
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
   
});

const ListedProperty = mongoose.model("ListedProperty",listedPropertySchema);
export default ListedProperty;      