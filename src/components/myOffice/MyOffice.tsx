import React from 'react';
import {Title} from "../../common/components/title/Title";
import myRelationships from "../../assets/image/cabinet/Relationships.jpg";
import mySelfProblem from "../../assets/image/cabinet/selfProblem.jpg";
import myAchievements from "../../assets/image/cabinet/Macbook_girl.jpg";
import myTeenager from "../../assets/image/cabinet/teenager.jpg";


export const MyOffice = () => {
    const relationships = {
        backgroundImage: 'url(' + myRelationships + ')',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }
    const selfProblem = {
        backgroundImage: 'url(' + mySelfProblem + ')',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }
    const achievements = {
        backgroundImage: 'url(' + myAchievements + ')',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }
    const teenager = {
        backgroundImage: 'url(' + myTeenager + ')',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }
    return (
        <div className='bg-gray-800 flex justify-center min-h-full '>
            <div className='   my-10 flex flex-col  '>
                <div className='mx-auto  w-10/12'>
                    <Title titleBig={"Кабинет"} titleSmall={'Личный кабинет психолога'}/>
                </div>
                <div className='bg-gray-600 w-screen text-center text-white py-5 mb-5'>Признание проблемы —
                    половина успеха в ее разрешении
                    <br/><span className='text-gray-400'>Зигмунд Фрейд</span><br/>

                </div>
                <div className='text-white text-2xl font-semibold text-center my-6 '> Направления работы</div>
                <div className='w-screen flex justify-center bg-gray-600'>
                    <div className='flex items-center  w-10/12  '>
                        <div className='h-96 w-1/2' style={relationships}></div>
                        <div className=' my-2 text-gray-400 leading-relaxed  text-base pl-5'>
                            <div className='text-white text-lg font-semibold text-center mb-2 '>
                                Взаимоотношения
                            </div>
                            <ul className='leading-loose'>
                                <li> - <strong>в паре</strong> (конфликты супругов или партнеров, недопонимание,
                                    охлаждение
                                    чувств)
                                </li>
                                <li> - <strong>детско-родительские отношения</strong> (конфликты родителей и ребенка,
                                    отвержение подростком родителей, сложности построения линии воспитания в семье)
                                </li>
                                <li> - <strong>трудности в построении отношений</strong> (чувство одиночества, трудности
                                    установления контакта с партнерами)
                                </li>
                                <li> - <strong>неконструктивные отношения с окружающими</strong> (агрессия, раздражение)
                                </li>
                                <li> - <strong>травматические разрывы отношений</strong> (развод, измена)</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='flex items-center  w-10/12 mx-auto  '>

                    <div className=' my-2 text-gray-400 leading-relaxed  text-base pl-5'>
                        <div className='text-white text-lg font-semibold text-center mb-2 '>
                            Личностные проблемы
                        </div>
                        <ul className='leading-loose'>
                            <li> - <strong>негативные эмоции и состояния </strong> (страх, тревога, депрессивное
                                состояние, апатия, вина, гнев)
                            </li>
                            <li> - <strong>неуверенность в себе и низкая самооценка</strong>
                            </li>
                            <li> - <strong>травмы и кризисы</strong> (в том числе возрастные и личностные кризисы,
                                детские травмы, утрата, отсутствие смысла жизни)
                            </li>
                            <li> - <strong>поздняя сепарация</strong> (работа с эмоциональной зависимостью от родителей,
                                отсутствие самостоятельной ответственности за жизнь)
                            </li>
                        </ul>
                    </div>
                    <div className='h-96 w-1/2' style={selfProblem}></div>
                </div>
                <div className='w-screen flex justify-center bg-gray-600'>
                    <div className='flex items-center  w-10/12  '>
                        <div className='h-96 w-1/2' style={achievements}></div>
                        <div className=' my-2 text-gray-400 leading-relaxed  text-base pl-5'>
                            <div className='text-white text-lg font-semibold text-center mb-2 '>
                                Деятельность и достижения
                            </div>
                            <ul className='leading-loose'>
                                <li> - <strong>неудовлетворенность профессиональной жизнью</strong> (профессиональное
                                    выгорание, неудовлетворенность социально-профессиональным статусом, кризис
                                    профессионального развития)
                                </li>
                                <li> - <strong>ограничивающие убеждения и установки</strong> (страх успеха и изменений в
                                    деятельности, обесценивание собственных достижений)
                                </li>
                                <li> - <strong>трудности постановки целей и жизненной перспективы</strong>
                                </li>
                                <li> - <strong>прокрастинация</strong> (отказ и нежелание действовать, постоянное
                                    откладывание дел)

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='flex items-center  w-10/12 mx-auto  '>

                    <div className=' my-2 text-gray-400 leading-relaxed  text-base pl-5'>
                        <div className='text-white text-lg font-semibold text-center mb-2 '>
                            Помощь подросткам
                        </div>
                        <ul className='leading-loose'>
                            <li> - <strong>трудности в отношениях с окружающими </strong> (замкнутость, повышенная агрессивность, отвержение сверстниками, асоциальное поведение)
                            </li>
                            <li> - <strong>негативные психические состояния и неконтролируемые эмоциональные всплески</strong>(аутоагрессия, тревожность, депрессивное состояние, суицидальные мысли, экзаменационный стресс)
                            </li>
                            <li> - <strong>самоопределение и построение профессиональной траектории</strong>
                            </li>
                            <li> - <strong>психологическая диагностика</strong> (способностей, черт личности, актуального психологического состояния)
                            </li>
                        </ul>
                    </div>
                    <div className='h-96 w-1/2' style={teenager}></div>
                </div>

            </div>
        </div>
    );
};

