// export default function Upload(updateFiles,onDelete,handleSee,handleSee,handleWatch,handleStart,handleFinish,handleAbort,handleCancel) {
//     const [aadharDocuments, setAadharDocuments] = React.useState([]);
// const [extFiles, setExtFiles] = React.useState([]);
// const [imageSrc, setImageSrc] = React.useState(undefined);
// const [videoSrc, setVideoSrc] = React.useState(undefined);

// const updateFiles = (incommingFiles) => {
//   console.log("incomming files", incommingFiles);
//   setAadharDocuments(incommingFiles);
// };
// const onDelete = (id) => {
//   setAadharDocuments(aadharDocuments.filter((x) => x.id !== id));
// };
// const handleSee = (imageSource) => {
//   setImageSrc(imageSource);
// };
// const handleWatch = (videoSource) => {
//   setVideoSrc(videoSource);
// };
// const handleStart = (filesToUpload) => {
//   console.log("advanced demo start upload", filesToUpload);
// };
// const handleFinish = (uploadedFiles) => {
//   console.log("advanced demo finish upload", uploadedFiles);
// };
// const handleAbort = (id) => {
//   setAadharDocuments(
//     aadharDocuments.map((ef) => {
//       if (ef.id === id) {
//         return { ...ef, uploadStatus: "aborted" };
//        } else return { ...ef };
//      })
//    );
// };
// const handleCancel = (id) => {
//   setAadharDocuments(
//     aadharDocuments.map((ef) => {
//       if (ef.id === id) {
//         return { ...ef, uploadStatus: undefined };
//        } else return { ...ef };
//      })
//    );
// };

// return(

// )
// }