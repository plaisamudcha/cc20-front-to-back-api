export const authMiddleware = {
  check: (req,res,next) => {
  if (true) {
    console.log("this is middleware")
    next()
  }
  }
}