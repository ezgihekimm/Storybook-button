import clsx from 'clsx'
import { useState } from 'react'
import { Icon } from '../../icon/icon'
import './Upload.scss'
export interface UploadFileProps {
  title?: string
  description?: string
  error?: boolean
  errorMessage?: string
}

export const UploadFile = (props: UploadFileProps) => {
  const { title, description, error, errorMessage } = props
  const [fileSelected, setFileSelected] = useState(false)

  const handleFileChange = (e: any) => {
    setFileSelected(e.target.files && e.target.files.length > 0)
  }
  return (
    <div className="">
      {title && <p className="title">{title}</p>}
      <div
        className={clsx(
          'file-box',
          `${error ? 'file-error' : ''}`,
          `${error ? 'custom-box-shadow' : ''}`,
        )}
      >
        <label
          htmlFor="myFile"
          className={`file-button ${fileSelected ? 'file-selected' : ''}`}
        >
          <div className="icon-box">
            <Icon color="neutral" type="ArrowUpTray" size="lg" />
          </div>
          <span className="file-label">Dosya Seç</span>
        </label>
        <input type="file" id="myFile" onChange={handleFileChange} />
      </div>
      {description && !fileSelected && (
        <p className="description">{description}</p>
      )}
      {error && <p className="error-text">{errorMessage}</p>}
    </div>
  )
}
