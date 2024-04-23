import { ReactNode, CSSProperties } from 'react'

interface FileObjectType {
  file: File
  dataUrl: string
}
interface FileUploaderProps {
  onFileAdded: ({ file, dataUrl }: FileObjectType) => any
  onFileRemoved?: ({ file, dataUrl }: FileObjectType) => any

  uploadIcon?: ReactNode
  deleteIcon?: ReactNode
  style?: CSSProperties
  acceptedFileTypes?: string
  maxFileSize?: number
  btnWrapperStyle?: CSSProperties; // new style prop for the button wrapper
}
interface UploadIconProp {
  element?: ReactNode
}
interface DeleteIconProps {
  icon?: ReactNode
}

export type {
  FileObjectType,
  FileUploaderProps,
  UploadIconProp,
  DeleteIconProps
}
