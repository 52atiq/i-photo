import React from 'react';
import  facebook from '../../../../assets/Footer/facebook.png';
import twitter from '../../../../assets/Footer/twitter.png';
import linkedin from '../../../../assets/Footer/linkedin.png';
import instagram from '../../../../assets/Footer/instagram.jpg';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear()
    return (
         
        <div className='grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 bg-slate-700  mx-auto h-36  mt-10 '>
            
        {/* <div className='flex bg-emerald-400 w-[1200px] mx-auto h-16 mb-5 mt-auto justify-between'> */}
            <div className='flex items-center mx-24 gap-3 '>
                <div> <img className='w-7 rounded-full' src={facebook} alt="" /></div>
                <div> <img  className='w-7 rounded-full' src={twitter} alt="" /></div>
                <div> <img className='w-7 rounded-full' src={linkedin} alt="" /></div>
                <div> <img className='w-7 rounded-ful ' src={instagram} alt="" /></div>
                
            </div>

            <div className=' flex items-center text-white'>
            <p><small> Copyright &copy; {year}</small> I-PHOTO All rights reserved</p>
            </div>

            <div  className=' flex items-center mx-24 text-white'>
                <p> Privacy</p>
            </div>
            <div  className=' flex items-center mx-24 text-white'>
                Terms Of Use
            </div>
        </div>
         
        
    );
};

export default Footer;



