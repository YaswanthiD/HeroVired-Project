const mongoose=require('mongoose');

const checkout = new mongoose.Schema({
    usermail:{
        type:String,
    },
    sellermail:{
        type:String,
    },
    product_name:{
        type:String,
    },
    price:{
        type:Number,
    },
    username:{
        type:String,
    },
    Address:{
        type:String,
    },
    Mobile_number:{
        type:String
    },
    State:{
        type:String
    },
    Pincode:{
        type:Number
    },
    Images:{
        type:String,
    },
});
module.exports=mongoose.model('checkout',checkout);
