import React from 'react';
import {Container} from "../../common/components/container/Container";
import {Title} from "../../common/components/title/Title";

export const Work = () => {
    const works = [
        {
            title: 'bla',
            description: ' Вместо зубрежки — разговорный клуб. ' +
                'Они есть как онлайн, так и при языковых школах. ' +
                'К примеру, speakingclub.com. Беседы в нем модерируются специалистом, '
        }, {
            title: 'yo',
            description: ' ньшите скорость и повторяйте за диктором, ' +
                'а потом говорите с ним одновременно. Можно тренировать'
        }, {
            title: 'ok',
            description: ' fdddddddddddddddddasdasи языковых школах. ' +
                'К примеру, speakingclub.com. Беседы в нем модерируются специалистом, '
        }]


    return (
        <Container>
            <Title titleBig={'ПРОЕКТЫ'} titleSmall={'Мои проекты'}/>
            <div className='flex space-x-6 justify-center '>
                {works.map((w, index) => {
                    return (
                        <div className='flex  flex-col  w-80 min-h-96 p-4     bg-gray-600 relative'>
                            <div className='mt-5'>
                                <span
                                    className='text-xl text-white p-6 bg-gray-500 rounded-full text-center  '>0{index + 1}</span>
                            </div>
                            <div className='mt-16 mb-3 text-xl text-white'>{w.title}</div>
                            <div className='mb-3 text-s text-gray-400'>{w.description}</div>
                            <a
                                className='text-gray-500 w-40 bg-amber-50 text-l p-2 text-center hover:bg-amber-200 mb-3 '
                                href="https://ru.wikipedia.org/wiki/%D0%9F%D1%81%D0%B8%D1%85%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F"
                                target='_blank'
                            > Открыть </a>
                        </div>)
                })

                }
            </div>
        </Container>
    );
};

