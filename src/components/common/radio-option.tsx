import {type ChangeEvent} from "react"

interface RadioOptionProps {
  label?: string
  name: string
  value: string
  checked: boolean
  disabled?: boolean
  required?: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const RadioOption = ({label, name, value, checked, disabled, required, onChange}: RadioOptionProps) => (
  <div className="form-check">
    <label className="form-check-label">
      <input className="form-check-input" type="radio" name={name} onChange={onChange} value={value} checked={checked} disabled={disabled} required={required}/>
      {label || value}
    </label>
  </div>
)

export default RadioOption
