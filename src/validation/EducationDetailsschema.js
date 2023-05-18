import * as Yup from "yup";

export const EducationDetailsschema = Yup.object({
    // educationDetails: Yup.array().of(
    //   Yup.object().shape({
    //     educationType: Yup.string().required("Education Type is required"),
    //     instituteName: Yup.string().required("Institute Name is required"),
    //     course: Yup.string().required("Course is required"),
    //     cgpa: Yup.number()
    //       .required("CGPA/Percentage is required")
    //       .typeError("CGPA/Percentage must be a number"),
    //     passingYear: Yup.number()
    //     .required("Passing Year is required")
    //     .typeError("Passing Year must be a number"),
    //   })
    // ),
    // experienceDetails:Yup.array().of(
    //     Yup.object().shape({
    // totalExperience: Yup.number()
    //   .required("Total Experience is required"),
    // company: Yup.string().required("Company is required"),
    // designation: Yup.string().required("Designation is required"),
    // technology: Yup.string().required("Technology is required"),
    // fromDate: Yup.date().required("From Date is required"),
    // toDate: Yup.date().required("To Date is required")
    //     })
    // )
  });