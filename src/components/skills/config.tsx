import { SiYarn, SiVite } from "react-icons/si";
import { CssIcon, FireBaseIcon, HtmlIcon, JsIcon, ReactIcon, SassIcon, TailwindIcon, TsIcon, ViteIcon } from "../../assets/Icons";
export const skills = [
	{icon: <HtmlIcon/>, label: 'html5'},
	{icon: <CssIcon/>, label: 'css3'},
	{icon: <ReactIcon/>, label: 'react'},
	{icon: <SassIcon/>, label: 'sass'},
	{icon: <TailwindIcon/>, label: 'tailwind'},
	{icon: <SiYarn className="w-full h-auto hover:fill-blue dark:hover:fill-blue text-regal-dark dark:text-light-grey transition-all ease delay-[40]"/>, label: 'yarn'},
	{icon: <FireBaseIcon/>, label: 'firebase'},
	{icon: <JsIcon/>, label: 'javaScript'},
	{icon: <TsIcon/>, label: 'typeScript'},
	{icon: <SiVite className="w-full h-auto hover:fill-purple dark:hover:fill-purple text-regal-dark dark:text-light-grey transition-all ease delay-[40]"/>, label: 'vite'},
]


export const tags = [
	{text: '⚡ Responsive web Applications'},
	{text: '⚡ Progressive Web Applications ( PWA )'}
]


export const leftVariants = {
	offscreen: {
	y: 200,
	opacity: 0,
	},
	onscreen: {
	y: 0,
	opacity: 1,
	transition: {
		type: "spring",
		bounce: 0.4,
		duration: 0.8
	}
	}
};
export const rightVariants = {
	offscreen: {
	scale: 0,
	opacity: 0,
	},
	onscreen: {
	scale: 1,
	opacity: 1,
	transition: {
		type: "spring",
		duration: 0.9,
		bounce: 0.4
	}
	}
};