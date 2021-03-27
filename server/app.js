const express=require('express');
const db=require('./db/connect.js')
const body_parser=require('body-parser');
const path=require("path")
const cors=require('cors');//跨域
const request=require('request');//帮助请求代理服务器
const app=express();
const ejs=require('ejs')

app.use(cors())

//配置body_parser
app.use(body_parser.json());
app.use(body_parser.urlencoded({extended:false}));

//配置html拓展名
app.engine('.html',ejs.__express);
ejs.delimiter = '$';

//静态化目录
app.use('/',express.static(path.join(process.cwd(),'../dist')))
//引入路由
const FoodRouter=require('./router/foodRouter.js')


//安装路由
app.use('/api',FoodRouter) 


app.get('/',(req,res)=>{
    res.render('index.html')
})

app.listen(3000,()=>{
    console.log('3000')
})
