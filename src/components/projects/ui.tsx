import { textSplitter } from "../../lib"
import { projects } from "./config"
import { Element } from 'react-scroll'
export const ProjectsSection = () => {
	return (
		<Element name='projects'>
			<section className="pt-16 pb-32">
			<div className="container">
				<h1 className="mb-20 text-[40px] font-semibold">Open Source Projects</h1>
				<div className="grid-cols-3 grid gap-6 tablet:grid-cols-2 small:grid-cols-1">
					{projects.map(({title, description, link, image}) => {
					return (
						<a href={link}>
						<article className="max-w-md bg-[#FEFBF6] dark:bg-[#181818] rounded-xl shadow-xl drop-shadow-xl">
							<div className="py-3 px-5">
								<h2 className="m-0 mb-2 text-[25px]">{title}</h2>
								<div className="pb-5"><img className="rounded-xl" src={image} alt="" /></div>
								<p className="text-md min-h-[50px]">{textSplitter(description)}</p>
							</div>
						</article>
						</a>
					)
				})}
				</div>
				
			</div>
		</section>
		</Element>
		
	)
}