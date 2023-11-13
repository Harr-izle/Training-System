import Form from "../components/commons/Form"
import passwordIcon from "../assets/svgs/lock_icon.svg"

const ResetPassword = () => {
  return (
    <Form
        name="reset-password"
        fields={fields}
        btnText="Save new password"
        heading="Reset Password"
        text="Please enter your email to receive the reset link in your mail."
    />
  )
}

const fields = [
    {
        name: "password",
        icon: passwordIcon,
        text: "New Password",
        placeholder: "Type your new password",
    },
    {
        name: "password",
        icon: passwordIcon,
        text: "Confirm Password",
        placeholder: "confirm your password",
    }
]

export default ResetPassword
