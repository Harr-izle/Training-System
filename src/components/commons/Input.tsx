import {FC, useState} from 'react'
import openEyeIcon from "../../assets/svgs/openEye_icon.svg"
import closedEyeIcon from "../../assets/svgs/closedEye_icon.svg"

interface InputProps {
    icon: string;
    name: string;
    text: string;
    placeholder: string;
    type: string
}

const Input: FC<InputProps> = ({icon, name, text, placeholder, type}) => {
    const [showPassword, setShowPassword] = useState(false)
  return (
    <div>
          <span>{text}</span>
          <div className="py-2 px-4 flex gap-2 border rounded-lg mt-2">
            <img src={icon} alt={name} />
            <input type={showPassword ? 'text' : type} placeholder={placeholder} className="h-6 w-full focus:outline-none px-2"/>
            {name === 'password' && <img src={showPassword ? openEyeIcon : closedEyeIcon} alt={name} className="h-6 w-6 cursor-pointer" onClick={() => setShowPassword(!showPassword)}/>}
          </div>
        </div>
  )
}

export default Input
