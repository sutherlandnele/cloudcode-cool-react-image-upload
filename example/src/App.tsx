import React from 'react';
import { useState } from 'react';
import CoolImageUploader, { FileObjectType } from 'cool-react-image-upload';
import 'cool-react-image-upload/dist/index.css';
import './index.css';
import { BsCamera } from 'react-icons/bs';
import { RiDeleteRow } from 'react-icons/ri';

const App = () => {

  const [imageData, setImageData] = useState<string>('');

  function getImageFileObject(imageFile: FileObjectType) {
    setImageData(imageFile.dataUrl);
    console.log({ onAdd: imageFile });
  }
  function runAfterImageDelete(file: FileObjectType) {
    setImageData('');
    console.log({ onDele: file });
  }
  return (
    <div className='_dFlex'>
      {/* example 1 */}
      <div className='_m4'>
        <CoolImageUploader
          onFileAdded={(img: FileObjectType) => getImageFileObject(img)}
          onFileRemoved={(img: FileObjectType) => runAfterImageDelete(img)}
          acceptedFileTypes="image/jpeg,image/png"
          maxFileSize={1000000}
          style={{
            height: '150px',
            width: '150px',
            color: '#ffb200',
            backgroundColor: 'white',
            border: '3px solid #cccccc',
            borderRadius: '50%'
          }}        
          btnWrapperStyle={{
            top: '15px',
            right: '30px'
          }}
          imageData={imageData}          
          
          />
      </div>
      {/* example 2 
      <div className='_m4'>
        <CoolImageUploader
          onFileAdded={(img: FileObjectType) => getImageFileObject(img)}
          onFileRemoved={(img: FileObjectType) => runAfterImageDelete(img)}
          style={{
            height: 200,
            width: 200,
            background: 'rgb(0 182 255)',
            borderRadius: '8px',
            color: 'white'
          }}
        />
      </div>
      {/* example 3 
      <div className='_m4'>
        <CoolImageUploader
          onFileAdded={(img: FileObjectType) => getImageFileObject(img)}
          onFileRemoved={(img: FileObjectType) => runAfterImageDelete(img)}
          uploadIcon={<BsCamera fontSize='30px' />}
        />
      </div>
      {/* example 3 
      <div className='_m4'>
        <CoolImageUploader
          onFileAdded={(img: FileObjectType) => getImageFileObject(img)} // Runs to confirm that the image actually exists
          onFileRemoved={(img: FileObjectType) => runAfterImageDelete(img)} // Runs once the image is deleted
          uploadIcon={<BsCamera fontSize='50px' />}
          deleteIcon={<RiDeleteRow fontSize='30px' />}
          style={{
            height: '300px',
            width: '300px',
            color: '#ffb200',
            backgroundColor: 'white',
            border: '1px dashed #dddd',
            borderRadius: '6px'
          }}
        />
      </div>
      */}
    </div>
  )
}

export default App
