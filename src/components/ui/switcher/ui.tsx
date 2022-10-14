import useLocalStorage from "use-local-storage";
import './styles.scss'
export const Switcher = () => {
	const [theme, setTheme] = useLocalStorage("theme", "");
	document.body.setAttribute('class', theme)
	const handleChange = () => {
		setTheme(theme=='dark'? 'light': 'dark')
		document.body.setAttribute('class', theme)
		console.log(theme)
	}

	return (
		<label className="toggle-switch">
			<input type="checkbox" checked={theme=='dark'} onChange={handleChange} />
			<span className="switch" />
   		</label>
	)
}