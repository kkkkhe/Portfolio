import about from '@/assets/about.png'
import { PurpleButton } from '../ui/purpleButton'
import { motion } from "framer-motion";
import { leftVariants, rightVariants } from './config';



export const AboutSection = () => {
	return (
		<motion.div
		initial="offscreen"
		whileInView="onscreen"
		viewport={{ once: true, amount: 0.6 }}
		className=' md:pt-12 lg:pt-32 pb-32'
		>
			<div className='container lg:flex justify-between md:block'>
			<motion.div
			variants={leftVariants} 
			className='max-w-[660px] flex justify-center h-auto pr-5 2xl:max-w-[660px] xl:max-w-[560px] sm:pr-0'>
				<img className='lg:w-full h-auto sm:max-w-[400px]' src={about} alt="" />
			</motion.div>
			<div
			className='flex flex-col items-start text-[25px]'>
				<h1 className='mb-10 text-[70px] font-semibold 2xl:text-[70px] xl:text-[40px] sm:text-[30px]'>About me</h1>
				<div className='mb-10 max-w-[900px] leading-10 2xl:text-[30px] xl:text-[24px] sm:text-[20px]'>
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
			</div>
		</div>
		</motion.div>
		
	)
}