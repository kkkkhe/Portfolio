import { Switcher } from "../ui"

export const Header = () => {
	return (
		<div className="drop-shadow-md bg-white dark:bg-regal-dark fixed w-full z-50">
			<div className=" flex items-center h-[4.5rem] container justify-between">
				<div className='dark:text-grey flex items-center gap-2'>
					<span className="text-xl font-semibold">{"<"}</span>
				<div className='transition ease delay-20 hover:text-purple dark:hover:text-white font-semibold text-xl font-["Agustina_Regular"]'>
					DevelopedByDenis
				</div>
				<span className="text-xl font-semibold">{"/>"}</span>
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