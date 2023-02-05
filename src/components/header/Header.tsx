import React from 'react';
import {NavLink} from "react-router-dom";
import {routes} from "../../routes";

export const Header = () => {
    return (

        <div className='flex bg-gray-600 justify-center text-xl fixed w-full' >
            <NavLink className='p-4 text-amber-50 hover:bg-gray-400 ' to={routes.main}>
                Главная
            </NavLink>
            <NavLink className='p-4 text-amber-50 hover:bg-gray-400' to={routes.aboutMe}>
                Направления работы
            </NavLink>
            <NavLink className='p-4 text-amber-50 hover:bg-gray-400' to={routes.work}>
                Мои проекты
            </NavLink>
            <NavLink className='p-4 text-amber-50 hover:bg-gray-400' to={routes.contacts}>
                Контакты
            </NavLink>


        </div>
    );
};

