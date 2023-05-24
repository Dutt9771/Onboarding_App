import * as Yup from "yup";
export const UploadDocumentSchemas = Yup.object({
    // aadharNumber: Yup.number().required("Aadharcard Number is required").typeError("Aadharcard Number must be Number"),
    aadharDocument: Yup.array().required("Aadhar Document is required").min(1, "Please upload Aadharcard document")
    .max(2, "You can upload only 2 files")
    .test("fileFormat", "Only image files are allowed", (value) =>
      value.every((file) => file.type.startsWith("image/"))
    )
    .test("fileSize", "File size too large", (value) =>
      value.every((file) => file.size <= 2 * 1024 * 1024)
    ),
    // pancardNumber: Yup.number().required("Pancard Number is required").typeError("Aadharcard Number must be Number"),
    // pancardDocument: Yup.array().required("Pancard Document is required"),
    // presentAddress: Yup.string().required("Present Address is required"),
    // permanentAddress: Yup.string().required("Permanent Address is required"),
    // educationCertificateType: Yup.array().of(
    //     Yup.object().shape({
    //       educationCertificate: Yup.string().required('Education Certificate is required'),
    //       educationImg: Yup.mixed().required('Education Image is required'),
    //     })
    //   ),
    //   experienceLetter: Yup.string().required("Experience Letter is required"),
    //   relievingLetter: Yup.string().required("Relieving Letter is required"),
    //   salarySlips: Yup.string().required("Salary Slips is required"),
    //   uploadForm16: Yup.string().required("Form 16 of previous employer is required"),
    });