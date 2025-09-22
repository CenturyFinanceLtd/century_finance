import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import imgsun from '../../assets/images/icon/sun.png'
import imgmoon from '../../assets/images/icon/moon.png'

const CLICKED_CLASS = 'clicked'
const LIGHT_THEME = 'is_light'
const DARK_THEME = 'is_dark'

const DarkMode = () => {
    const [theme, setTheme] = useState(LIGHT_THEME)

    useEffect(() => {
        const { classList } = document.body
        classList.remove(DARK_THEME)
        classList.add(LIGHT_THEME)
        if (typeof window !== 'undefined' && window.localStorage) {
            window.localStorage.setItem('theme', LIGHT_THEME)
        }
    }, [])

    const switchTheme = (event) => {
        event.preventDefault()
        setTheme((currentTheme) => {
            const nextTheme = currentTheme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME
            const { classList } = document.body
            classList.remove(currentTheme)
            classList.add(nextTheme)
            if (typeof window !== 'undefined' && window.localStorage) {
                window.localStorage.setItem('theme', nextTheme)
            }
            return nextTheme
        })
    }

    const isDark = theme === DARK_THEME

    return (
        <div className="mode-switcher">
            <Link
                className={['sun mode-switch', !isDark && CLICKED_CLASS].filter(Boolean).join(' ')}
                to="#"
                onClick={switchTheme}
            >
                <img src={imgmoon} alt="" />
            </Link>
            <Link
                className={['moon mode-switch', isDark && CLICKED_CLASS].filter(Boolean).join(' ')}
                to="#"
                onClick={switchTheme}
            >
                <img src={imgsun} alt="" />
            </Link>
        </div>
    )
}

export default DarkMode
