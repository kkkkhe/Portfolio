import { Switcher } from "../ui"
import { Link } from 'react-scroll'
import { useState } from "react"
import { Burger } from "../ui/burger"
import classNames from "classnames"
const navs = [
	{nav: 'Home', link:'home'},
	{nav: 'About', link:'about'},
	{nav: 'Skills', link:'skills'},
	{nav: 'Projects', link:'projects'},
	{nav: 'Contact', link:'contant'},
]

export const Header = () => {
	const [active, setActive] = useState<boolean>(false)
	const [activeLink, setActiveLink] = useState<number>(0)
	return (
		<div className="drop-shadow-md bg-white dark:bg-regal-dark fixed w-full z-50">
			<div className=" flex items-center h-[4.5rem] container justify-between">
				<div className='dark:text-grey flex items-center gap-2 z-50'>
					<span className="text-xl font-semibold">{"<"}</span>
					<div className='transition ease delay-20 hover:text-purple dark:hover:text-white font-semibold tablet:text-sm md:text-xl font-["Agustina_Regular"]'>
						DevelopedByDenis
					</div>
					<span className="text-xl font-semibold">{"/>"}</span>
				</div>
			<div className={`tablet:absolute top-[-392px] ${active && 'top-[0px]'} transition-all ease-linear delay-75 tablet:bg-white tablet:dark:bg-main-dark tablet:w-full left-0`}>
				<ul className="lg:flex items-center dark:text-grey gap-11 text-lg font-medium tablet:pt-28 tablet:container">
					{navs.map(({nav, link}, id) => {
						return (
							<li key={id} className={`hover:text-purple dark:hover:text-white transition ease delay-20 cursor-pointer tablet:pb-7`}>
								<Link to={link} spy={true} smooth={true} duration={250} onSetActive={() => setActiveLink(id)}>
									{nav}
								</Link>
							</li>
						)
					})}
				</ul>
			</div>
			<div className="flex items-center gap-5">
				<Switcher/>
				<div className="lg:hidden z-50 relative">
				<Burger active={active} setActive={setActive}/>
				</div>
			</div>
			
			</div>
		</div>
	)
}