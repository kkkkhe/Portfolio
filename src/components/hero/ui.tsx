import person from '@/assets/male.svg'
import hand from '@/assets/Hand.gif'

import Typewriter from 'typewriter-effect';
import { socials } from './config';
export const Hero = () => {
	return( 
		<section className='flex w-full pt-[200px] mb-[200px] items-center justify-center'>
			<div className='flex flex-col items-center w-[400px]'>
				<h1 className='tracking-widest font-medium space-x-1 text-[25px] text-text-black flex gap-[4px] items-center mb-4 dark:text-light-grey'>
					Hi all<div className='w-10 h-auto '><img src={hand}/></div>, I'm 
					<span className='font-bold tracking-widest text-[27px]'>Denis</span> 
				</h1>

				<div className='w-52 mb-10'>
					<img className='w-full h-full drop-shadow-[10px_10px_5px_rgb(0,0,0,0.2)]' src={person} alt="me" />
				</div>

				<div className='flex items-center gap-1 text-black dark:text-light-grey font-normal text-[27px]'>
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
					{socials.map(({link, icon}, id) => {
					return (
						<a href={link} key={id} className='hover:-translate-y-1 transition-transform delay-75 '>
								<div className={`text-xl text-black dark:text-white w-16 h-16 flex items-center justify-center rounded-full shadow-lg shadow-[#303030ad]`}>
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