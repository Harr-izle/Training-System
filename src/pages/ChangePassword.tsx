import Form from "../components/commons/Form"
import passwordIcon from "../assets/svgs/lock_icon.svg"

const ChangePassword = () => {
  return (
   <Form 
   
        name="change-password"
        fields={fields}
        btnText="Save new password"
        heading="Change Password"
        text="Please fill the form below to change your password. "
 
   />
  )
}
const fields = [
    {
        name: "password",
        icon: passwordIcon,
        text: "Current Password",
        placeholder: "Type your current password",
    },
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
        placeholder: "Confirm your new password",
    }
]

export default ChangePassword
