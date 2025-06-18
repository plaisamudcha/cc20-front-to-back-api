import {createError} from "../utils/createError.js"

export const usersController = {
  listUsers: (req,res,next)=>{
  try {
    if (false) {
      createError(400,"Email already exist!!!")
    } else {
      createError(400,"invalid password")
    }
    res.json({message: "this is GET users"})
  } catch (error) {
    next(error)
  }
},
  getUser: (req,res) => {
  res.json({message: "this is GET one user"})
},
  postUser: (req,res) => {
  res.json({message: "This is POST user"})
},
  updateUser: (req,res) => {
  const id = +req.params.id
  res.json({message: "this is PATCH user",id})
},
  deleteUser: (req,res) => {
  const id = +req.params.id
  res.json({message: "this is DELETE user",id})
}
}