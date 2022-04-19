import React from 'react';
// import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import MyAlbum from '../MyAlbum/MyAlbum';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className=''>
            {/* <Header> </Header> */}
            <Banner> </Banner>
            <Services> </Services>
            <MyAlbum> </MyAlbum>
        </div>
    );
};

export default Home;