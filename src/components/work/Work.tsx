import React from 'react';
import {Container} from "../../common/components/container/Container";
import {Title} from "../../common/components/title/Title";
import s from './Work.module.scss'
import img1 from "../../assets/image/work/img1.jpg";
import img2 from "../../assets/image/work/img2.jpg";
import img3 from "../../assets/image/work/img3.jpg";

export const Work = () => {
    const works = [
        {
            title: 'Личная терапия',
            description: ' Индивидуальное психологическое консультирование (психологическая помощь) позволяет вместе с одинм из ведущих психологов нашего психологического центра обсудить как правильно вести себя в трудных жизненных ситуациях или сложных периодах, имеющихся в вашей жизни, осознать их происхождение и пути выхода.',
            href: 'http://migi.by/',
            img: {
                backgroundImage: 'url(' + img1 + ')',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }
        }, {
            title: 'Групповая терапия',
            description: ' Группа - это общество в миниатюре, где создаются определённые условия: защищённость, поддержка, принятие.',
            href: 'https://www.b17.ru/blog/polza_ot_gruppovoy_terapii/',
            img: {
                backgroundImage: 'url(' + img2 + ')',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }
        },
        {
            title: 'Личностный тренинг',
            description: ' Тренинги личностного роста — это психологические тренинги, направленные на качественные позитивные изменения. Они помогают человеку проходить этапы личностного роста, позволяют выйти за рамки стандартного мышления и стать свободнее',
            href: 'https://docs.google.com/document/d/19ooTHGnHVyBp5Jw0-7bBCcT0VIZ7PwOC/edit',
            img: {
                backgroundImage: 'url(' + img3 + ')',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }
        }]


    return (
        <Container>
            <Title titleBig={'ПРОЕКТЫ'} titleSmall={'Мои проекты'}/>
            <div className={s.container}>
                {works.map((w, index) => {
                    return (
                        <div key={index} style={w.img} className={s.itemContainer}>
                            <div className={s.content}>
                                <div className='mt-5'>
                                <span
                                    className='text-xl text-white p-6 bg-gray-500 rounded-full text-center  '>0{index + 1}</span>
                                </div>
                                <div className='mt-16 mb-3 text-xl text-white'>{w.title}</div>
                                <div className='mb-3 text-s text-gray-400'>{w.description}</div>
                                <a
                                    className='text-gray-500 w-40 bg-amber-50  text-l p-2 text-center hover:bg-amber-200 mb-3 '
                                    href={w.href}
                                    target='_blank'
                                > Открыть </a>
                            </div>
                        </div>)
                })

                }
            </div>
        </Container>
    );
};

