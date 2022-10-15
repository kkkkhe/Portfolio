import about from '@/assets/about.png'
import { PurpleButton } from '../ui/purpleButton'
import { motion } from "framer-motion";
import { leftVariants } from './config';
import { Element, Link } from 'react-scroll'


export const AboutSection = () => {
	return (
		<Element name='about'>
			<motion.div
		initial="offscreen"
		whileInView="onscreen"
		viewport={{ once: true, amount: 0.6 }}
		className='md:pt-12 lg:pt-56 pb-32'
		>
			<div className='container lg:flex justify-between md:block'>
			<motion.div
			variants={leftVariants} 
			className='pr-5 sm:pr-0 h-auto items-center 2xl:max-w-[700px] xl:max-w-[500px] lg:max-w-[400px] flex justify-center'>
				<img className='w-full h-auto lg:max-w-[100%] md:max-w-[400px] sm:max-w-[400px]' src={about} alt="" />
			</motion.div>
			<div
			className='flex flex-col items-start text-[25px]'>
				<h1 className='mb-10 text-[70px] font-semibold small:text-2xl 2xl:text-[70px] xl:text-[40px] sm:text-[30px]'>About me</h1>
				<div className='mb-10 max-w-[900px] small:text-lg leading-10 2xl:text-[30px] xl:text-[24px] sm:text-[20px]'>
				A passionate Front-end Developer  🚀 having an experience of building Web applications with JavaScript / Reactjs and some other cool libraries.
				</div>
				<div className='flex gap-10'>
					<PurpleButton>
						<a href="#">See my resume</a>
					</PurpleButton>
					<PurpleButton>
								<Link to={'contact'} spy={true} smooth={true} duration={250}>
									Contact me
								</Link>
					</PurpleButton>
				</div>
			</div>
		</div>
		</motion.div>
		</Element>
		
		
	)
}