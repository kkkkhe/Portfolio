import classnames from 'classnames'
import style from './styles.module.scss'
export const Burger = ({setActive, active}:{active:boolean, setActive: (active:boolean) => void}) => {
return (
	<button onClick={() => setActive(!active)} className={classnames(style.button, active && style.active, )}>
		<div className={classnames(style.burger, 'before:bg-main-dark before:dark:bg-white after:bg-main-dark after:dark:bg-white')}></div>
		<span className={classnames(style.line, 'bg-main-dark dark:bg-white')}></span>
	</button>
)
}