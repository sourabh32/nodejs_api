import { User } from "../models/userModel.js"

export const getAllUsers = async (req,res)=>{
  
    const users = await  User.find({})
  
      res.status(201).cookie("rom","ram").json({
          successs:true,
          users
      })
  }

  export const getUserById =async (req,res)=>{
    const {id} = req.query;
    console.log(req.params)
    const user = await User.findById(req.params.id);
    
    res.json({
        sucsess:true,
        user
    })
}
export const deleteUserById =async (req,res)=>{
    const {id} = req.params;
  
    const user = await User.findById(id);
    
    try {
        await user.deleteOne();
        res.json({
          success: true,
          user: "deleted",
        });
      } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).json({ success: false, message: "Error deleting user" });
      }
}
export const createUser = async (req,res)=>{
    const {name,email,password} = req.body
    await  User.create({
    name,
    email,
    password
    })
      res.json({
          successs:true,
          message:"sucsessfuly added ne meber"
      })
  }