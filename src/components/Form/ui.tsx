import { Controller, useForm } from "react-hook-form"
import { Input } from "../ui/input"
import { TextArea } from "../ui/textArea"
import emailjs from 'emailjs-com';
import { useRef } from "react";
export const Form = () => {
	const ref = useRef<any>('')
	const {register, handleSubmit, control} = useForm({
		defaultValues:{
			from_name: '',
			message: ''
		}
	})
	const onHandleSubmit = (e:any) => {
		e.preventDefault()
		emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, ref.current, import.meta.env.VITE_PUBLIC_KEY)
		.then((result) => {
			console.log(result.text);
		}, (error) => {
			console.log(2);
		});
	}
	return (
		<div className="tablet:flex flex-col items-center">
			<h1 className="font-semibold border-b-[3px] border-purple inline-block px-2 mb-10">Get in touch</h1>
			<form action="" ref={ref}  onSubmit={onHandleSubmit} className='w-96'>
				<div className="flex flex-col gap-y-8 mb-5">
					<Controller
						control={control}
						name='from_name'
						render={({ field: { onChange, value, name } }) => {
							return <Input placeholder='Your name' name={name} type='text' onChange={onChange} value={value}/>
						}}
						/>
						<Controller
						control={control}
						name='message'
						render={({ field: { onChange, value, name } }) => {
							return <TextArea placeholder='Text' name={name} onChange={onChange} value={value}/>
						}}
						/>
				</div>	
					<button className="bg-purple text-white p-3 w-52 rounded-md" onSubmit={onHandleSubmit}>Send to e-mail</button>
			</form>
		</div>
	)
}