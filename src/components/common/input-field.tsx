import {type ChangeEvent} from "react"

interface InputFieldProps {
  value?: string
  name?: string
  label?: string | null
  type?: string
  placeholder?: string
  required?: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const InputField = ({value = "", name = "input", label = null, type = "text", placeholder, required = false, onChange}: InputFieldProps) => (
  <div className="mb-3 row">
    {label ? (<label htmlFor={`input_${name}`} className="col-sm-2 col-form-label">{label}</label>) : null}
    <div className="col-sm-10">
      <input type={type} name={name} id={`input_${name}`} className="form-control" placeholder={placeholder} maxLength={100} required={required} value={value} onChange={onChange} />
    </div>
  </div>
)
export default InputField
