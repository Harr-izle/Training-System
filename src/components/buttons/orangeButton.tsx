import {FC} from 'react'

interface BtnProps {
  text: string
}

const orangeButton: FC<BtnProps> = ({text}) => {
  return (
   <button className="w-full bg-[#EC4A0A] h-11 text-white rounded-lg">
    {text}
   </button>
  )
}

export default orangeButton
