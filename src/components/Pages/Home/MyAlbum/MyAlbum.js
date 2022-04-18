import React from 'react';
import one from '../../../../assets/MyAlbum/eight.png'
import two from '../../../../assets/MyAlbum/five.png'
import three from '../../../../assets/MyAlbum/six.png'
import four from '../../../../assets/MyAlbum/three.png'
import five from '../../../../assets/MyAlbum/four.png'

const MyAlbum = () => {
    return (
        <div className=''>
            <h2 className='text-center'>My Album </h2>
    <div className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 items-center mx-20 mt-16'>
        <div >
            <img  className='w-[700px] h-[500px] ' src={three} alt="" />
        </div>
        <div >
        <img  className='w-[700px] h-[500px] ' src={five} alt="" />
        </div>
    </div>

    <div className='grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 items-center mx-20 mt-5'>
    <div className='w-[300px] h-[500px] gap-5 mb-3 '>
    <img className='w-[300px] h-[500px] '  src={one} alt="" />
    </div>
    <div className='w-[300px] h-[500px] gap-5 mb-3 '>
    <img className='w-[300px] h-[500px] ' src={four} alt="" />
    </div>
    <div className='w-[300px] h-[500px] gap-5 mb-3 '>
    <img className='w-[300px] h-[500px] ' src={two} alt="" />
    </div>
    </div>

        </div>
    );
};

export default MyAlbum;