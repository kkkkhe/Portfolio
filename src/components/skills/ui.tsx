import skillPng from '@/assets/coding.png'
import { motion } from "framer-motion";
import { leftVariants, rightVariants, skills, tags } from './config'
import { Element } from 'react-scroll'
export const SkillSection = () => {
	return (
		<Element name='skills'>
			<motion.div
		initial="offscreen"
		whileInView="onscreen"
		viewport={{ once: true, amount: 0.5 }}
		className='pt-16 pb-32'
		>
			<div
			className="lg:flex md:block flex-1 justify-between container w-full">
			<motion.div
			variants={leftVariants}
			>
				<h1 className='font-semibold 2xl:text-[58px] xl:text-[40px] sm:text-[30px]'>What I do</h1>
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
			className='h-auto items-center 2xl:max-w-[700px] xl:max-w-[500px] lg:max-w-[400px] flex justify-center md:pt-16 lg:pt-0'>
				<img className='w-full h-auto lg:max-w-[100%] md:max-w-[400px] sm:max-w-[400px]' src={skillPng} alt="" />
			</motion.div>
		</div>
		</motion.div>
		</Element>
		
		
	)
}