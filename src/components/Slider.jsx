import React from 'react';
import './../styles/slider.scss'
import image2 from './../images/2.png'
import image3 from './../images/3.jpeg'
import image4 from './../images/4.jpeg'
import image5 from './../images/5.jpg'
import image6 from './../images/6.jpg'

function Slider (){
    const slides =[
        {url: image2, title: 'two', text: 'Это новейшая техника'},
        {url: image3, title: 'three', text: 'Это высокие стандарты безопасности'},
        {url: image4, title: 'four', text: 'Это постоянное обучение'},
        {url: image5, title: 'five', text: 'Это специалисты'},
        {url: image6, title: 'six', text: 'Это ответственность в работе'},
    ]
    const [currentIndex, setCurrentIndex] = React.useState(0)
    return (
        <div className="slider">
            <div className="slider__pic" style={{background: `linear-gradient( rgba(1, 1, 1, 0.5), rgba(1, 1, 1, 0.5) ),url(${slides[currentIndex].url})`}}>
                <div className="slider__pic__block">
                    <p className="slider__pic__block__1">DISMANTLING</p>
                    <p className="slider__pic__block__2">{slides[currentIndex].text}</p>
                    <a className="slider__pic__block__3" href="#thereToJump">Узнать больше</a>
                </div>
                <div className="slider__pic__dots">
                    {
                        slides.map((slide, slideIndex) => (
                            <div key={slideIndex} onClick={() => setCurrentIndex(slideIndex)}>&#x2022;</div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
export default Slider;