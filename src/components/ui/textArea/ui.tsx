import { RefCallBack } from "react-hook-form"

type InputPropsType = {
	onChange: () => void
	value: string
	placeholder: string
	name: string
}

export const TextArea = ({onChange, value, placeholder, name}:InputPropsType) => {
	return (
		<textarea 
		className="placeholder-black dark:placeholder-white dark:bg-[#121212] p-3 bg-[#FEFBF6] border-b-[3px] border-purple"
		placeholder={placeholder} onChange={onChange} name={name} value={value} ></textarea>
	)
}