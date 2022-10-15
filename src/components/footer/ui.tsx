import womanSvg from '@/assets/waiting.webp'
import { socials } from '../../config'
import { Form } from '../Form'
import { Element } from 'react-scroll'
export const Footer = () => {
	return (
			<Element name='contant'>
			<div className="bg-[#FEFBF6] dark:bg-[#121212]">

			<div className="container pt-16 pb-16 ">
				<div className="w-full flex items-center flex-col">
					<h2 className='mb-16'>"Develop a passion for learning. If you do, you will never cease to grow."</h2>
					<div className='lg:flex  gap-32'>
						<div className='max-w-[540px] h-auto'>
							<img className='' src={womanSvg} alt="woman waiting" />
						</div>
						<Form/>
					</div>
					<div className='flex gap-4 pt-8'>
					{socials.map(({link, icon}, id) => {
						return (
							<a href={link} key={id} className='hover:-translate-y-1 transition-transform delay-75'>
								<div className={`text-xl text-black dark:text-white w-16 h-16 flex items-center justify-center rounded-full shadow-lg shadow-[#303030ad]`}>
									{icon}
								</div>
							</a>
							)
						})}
					</div>
				</div>
			</div>
		</div>
		</Element>
		
		
	)
}

//2C3333


//light 
// #FEFBF6