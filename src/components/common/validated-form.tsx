import {useRef, useState, type FormEvent, type ReactNode} from "react"

interface ValidatedFormProps {
  children: ReactNode
  onValidSubmit: () => void
}

const ValidatedForm = ({children, onValidSubmit}: ValidatedFormProps) => {
  const formRef = useRef<HTMLFormElement>(null)
  const [className, setClassName] = useState("needs-validation")

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    setClassName("needs-validation")
    event.preventDefault()
    event.stopPropagation()
    let form = formRef.current
    if (form && form.checkValidity() === true) {
      onValidSubmit()
    }
    setClassName("was-validated")
  }
  return (
    <form ref={formRef} onSubmit={onSubmit} className={className} noValidate={true}>
      {children}
    </form>
  )
}

export default ValidatedForm
