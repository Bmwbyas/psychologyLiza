import React from 'react';

type TitlePropsType = {
    titleBig:string
    titleSmall:string
}
export const Title: React.FC<TitlePropsType> = ({titleSmall,titleBig}) => {
    return (<>
            <div className='items-center '>
                <span className='p-2 text-gray-600 bg-gray-400 text-xs '>{titleBig}</span>
            </div>
            <div className='my-6'>
                <span className=' text-white text-3xl font-extrabold  '>{titleSmall}</span>
            </div>
        </>
    );
};

