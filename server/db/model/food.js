const mongoose=require('mongoose')
//4创建一个和集合相关的Schema对象
const foodModel = new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    _id:{type:String,required:true},
    product:{type:String,required:true},
    url:{type:String,required:true},
});

//5将Schema对象转换成数据模型
const Food=mongoose.model('foods',foodModel);//该数据对象和集合关联('集合名'，Schema对象)

module.exports=Food;