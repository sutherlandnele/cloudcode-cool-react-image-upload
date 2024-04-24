# Cool React Image Upload

Cool React Image Upload is a comprehensive React component designed for handling image uploads with features like file type filtering and file size validation. It provides an easy integration for any React application and offers extensive customization options.

## Original Source

The starter code for this node module was cloned from git@github.com:chimdie/react-image-upload.git.

## Added Features

- **File Type Filtering**: Restrict uploads to specific file types.
- **File Size Validation**: Limit the size of the uploads.
- **Customizable Styles**: Adjust the look and feel according to your application design.
- **Persistent State Management**: Maintain image state during component re-renders.

## Installation

You can install the package using npm or yarn:

npm:

```bash
npm install cool-react-image-upload
```

yarn:

```bash
yarn add cool-react-image-upload
```

## Usage

Below is a simple example to demonstrate how to integrate the Cool React Image Upload into your project:

```javascript
import React, { useState } from 'react';
import CoolImageUploader from 'cool-react-image-upload';

function App() {
  const [imageData, setImageData] = useState('');

  const handleOnFileAdded = (file) => {
    setImageData(file.dataUrl);
  };

  const handleOnFileRemoved = () => {
    setImageData('');
  };

  return (
    <div>
      <CoolImageUploader
        onFileAdded={handleOnFileAdded}
        onFileRemoved={handleOnFileRemoved}
        imageData={imageData}
        onImageChange={setImageData}
        acceptedFileTypes="image/jpeg,image/png"
        maxFileSize={1000000}  // 1MB max file size
        style={{
          height: '150px',
          width: '150px',
          borderRadius: '10px'
        }}
        btnWrapperStyle={{
          top: '10px',
          right: '10px'
        }}
      />
    </div>
  );
}

export default App;
```

## Props

- **onFileAdded (Function)**: Callback fired when a file is added. Ensure you update the imageData state within the React App that is using the package. (REQUIRED)
- **onFileRemoved (Function)**: Callback fired when a file is removed. Ensure you update the imageData state within the React App that is using the package. (REQUIRED)
- **imageData (string)**: The data URL of the image. This is managed in the parent component's state. (REQUIRED)
- **acceptedFileTypes (string)**: MIME types allowed for the upload. (OPTIONAL)
- **maxFileSize (number)**: Maximum file size allowed in bytes. (OPTIONAL)
- **style (CSSProperties)**: Styles for the uploader container. (OPTIONAL)
- **btnWrapperStyle (CSSProperties)**: Styles for the delete button container.(OPTIONAL)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

This project is licensed under the MIT License - see [MIT License](https://opensource.org/licenses/MIT) for details.