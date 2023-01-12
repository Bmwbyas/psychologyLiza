import React, {ReactNode} from 'react';


type ContainerType = {
    children?: ReactNode
}
export const Container: React.FC<ContainerType> = ({children}) => {
    return (
        <div className='bg-gray-800 flex justify-center min-h-full '>
            <div className=' w-10/12  my-10 flex flex-col  '>

                {children}
            </div>
        </div>
    );
};

