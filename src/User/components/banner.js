import { useEffect, useState } from 'react';
import { Carousel } from 'antd';
import axios from 'axios';

export const Banner = (props) => {
    const contentStyle = {
        // marginTop: '75px',
        width: 'auto',
        // color: '#fff',
        // lineHeight: '160px',
        // textAlign: 'center',
        // aspectRatio: '14 / 5',
        // objectFit: 'cover',
        maxHeight: '650px',
        minHeight: '500px',
        height: '650px',
        margin: '0 auto',


    };
    const bgBanner = {
        marginTop: '75px',
        paddingTop: '30px',
        width: '100%',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        aspectRatio: '19 / 10',
        objectFit: 'cover',
        backgroundImage: 'url(/images/home-bg.png)',
        // display: 'flex',
        backgroundSize: '100% auto',


    };
    const [slideshow, setSlideshow] = useState({
        data: []
    });
    useEffect(() => {
        fetch('http://localhost:8000/api/danh-sach-slide')
            .then(response => response.json())
            .then(json => setSlideshow(json))
        // axios.get('http://localhost:8000/api/admin/danh-sach-slide')
        //     .then((response) => {
        //         if (response.data.success) {
        //             setSlideshow(response.data)
        //             //console.log('check', response.data)
        //         }
        //         else {
        //             console.log('Sai dl');
        //         }
        //     })
    }, []);
    return (
        <Carousel autoplay style={bgBanner} >

            {

                slideshow.data.map((item) => {
                    return (
                        <>
                            <div>
                                <img src={"/images/" + item.hinh_anh} style={contentStyle} />
                            </div>
                        </>
                    )
                })

            }
        </Carousel>
    );
};
