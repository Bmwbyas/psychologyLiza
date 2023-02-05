import React from 'react';
import myPhoto from '../../assets/image/avatar.jpg'
import myBook from '../../assets/image/book.jpg'
import myNotebook from '../../assets/image/bloknot-ruchka-pero-chernila.jpg'
import myCabinet from '../../assets/image/work/img1.jpg'
import {Title} from "../../common/components/title/Title";
import {Container} from "../../common/components/container/Container";

const Main = () => {
    const photo = {
        backgroundImage: 'url(' + myPhoto + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat'
    }
    const book = {
        backgroundImage: 'url(' + myBook + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }
    const notebook = {
        backgroundImage: 'url(' + myNotebook + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }
    const cabinet = {
        backgroundImage: 'url(' + myCabinet + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }
    return (
        // <div className='bg-gray-800 flex justify-center '>
        //     <div className=' w-10/12  my-10 flex flex-col  '>
        <Container>
            <Title titleBig={'Личная'} titleSmall={'Обо мне'}/>
            <div className=' flex justify-center flex-wrap my-4 '>
                <div className='min-w-min max-w-xl w-full h-96 '  style={photo}></div>
                <div className=' w-1/2 my-2 text-gray-400 pl-10 sm:pt-5  text-xl'>
                    Психологическое консультирование для меня— возможность участвовать в отношениях, где фокус моего
                    внимания всегда на ваших потребностях.
                    <br/><br/>
                    Я верю в том, что работа со мной помогает вам идти туда, куда вы хотите идти. И исцелить то, что
                    должно быть исцелено. Вместе мы создадим безопасную среду, которая необходима для продуктивной
                    работы и собственный язык для понимания ваших потребностей, который останется с вами навсегда.
                </div>
                {/*<img  src={myPhoto} alt="my photo"/>*/}
            </div>
            <div className='my-2'>
                <span className='text-white text-2xl font-semibold '> Елизавета Аскерко</span>
            </div>
            <div>
                <span className=' text-gray-400  text-base'>Психолог</span>
            </div>
            <div className='border border-gray-500 my-8 opacity-20 '></div>

            <div className='text-white text-2xl font-semibold text-center '>Три вещи, которые
                вам стоит знать обо мне
            </div>
            <div className='border border-gray-500 mt-8 opacity-20 '></div>
            <div className='flex items-center '>
                <div className='h-96 w-1/2' style={book}></div>
                <div className=' my-2 text-gray-400 leading-relaxed  text-base pl-5'>
                    <div className='text-white text-lg font-semibold text-center mb-2 '>
                        Постоянно получаю образование
                    </div>
                    <p>Основы профессии изучала в Московском институте психоанализа, там же получила диплом
                                                психолога. Затем расширяла знания и систему на факультете консультативной и клинической
                        психологии
                        .
                    </p>
                    <p>
                        Групповую работу изучала в программе «психотерапия клиентов, страдающих психосоматическими
                        заболеваниями» и в Институте гуманистической и экзистенциальной психологии .
                    </p>
                    <p>
                        Проходила краткосрочные курсы и семинары по работе с психологической травмой в психотерапии,
                        психотерапии депрессий, сексологии, психотерапии характера.
                    </p>
                </div>
            </div>
            <div className='border border-gray-500  opacity-20'></div>
            <div className='flex items-center '>

                <div className=' my-2 text-gray-400 leading-relaxed  text-base pl-5'>
                    <div className='text-white text-lg font-semibold text-center mb-2 '>
                        Прохожу личную терапию и супервизию
                    </div>
                    <p>
                        Чтобы научиться помогать другим, мне пришлось начать с разговора с собой. Сначала появились первые инсайты, а за ними и изменения. Удивление и восторг от того, как это работает, подтолкнули меня научиться помогать другим.
                    </p>
                    <p>
                        Я много училась и продолжала работать в личной терапии. Это был необыкновенный, завораживающий период открытий.
                    </p>
                    <p>
                        Он и до сих пор не закончился, просто уже меньше похож на необузданный юношеский восторг, а больше на спокойное движение к цели. Благодаря большой внутренней работе и учете, я точно знаю как и кому я хочу и могу помогать.
                    </p>

                </div>
                <div className='h-96 w-1/2' style={notebook}></div>
            </div>
            <div className='border border-gray-500  opacity-20'></div>
            <div className='flex items-center '>
                <div className='h-96 w-1/2' style={cabinet}></div>
                <div className=' my-2 text-gray-400 leading-relaxed  text-base pl-5'>
                    <div className='text-white text-lg font-semibold text-center mb-2 '>
                        Забочусь о вашем комфорте
                    </div>
                    <p>
                        Я позаботилась о том, чтобы физическое пространство в котором я работаю с клиентами помогало работе. Мне хотелось, чтобы место, куда приходят мои клиенты, было им приятно, чтобы они и в нем чувствовали заботу о себе.
                    </p>
                    <p>
                        Мой кабинет — это не безликое казенное помещение, а мое личное место, которое говорит обо мне и о моем отношении к клиенту без слов. У моих клиентов всегда есть выбор — они могут прийти лично, могут получить консультацию удаленно.
                    </p>
                    <p>
                        Мой метод сочетает в себе несколько подходов, позволяющих помочь вам решить частную проблему или искать смыслы в будущем, рассматривая свое прошлое и настоящее под увеличительным стеклом.
                    </p>

                </div>
            </div>
            <div className='border border-gray-500  opacity-20'></div>
        </Container>
        //     </div>
        // </div>
    );
};

export default Main;
