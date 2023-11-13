
import mailSvg from "../assets/svgs/mail_svg.svg"
import lockSvg from "../assets/svgs/lock_icon.svg"
import Form from "../components/commons/Form"

const fields = [
  {
    name: "email",
    icon: mailSvg,
    text: "Email/Staff ID",
    placeholder: "Your email or staff ID",
  },
  {
    name: "password",
    icon: lockSvg,
    text: "Password",
    placeholder: "Type your password here",
  }
]
const Login = () => {

  return (
      <Form
        fields={fields}
        name="login"
        text="Please enter your login details below to access your account."
        heading="Login"
        btnText="Login"
      />
  )
}

export default Login
