import React from 'react';
import telegram from './../../assets/image/icons8-telegram.png'
import insta from './../../assets/image/icons8-instagram.png'

export const Footer = () => {
    const instagramImage={
        backgroundImage: 'url(' + insta + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }
    const telegramImage = {
        backgroundImage: 'url(' + telegram + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };

    return (
        <div className='grid grid-cols-2 bg-gray-600 '  >
            <div className='flex  justify-end  '>
                <a href="https://instagram.com/lizasker?igshid=YmMyMTA2M2Y=" style={instagramImage} className='w-16 h-16 mr-5'></a>
                <a href="" style={telegramImage} className='w-16 h-16 mr-5'></a>
            </div>
            <div className='p-4  text-white text-xl'>
                Creted by Elizaveta Askerko
            </div>
        </div>
    );
};
