import {type ChangeEvent} from "react"

interface OptionFieldProps {
  checked: boolean
  name: string
  label?: string | null
  disabled?: boolean
  required?: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const OptionField = ({checked, name, label = null, disabled = false, required = false, onChange}: OptionFieldProps) => (
  <div className="mb-3 row">
    <div className="offset-2 col-10">
      <div className="form-check form-switch">
        <input type="checkbox" name={name} className="form-check-input" id={`input_${name}`} onChange={onChange} checked={checked} disabled={disabled} required={required}/>
        {label ? (<label className="form-check-label" htmlFor={`input_${name}`}>{label}</label>) : null}
      </div>
    </div>
  </div>
)

export default OptionField
