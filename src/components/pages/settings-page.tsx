import {useState, type ChangeEvent} from "react"
import DefaultLayout from "../start-layout/default-layout"
import ValidatedForm from "../common/validated-form"
import InputField from "../common/input-field"
import SelectField from "../common/select-field"
import OptionField from "../common/option-field"
import RadioField from "../common/radio-field"
import Alert from "../common/alert"

const SettingsPage = () => {
  const [displayName, setDisplayName] = useState("")
  const [email, setEmail] = useState("")
  const [theme, setTheme] = useState("light")
  const [notifications, setNotifications] = useState(true)
  const [layout, setLayout] = useState("fixed")
  const [savedMessage, setSavedMessage] = useState<string | null>(null)

  const handleSave = () => {
    setSavedMessage("Settings saved (demo only — no backend connected).")
    setTimeout(() => setSavedMessage(null), 3000)
  }

  return (
    <DefaultLayout>
      <h1><i className="fa fa-cog" aria-hidden="true"></i> Settings</h1>

      <Alert message={savedMessage ? undefined : undefined} />
      {savedMessage && (
        <div className="alert alert-success">
          <i className="fa fa-check-circle"></i> {savedMessage}
        </div>
      )}

      <div className="col-md-8">
        <ValidatedForm onValidSubmit={handleSave}>
          <InputField
            name="displayName"
            label="Display Name"
            value={displayName}
            placeholder="Enter your name"
            required={true}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setDisplayName(e.target.value)}
          />

          <InputField
            name="email"
            label="Email"
            type="email"
            value={email}
            placeholder="you@example.com"
            required={true}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          />

          <SelectField
            name="theme"
            label="Theme"
            value={theme}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => setTheme(e.target.value)}
            options={[
              {value: "light", text: "Light"},
              {value: "dark", text: "Dark"},
              {value: "auto", text: "Auto (system)"},
            ]}
          />

          <OptionField
            name="notifications"
            label="Enable email notifications"
            checked={notifications}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setNotifications(e.target.checked)}
          />

          <RadioField
            name="layout"
            value={layout}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setLayout(e.target.value)}
            options={[
              {value: "fixed", label: "Fixed (navbar stays on top)"},
              {value: "fluid", label: "Fluid (navbar scrolls away)"},
            ]}
          />

          <div className="mb-3 row">
            <div className="offset-sm-2 col-sm-10">
              <button type="submit" className="btn btn-primary">
                <i className="fa fa-save"></i> Save Settings
              </button>
            </div>
          </div>
        </ValidatedForm>
      </div>
    </DefaultLayout>
  )
}

export default SettingsPage
