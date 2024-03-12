import user from "../models/user";

export const getUsers = async(req,res,next)=>{
    let User;
    try{
        User = await user.find()
    }catch(err){
        console.log(err)
    }
    if(!User){
        return res.status(404).json({message:'User not found'})
    }else{
        return res.status(200).json({User})
    }
}

export const addUser = async(req,res,next)=>{
    const {name,email,password} = req.body;
    let usersExcisting;
    try{
        usersExcisting = await user.findOne({email});
    }catch(err){
        console.log(err)
    }
    if(usersExcisting){
        return res.status(400).json({message:"User Already Found"})
    }
    if(password.length < 6){
        return res.status(400).json({message:"password atleast need six characters"})
    }
    const users = new user({
        name,
        email,
        password
    })
    try{
        await users.save();
    }catch(err){
        console.log(err);
    }
    return res.status(201).json({users})
}