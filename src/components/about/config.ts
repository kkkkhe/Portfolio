export const leftAnimation = {
	offscreen: {
		opacity: 0,
		y: -100,
	},
	onscreen: {
		opacity: 1,
		y: 0,
		transition: {delay: 0.5}
	}
}

export const leftVariants = {
	offscreen: {
	x: -200,
	opacity: 0,
	},
	onscreen: {
	x: 0,
	opacity: 1,
	transition: {
		type: "spring",
		bounce: 0.4,
		duration: 1
	},
	}
};

export const rightVariants = {
	offscreen: {
	y: 100,
	opacity: 0,
	},
	onscreen: {
	y: 0,
	opacity: 1,
	transition: {
		type: "spring",
		bounce: 0.4,
		duration: 0.5
	},
	}
};