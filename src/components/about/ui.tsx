import about from '@/assets/about.png'
import { motion } from 'framer-motion'
import { leftAnimation, rightAnimation } from './config'
import { PurpleButton } from '../ui/purpleButton'
export const AboutSection = () => {
	return (
		<motion.div className='container flex justify-between mb-28'
		initial="hidden"
		whileInView="visible"
		viewport={{amount:0.2}}
		>

			<motion.div 
			custom={1} 
			variants={leftAnimation}
			className='max-w-[660px] h-auto pr-5'>
				<img className='w-full h-auto' src={about} alt="" />
			</motion.div>
			<motion.div 
			custom={1} 
			variants={rightAnimation} 
			className='flex flex-col items-start text-[25px]'>
				<h1 className='mb-10 text-[70px] font-semibold'>About me</h1>
				<div className='mb-10 max-w-[900px] text-[30px] leading-10'>
				A passionate Front-end Developer  🚀 having an experience of building Web applications with JavaScript / Reactjs and some other cool libraries and frameworks.
				</div>
				<div className='flex gap-10'>
					<PurpleButton>
						<a href="#">Contact me</a>
					</PurpleButton>
					<PurpleButton>
						<a href="#">See my resume</a>
					</PurpleButton>
				</div>
			</motion.div>
		</motion.div>
	)
}