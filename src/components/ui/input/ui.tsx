import { forwardRef } from "react"
import { RefCallBack } from "react-hook-form"

type InputPropsType = {
	onChange: () => void
	value: string
	placeholder: string
	type: string
	name: string
}

export const Input = ({onChange, value, placeholder, type, name}:InputPropsType) => {
	return (
		<input 
		className="dark:bg-[#121212] bg-[#FEFBF6] p-3 max-w-full border-b-[3px] border-purple placeholder-black dark:placeholder-white"
		name={name} type={type} onChange={onChange} placeholder={placeholder} value={value} />
	)
}