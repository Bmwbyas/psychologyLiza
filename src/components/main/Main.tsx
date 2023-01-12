import React from 'react';
import myPhoto from '../../assets/image/photo_2022-11-26_10-02-16.jpg'
import {Title} from "../../common/components/title/Title";
import {Container} from "../../common/components/container/Container";

const Main = () => {
    const photo = {
        backgroundImage: 'url(' + myPhoto + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }
    return (
        // <div className='bg-gray-800 flex justify-center '>
        //     <div className=' w-10/12  my-10 flex flex-col  '>
        <Container>
                <Title titleBig={'ABOUT'} titleSmall={'About me'}/>
                <div className=' flex justify-center my-4 '>
                    <div className='w-full h-96' style={photo}></div>
                    {/*<img  src={myPhoto} alt="my photo"/>*/}
                </div>
                <div className='my-2'>
                    <span className='text-white text-2xl font-semibold '> Елизавета Аскерко</span>
                </div>
                <div>
                    <span className=' text-gray-400  text-base'>Психолог</span>
                </div>
                <div className='border border-gray-500 my-8 opacity-20 '></div>
                <div className=' my-2 text-gray-400  text-base'>
                    Hi, my name is Adriano Smith and I began using WordPress when it first began.
                    I’ve spent most of my waking hours for the last ten years designing, programming and operating
                    WordPress sites.<br/>

                    One of my specialties is taking an idea from scratch and creating a full-fledged platform.
                    I go beyond to produce sites with a unique, outstanding, contemporary look-and-feel.
                    With extensive knowledge of web mechanics,
                    I’m able to optimize complex integrations to require little-to-no maintenance while running on their
                    own for years.
                </div>
                <div className='border border-gray-500 my-8 opacity-20'></div>
        </Container>
        //     </div>
        // </div>
    );
};

export default Main;