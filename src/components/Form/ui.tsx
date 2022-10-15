import { Controller, useForm } from "react-hook-form"
import { Input } from "../ui/input"
import { TextArea } from "../ui/textArea"
export const Form = () => {
	const {register, handleSubmit, control} = useForm({
		defaultValues:{
			name: '',
			email: '',
			text: ''
		}
	})
	const onHandleSubmit = (data:any) => {
		console.log(data)
	}
	return (
		<div className="tablet:flex flex-col items-center">
			<h1 className="font-semibold border-b-[3px] border-purple inline-block px-2 mb-10">Get in touch</h1>
			<form action="" onSubmit={handleSubmit(onHandleSubmit)} className='w-96'>
				<div className="flex flex-col gap-y-8">
					<Controller
						control={control}
						name='name'
						render={({ field: { onChange, value, ref, name } }) => {
							return <Input placeholder='Your name' name={name} type='text' onChange={onChange} value={value}/>
						}}
						/>
						<Controller
						control={control}
						name='email'
						render={({ field: { onChange, value, ref, name } }) => {
							return <Input placeholder='Email' name={name} type='email' onChange={onChange} value={value} />
						}}
						/>
						<Controller
						control={control}
						name='text'
						render={({ field: { onChange, value, ref, name } }) => {
							return <TextArea placeholder='Text' name={name} onChange={onChange} value={value}/>
						}}
						/>
				</div>	
			</form>
		</div>
	)
}