import * as Yup from "yup"

export const LoginSchemas = Yup.object({
    password: Yup.string().min(8).required("Password is required"),
  });