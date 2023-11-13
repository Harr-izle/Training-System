import Form from "../components/commons/Form"
import mailSvg from "../assets/svgs/mail_svg.svg"

const ForgotPassword = () => {
  return (
      <Form
        name="forgot-password"
        fields={fields}
        heading="Forgot Password"
        text="Please enter your email to receive the reset link in your mail."
        btnText="Send reset link"
      />
  )
}


const fields = [
    {
      name: "email",
      icon: mailSvg,
      text: "Email",
      placeholder: "Your email",
    }
  ]

export default ForgotPassword
