import { useState } from 'react';
import { storage } from "../firebase"

export default function useUpload(url) {
  const [fileUrl, setFileUrl] = useState(url);
  const [error, setError] = useState('')
  const onUpload = (file, onSuccess = () => {}, onError = () => {}) => {
    const uploadTask = storage.ref(`docs/${file.name}`).put(file);
    uploadTask.on(
      "state_changed",
      () => {},
      (error) => {
        onError(error);
        setError('Upload failed!');
      },
      () => {
        storage
          .ref("docs")
          .child(file.name)
          .getDownloadURL()
          .then((url) => {
            onSuccess(null, url);
            setFileUrl(url)
          });
      }
    );
  };

  /**
   * @description Allow only 1MB to be uploaded
   * @param {file} file 
   * @returns {boolean}
   */
  const beforeUpload = (file) => {
    const isLt1MB = file.size / 1024 / 1024 <= 1;
    isLt1MB ? setError('') : setError('File too large! maximum size is 1MB')
    return isLt1MB;
  };

  return {
    onUpload,
    beforeUpload,
    fileUrl,
    error
  };
}
