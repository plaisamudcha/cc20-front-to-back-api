export const usersController = {
  listUsers: (req,res)=>{
  res.json({message: "this is GET users"})
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