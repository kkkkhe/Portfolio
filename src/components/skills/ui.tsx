import skillPng from '@/assets/coding.png'
import { skills, tags } from './config'
export const SkillSection = () => {
	return (
		<div className="flex flex-1 justify-between container w-full pt-12">
			<div>
				<h1 className='text-[58px] font-semibold'>What I do</h1>
				<p className='mb-12 text-[19px]'>WEB DEVELOPER WHO WANTS TO EXPLORE NEW TECH STACK</p>
				<div className='grid grid-cols-5 mb-10'>
					{skills.map(({label, icon}) => {
					return (
						<div className='w-[70px] mb-7 grid justify-self-center '>
							<div className='max-w-[70px] h-auto mb-3'>
								{icon}
							</div>
							<div className='flex justify-center w-full'>
								{label}
							</div>
						</div>
					)
				})}
				</div>
				{tags.map(({text}) => {
					return (
						<h1 className='text-2xl'>
							{text}
						</h1>
					)
				})}
			</div>
			<div className='w-[40%] h-auto flex items-center'>
				<img src={skillPng} alt="" />
			</div>
		</div>
	)
}