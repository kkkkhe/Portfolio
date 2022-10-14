export const textSplitter = (text: string) => {
	return text.length < 60? text : text.slice(0,60) + ' ...'
}