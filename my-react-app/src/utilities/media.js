import { Storage } from 'aws-amplify';

// Define a function for media upload
export const uploadMedia = async (file, folderPath, fileName) => {
  try {
    console.log("Folder Path", folderPath);
    console.log("fileName", fileName);
    console.log("file type", file.type);
    console.log("file", file);
    const result = await Storage.put(`${folderPath}${fileName}`, file, {
      contentType: file.type, // Set the content type of the file
    });

    return result.key;
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error; // Rethrow the error for error handling at the component level
  }
};

export default uploadMedia;

