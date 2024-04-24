import { ReactNode, CSSProperties } from 'react';

interface FileObjectType {
  file: File;
  dataUrl: string;
};
interface FileUploaderProps {
  onFileAdded: ({ file, dataUrl }: FileObjectType) => any;
  onFileRemoved?: ({ file, dataUrl }: FileObjectType) => any;
  uploadIcon?: ReactNode;
  deleteIcon?: ReactNode;
  style?: CSSProperties;
  acceptedFileTypes?: string;
  maxFileSize?: number;
  btnWrapperStyle?: CSSProperties; // new style prop for the button wrapper
  // Define imageData as a string since it's expected to be a URL (or potentially a Base64 string)
  imageData: string;
  onError?: (errorMsg: string) => void;

}
interface UploadIconProp {
  element?: ReactNode;
}
interface DeleteIconProps {
  icon?: ReactNode;
}

export type {
  FileObjectType,
  FileUploaderProps,
  UploadIconProp,
  DeleteIconProps
}
