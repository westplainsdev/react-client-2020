interface AlertProps {
  message?: string | null
}

const Alert = ({message}: AlertProps) => (
  message ? (<div className="alert alert-danger">{message}</div>) : null
)

export default Alert
