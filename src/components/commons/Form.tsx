import {FC} from 'react'
import Input from "./Input"
import logo from "../../assets/Amalitech logo.png"
import OrangeButton from '../buttons/orangeButton'
import backIcon from "../../assets/svgs/backIcon.svg"
import {Link, useNavigate} from "react-router-dom"

interface FormProps {
    name: string;
    text: string;
    heading: string;
    btnText: string;
    fields: field[];
}

type field = {
    name: string;
    icon: string;
    text: string;
    placeholder: string;
}

const Form: FC<FormProps> = ({name, text, heading, fields, btnText}) => {
    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }
  return (
    <div className="w-full h-screen overflow-hidden flex items-center justify-center">
        <form className="max-w-[471px] p-8 flex flex-col gap-4 border-2 rounded-xl bg-white">
            <div className="w-[220px] h-10">
            <img src={logo} alt="Logo" className="w-full h-full object-contain"/>
            </div>
            <h1 className="font-semibold text-xl">{heading}</h1>
            <span className="text-[#333441]">{text}</span>
            {fields.map((field: field) => <Input 
            name={field.name} 
            text={field.text} 
            icon={field.icon} 
            placeholder={field.placeholder}
            type={field.name}
            />)}
            {name === 'login' && <div className="flex items-center justify-between">
            <div className="flex gap-2">
                <input type="checkbox" name="remember-me" id="remember-me" className="cursor-pointer"/>
                <label htmlFor="remember-me">Remember me</label>
            </div>
            <Link to="/forgot-password" className="text-[#EC4A0A] cursor-pointer">Forgot password?</Link>
            </div>}
            <OrangeButton text={btnText}/>
            {name !== 'login' && <div onClick={goBack} className='w-full py-2 flex items-center justify-center gap-2 border border-[#EC4A0A] rounded-lg cursor-pointer'>
                <img src={backIcon} alt="<-" />
                <span>Back to login</span>
            </div>}
        </form>
    </div>
  )
}

export default Form
