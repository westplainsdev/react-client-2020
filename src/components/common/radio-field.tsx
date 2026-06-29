import {type ChangeEvent} from "react"
import RadioOption from "./radio-option"

interface RadioOptionItem {
  value: string
  label?: string
  disabled?: boolean
}

interface RadioFieldProps {
  value?: string
  name: string
  label?: string | null
  disabled?: boolean
  required?: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  options?: Array<string | RadioOptionItem>
}

const RadioField = ({value = "", name, disabled = false, required = false, onChange, options = [""]}: RadioFieldProps) => (
  <fieldset className="mb-3">
    <div className="row">
      <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
      <div className="col-sm-10">
        {options.map((o,ox) => (
          <RadioOption
            key={ox}
            name={name}
            value={typeof o === "string" ? o : o.value}
            checked={(typeof o === "string" ? o : o.value) === value}
            label={typeof o === "string" ? o : o.label}
            onChange={onChange}
            disabled={typeof o === "string" ? disabled : o.disabled}
            required={required}
          />
        ))}
      </div>
    </div>
  </fieldset>
)
export default RadioField
