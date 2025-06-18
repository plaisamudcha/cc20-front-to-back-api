import { object, ref, string } from "yup";

export const registerSchema = object({
  email: string().email("Email is incorrect").required("Email is required"),
  name: string().min(3, "Name greater than 3 alphabets"),
  password: string().min(6, "Password greater than 6 alphabets"),
  confirmPassword: string().oneOf([ref("password")], "Passowrd is not match"),
});

export const loginSchema = object({
  email: string().email("Email is incorrect").required("Email is required"),
  password: string().min(6, "Password greater than 6 alphabets"),
});

export const validate = (schema) => async (req, res, next) => {
  try {
    await schema.validate(req.body, { abortEarly: false });
    next();
  } catch (error) {
    const errMsg = error.errors.map((item) => item);
    const errText = errMsg.join(",");
    const mergeErr = new Error(errText);
    next(mergeErr);
  }
};
