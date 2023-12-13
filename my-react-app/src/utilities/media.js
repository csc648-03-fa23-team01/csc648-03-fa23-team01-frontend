import AWS from 'aws-sdk';


export const uploadMedia = async (file, folderPath,fileName) => {
  const S3_BUCKET = process.env.REACT_APP_BUCKET_NAME;
  const REGION = process.env.REACT_APP_BUCKET_REGION;

  AWS.config.update({
    accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,
  });
  const s3 = new AWS.S3({
    params: { Bucket: S3_BUCKET },
    region: REGION,
  });
  console.log(`${folderPath}${fileName}`);
  const params = {
    Bucket: S3_BUCKET,
    Key: `${folderPath}${fileName}`,
    Body: file,
  };

  var upload = s3
    .putObject(params)
    .on("httpUploadProgress", (evt) => {
      console.log(
        "Uploading " + parseInt((evt.loaded * 100) / evt.total) + "%"
      );
    }).promise();

  await upload.then((err, data) => {
    console.log("File uploaded successfully.");
  });
  return `${folderPath}${fileName}`;
};
// // Define a function for media upload
// export const uploadMedia = async (file, folderPath, fileName) => {
//   try {
//     console.log("Folder Path", folderPath);
//     console.log("fileName", fileName);
//     console.log("file type", file.type);
//     console.log("file", file);
//     const result = await Storage.put(`${folderPath}${fileName}`, file, {
//       contentType: file.type, // Set the content type of the file
//     });

//     return result.key;
//   } catch (error) {
//     console.error('Error uploading file:', error);
//     throw error; // Rethrow the error for error handling at the component level
//   }
// };

export default uploadMedia;

