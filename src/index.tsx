import React, { useState, ChangeEvent, useEffect } from 'react'
import { DeleteIcon, UploadIcon } from './components/icons'
import { FileUploaderProps, FileObjectType } from './interface'
import './index.css'

const CoolImageUploader = ({
  onFileAdded,
  onFileRemoved,
  uploadIcon,
  deleteIcon,
  style,
  acceptedFileTypes,
  maxFileSize = 1000000,  // Default value of 1MB set here
  btnWrapperStyle, // destructure new prop
  imageData, // need this prop to maintain state when the component is re-rendered
  onError

}: FileUploaderProps): JSX.Element => {

  const [currentImg, setCurrentImg] = useState<Partial<FileObjectType>>(imageData ? { dataUrl: imageData } : { file: {} as File, dataUrl: '' });
  const [isHovering, setIsHovering] = useState(false);


  const handleFilePicker = (e: ChangeEvent<HTMLInputElement>): void => {
    const { files } = e.target

    //if (files != null && files.length > 0) {
    if (files && files[0]) {
      if (acceptedFileTypes && !acceptedFileTypes.split(",").includes(files[0].type)) {
        const msg = `File type not accepted. Acceptable types: ${acceptedFileTypes}`;
        if (onError) {
          onError(msg);
        } else {
          alert(msg);
        }
        return;
      }

      if (files[0].size > maxFileSize) {
        const maxFileSizeFormatted = formatBytes(maxFileSize);
        const msg = `File is too large. Maximum size allowed is ${maxFileSizeFormatted}.`;
        if (onError) {
          onError(msg);
        } else {
          alert(msg);
        }
        return;
      }

      // existing file handling logic
      const imageObject = {
        file: files[0],
        dataUrl: URL.createObjectURL(files[0])
      };

      setCurrentImg((oldImage) => {
        return { ...oldImage, ...imageObject }
      });

      if (onFileAdded) {
        onFileAdded(imageObject)
      };

    }
  };

  const handleDeleteImage = (): void => {
    if (onFileRemoved != null && Object.keys(currentImg).length > 0) {
      const partialCurrentImg: Partial<FileObjectType> = currentImg
      const _currentImg: FileObjectType = partialCurrentImg as FileObjectType
      onFileRemoved(_currentImg)
    }
    setCurrentImg({});
  };


  const mapMimeTypesToFileExtensions = (mimeTypes: string): string => {

    const mimeToExt : Record<string, string> = {
      'image/jpeg': 'jpg',          // Standard for photographic images
      'image/png': 'png',           // Supports transparency and lossless compression
      'image/gif': 'gif',           // Supports animation
      'image/bmp': 'bmp',           // Bitmap images
      'image/svg+xml': 'svg',       // Scalable Vector Graphics
      'image/tiff': 'tiff',         // High-quality images supported by photographers
      'image/webp': 'webp',         // Modern format for excellent compression
      'image/x-icon': 'ico',        // Icons for websites
      'image/heic': 'heic',         // High Efficiency Image Format used by Apple devices
      'image/heif': 'heif',         // High Efficiency Image File Format
      'image/psd': 'psd',           // Photoshop Document
      'image/vnd.adobe.photoshop': 'psd',  // Photoshop Document
      'image/x-cmu-raster': 'ras',  // Sun raster format
      'image/x-portable-bitmap': 'pbm',  // Portable Bitmap format
      'image/x-portable-graymap': 'pgm',  // Portable Graymap format
      'image/x-portable-pixmap': 'ppm',  // Portable Pixmap format
      'image/x-rgb': 'rgb',         // Raw RGB format
      'image/x-xbitmap': 'xbm',     // X Bitmap format
      'image/x-xpixmap': 'xpm',     // X Pixmap format
      'image/x-windowdump': 'xwd',  // X Window Dump
      'image/x-portable-anymap': 'pnm'  // Portable Anymap format
    };


    return mimeTypes.split(',').map(mimeType => mimeToExt[mimeType.trim()] || mimeType).join(', ');
  }

  const formatBytes = (bytes: number, decimals: number = 2): string => {
    if (bytes === 0) return '0 Bytes';
  
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  
    const i = Math.floor(Math.log(bytes) / Math.log(k));
  
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  };
  

  
  return (
    <div className='uploader__container'>
      {/* button wrapper */}
      <div className='uploader__placeholder' style={style}>
        <div className='uploader__btn_wrapper' style={btnWrapperStyle || {}}>
          <div className='uploader__btn' onClick={() => handleDeleteImage()}>
            <DeleteIcon icon={deleteIcon} />
          </div>
        </div>

        {/* upload Input Box */}
        {currentImg && currentImg.dataUrl !== null && (
          <label id='file_uploader' 
          className={`uploader__file_input_label ${isHovering ? 'fake-hover' : ''}`}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onTouchStart={() => setIsHovering(true)}
          onTouchEnd={() => setIsHovering(false)}
          
          >
            <UploadIcon element={uploadIcon} />
            {/* input element */}
            <input
              className='uploader__file_input'
              key={currentImg.dataUrl}
              type='file'
              name='upload'
              onChange={(e) => handleFilePicker(e)}
              accept={acceptedFileTypes??'image/*'}
              id='file_uploader'
            />
          </label>
        )}
        {/* image */}
        {currentImg.dataUrl && (
          <img
            className='uploader__file'
            src={currentImg.dataUrl}
            alt={currentImg.dataUrl}
            loading='lazy'
          />
        )}
      </div>
    </div>
  )
}

export default CoolImageUploader;
export type { FileUploaderProps, FileObjectType };
