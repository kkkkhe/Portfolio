import person from '@/assets/dp_male.svg'
import hand from '@/assets/Hand.gif'

import Typewriter from 'typewriter-effect';
import { socials } from './config';
export const Hero = () => {
	return( 
		<section className='flex w-full h-screen items-center justify-center'>
			<div className='flex flex-col items-center w-[400px]'>
				<h3 className='tracking-widest space-x-1 text-[23px] text-text-black font-thin flex gap-[4px] items-center mb-4 dark:text-light-grey'>
					Hi<div className='w-8 h-auto '><img src={hand}/></div>, I'm 
					<span className='font-bold tracking-widest text-[25px]'>Denis</span> 
				</h3>

				<div className='w-[200px] mb-10'>
					<img className='w-full h-full drop-shadow-[10px_10px_5px_rgb(0,0,0,0.2)]' src={person} alt="me" />
				</div>

				<div className='flex items-center gap-1 text-black dark:text-light-grey font-normal text-[25px]'>
				<p>I am into </p>

				<Typewriter
				options={{
				strings: ['Web Development', 'UI/UX'],
				autoStart: true,
				loop: true,
				}}
				/>
				</div>
				<div className='flex gap-4 pt-8'>
					{socials.map(({link, icon, colorLight, colorNight}, id) => {
					return (
						<a href={link} key={id} className=''>
								<div className={`text-black dark:text-white w-16 h-16 flex items-center justify-center rounded-full shadow-lg shadow-[#303030ad]`}>
									{icon}
								</div>
						</a>
					)
					})}
				</div>
				
			</div>
		</section>
	)
}