import { PropsWithChildren } from "react";

export const PurpleButton = ({children}:PropsWithChildren) =>{
	return (
		<button className="text-base px-[15px] py-[9px] delay-75 transition-all ease-linear uppercase rounded-[6px] bg-purple text-white border-purple border-2 hover:bg-white hover:text-purple hover:-translate-y-2">
			{children}
		</button>
	)
}
