import React from 'react';

type TitlePropsType = {
    titleBig:string|null
    titleSmall:string
}
export const Title: React.FC<TitlePropsType> = ({titleSmall,titleBig}) => {
    return (<>
            { <div className='items-center pt-16 '>
                <span className='p-2 text-gray-600 text-xl bg-gray-400  '>{titleBig}</span>
            </div>}
            <div className='my-6'>
                <span className=' text-white text-5xl font-extrabold  '>{titleSmall}</span>
            </div>
        </>
    );
};

