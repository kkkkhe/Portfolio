import skillPng from '@/assets/coding.png'
import { motion } from "framer-motion";
import { leftVariants, rightVariants, skills, tags } from './config'

export const SkillSection = () => {
	return (
		<motion.div
		initial="offscreen"
		whileInView="onscreen"
		viewport={{ once: true, amount: 0.5 }}
		className='pt-16 pb-32'
		>
			<div
		className="flex flex-1 justify-between container w-full">
			<motion.div
			variants={leftVariants}
			>
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
			</motion.div>
			<motion.div
			variants={rightVariants}
			className='w-[40%] h-auto flex items-center'>
				<img src={skillPng} alt="" />
			</motion.div>
		</div>
		</motion.div>
		
	)
}