import './Textarea.scss'

export interface TextareaProps {
  placeholder?: string
  title?: string
}

export const Textarea = (props: TextareaProps) => {
  const { placeholder, title } = props
  return (
    <div>
      {title && <p className="title">{title}</p>}
      <div className="text-box">
        <textarea placeholder={placeholder} id="myTextarea" />
      </div>
    </div>
  )
}

export default Textarea
