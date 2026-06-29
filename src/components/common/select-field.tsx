import {type ChangeEvent} from "react"

interface SelectOption {
  value: string
  text: string
}

interface SelectFieldProps {
  value?: string
  name: string
  label?: string | null
  disabled?: boolean
  required?: boolean
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void
  options?: Array<string | SelectOption>
}

const SelectField = ({value = "", name, label = null, disabled = false, required = false, onChange, options = [""]}: SelectFieldProps) => (
  <div className="mb-3 row">
    {label ? (<label htmlFor={`input_${name}`} className="col-sm-2 col-form-label">{label}</label>) : null}
    <div className="col-sm-10">
      <select className="form-select" id={`input_${name}`} name={name} disabled={disabled} value={value} onChange={onChange} required={required}>
        {options.map((o,ox) => (<option key={ox} value={typeof o === "string" ? o : o.value}>{typeof o === "string" ? o : o.text}</option>))}
      </select>
    </div>
  </div>
)
export default SelectField
