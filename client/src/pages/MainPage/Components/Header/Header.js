import React from 'react';
import stl from './header.module.css';
import { Link } from 'react-router-dom';


export const Header = props => {
    const { location, includePathHandler } = props;
    return (
        <div className={stl.header}>
            <nav className={stl.nav}>
                <Link to='/main' className={`${stl.navItem} ${includePathHandler(location.pathname, '/main') && stl.navCheck}`}
                >
                    <span

                    >Главная</span>

                </Link>
                <Link to='/newtask' className={`${stl.navItem} ${includePathHandler(location.pathname, '/newtask') && stl.navCheck}`}
                >
                    <span>Добавить работы</span>

                </Link>

                <Link to='/history/day' className={`${stl.navItem} ${includePathHandler(location.pathname, '/history') && stl.navCheck}`}
                >
                    <span>История</span>
                </Link>

                <Link to='/' className={stl.navItem} onClick={() => { props.logout() }}>
                    <span

                    >Выйти</span>
                </Link>

            </nav>
        </div>
    )
}