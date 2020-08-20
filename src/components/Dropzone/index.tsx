import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { AiOutlineUser } from 'react-icons/ai';

import { DropzoneStyle } from './styles';

interface Props {
  onFileUploaded: (file: File) => void;
}

const Dropzone: React.FC<Props> = ({ onFileUploaded }) => {
  const [selectedFileUrl, setSelectedFileUrl] = useState('');

  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];

    const fileUrl = URL.createObjectURL(file);

    setSelectedFileUrl(fileUrl);
    onFileUploaded(file);
  }, [onFileUploaded]);
  
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*'
  });

  return (
    <DropzoneStyle {...getRootProps()}>
      <input {...getInputProps()} accept="image/*" />
      { selectedFileUrl 
        ? <img src={selectedFileUrl} alt="Point thumbnail" />
        : (
          <AiOutlineUser size={50} color="#E5E5E5"/>
        )
      }
    </DropzoneStyle>
  );
}

export default Dropzone;