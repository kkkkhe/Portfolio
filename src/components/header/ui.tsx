import { Switcher } from "../ui"

export const Header = () => {
	return (
		<div className="drop-shadow-md bg-white dark:bg-regal-dark fixed w-full">
			<div className=" flex items-center h-[4.5rem] container justify-between">
				<div className='dark:text-grey'>
				<div className='transition ease delay-20 hover:text-purple font-semibold text-lg font-["Indie_Flower"]'>DevelopedByDenya</div>
			</div>
			<div>
				<ul className="flex items-center dark:text-grey gap-11 text-lg font-medium">
					<li className="hover:text-purple dark:hover:text-white transition ease delay-20">Home</li>
					<li className="hover:text-purple dark:hover:text-white transition ease delay-20">Skills</li>
					<li className="hover:text-purple dark:hover:text-white transition ease delay-20">Projects</li>
					<li className="hover:text-purple dark:hover:text-white transition ease delay-20">Connect</li>
					<li><Switcher/></li>
				</ul>
			</div>
			</div>
		</div>
	)
}