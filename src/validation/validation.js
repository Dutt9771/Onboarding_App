import * as Yup from "yup";

export const PersonalDetailSchemas = Yup.object({
    firstName: Yup.string().min(2).max(25).required("First Name is required"),
    // middleName: Yup.string().min(2).max(25).required("Middle Name is required"),
    // lastName: Yup.string().min(2).max(25).required("Last Name is required"),
    // birthDate: Yup.string().required("birthDate is required"),
    // email: Yup.string().email().required("Email is required"),
    // contactNumber: Yup.number()
    //   .required("Contact Number is required")
    //   .typeError("Contact Number must be a number"),
    // alternatecontactNumber:Yup.number().typeError("Alternate Contact Number must be a number"),
    // gender: Yup.string().required("Gender is required"),
    // github: Yup.string().required("Github is required"),
    // linkdin: Yup.string().required("Linkdin is required"),
    // bloodGroup: Yup.string().required("Blood Group is required"),
    // maritalStatus: Yup.string().required("Marital Status is required"),
    // bankName: Yup.string().required("Bank Name is required"),
    // accountNumber: Yup.number().required("Account Number is required").typeError("Account Number Must Be Number"),
    // ifsc: Yup.string().required("IFSC Code is required"),
    // branch: Yup.string().required("Branch is required"),
  });


  // export const EducationDetailsschema = Yup.object({
  //   // educationType: Yup.string().required("Education Type is required"),
  //   // instituteName: Yup.string().required("Institute Name is required"),
  //   // course: Yup.string().required("Course is required"),
  //   // cgpa: Yup.number().required("CGPA/Percentage is required").typeError("CGPA/Percentage must be a number"),
  //   // passingYear: Yup.string().required("Passing Year is required"),
    
  // });

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