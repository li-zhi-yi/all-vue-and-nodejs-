const express=require('express');

const router=new express.Router() 

const Food=require('../db/model/food')

//home
router.get('/data',(req,res)=>{
    console.log(111)
    Food.find()
    .then((data)=>{
        return res.send({
            err:0,
            data:data
        })
    })
    .catch(()=>{
        res.send({
            err:1,
            data:'查询失败'
        })
    })
})

//detail
router.get('/data/detail',(req,res)=>{
    console.log(111)
    Food.find()
    .then((data)=>{
        return res.send(data)
    })
    .catch(()=>{
        res.send({
            err:1,
            data:'查询失败'
        })
    })
})


//list
router.get('/data/list',(req,res)=>{
    Food.find()
    .then((data)=>{
        return res.send(data[0])
    })
    .catch(()=>{
        res.send({
            err:1,
            data:'查询失败'
        })
    })
})
module.exports=router;