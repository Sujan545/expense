const transectionModel=require('../models/transectionModel')
const moment =require ('moment')
const getAllTransection= async (req,res)=>{
    try{
        const {selectedValue}=req.body
const transections = await transectionModel.find({
    date:{
        $gt:moment().subtract(Number(selectedValue), 'd').toDate(),
    },
    userid:req.body.userid,
});
res.status(200).json(transections);
    }catch(error){
        console.log(error)
        res.status(500).json(error)
    }

};

const addTransection= async (req,res)=>{
try{
    console.log("helloo")
const {amount,type,date,description,reference,category,userid}=req.body
console.log(amount)
const data = await transectionModel.create({amount,type,date,description,reference,category,userid})

res.status(201).send({data,message:"Transection created"});
}catch(error){
console.log(error)
res.status(500).json(error)
}
};

module.exports={getAllTransection,addTransection}