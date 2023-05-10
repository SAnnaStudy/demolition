import React from 'react';
import './../styles/reviews.css'
import portrait1 from './../images/portrait.jpg'
import portrait2 from './../images/portrait2.jpg'
import portrait3 from './../images/portrait3.jpg'
import portrait4 from './../images/portrait4.png'
import portrait5 from './../images/portrait5.png'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
function Reviews (){
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    const reviews =[
        {id: 1, url: portrait1, name: 'one', text: 'The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.'},
        {id: 2, url: portrait2, name: 'two', text: 'The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.'},
        {id: 3, url: portrait3, name: 'three', text: 'The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.'},
        {id: 4, url: portrait4, name: 'four', text: 'The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.'},
        {id: 5, url: portrait5, name: 'five', text: 'The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.'},
    ]
    return (
        <div className='reviewsPart'>
           <p class='reviewsPart__title'>Наши клиенты</p>
            <Slider {...settings}>
               { reviews.map((review, reviewIndex) => (
                    <div class="reviewsPart__card reviewsPart__swiper-slide">
                        <div class="reviewsPart__image-content">
                            <span class="reviewsPart__overlay"></span>
                            <div class="reviewsPart__card-image">
                                <img src={review.url} alt="" class="reviewsPart__card-img"/>
                            </div>
                        </div>
                        <div class="reviewsPart__card-content">
                            <h2 class="reviewsPart__name">{review.name}</h2>
                            <p class="reviewsPart__description">{review.text}</p>
                        </div>
                    </div>
                ))
               }
            </Slider>
        </div>
    )
}
export default Reviews;