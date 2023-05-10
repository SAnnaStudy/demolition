import React from 'react';
import './../styles/main.scss'
import Slider from '../components/Slider';
import Reviews from '../components/Reviews';
import bulding1 from './../images/building1.jpg';
import bulding2 from './../images/bilding2.png';
import bulding3 from './../images/bilding3.jpg';
function Main (){
  return (
    <div className="main">
      <div className="main__container">
        <div className="main__container__picture">
          <Slider/>
        </div>
        <div className="main__container__pros">
          <h3>Почему мы?</h3>
          <div className="main__container__pros__content">
            <div className="main__container__pros__content__1">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-fast-forward-btn" viewBox="0 0 16 16">
                <path d="M8.79 5.093A.5.5 0 0 0 8 5.5v1.886L4.79 5.093A.5.5 0 0 0 4 5.5v5a.5.5 0 0 0 .79.407L8 8.614V10.5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5Z"/>
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4Z"/>
              </svg>
              <h6>Быстрота</h6>
              <p>Какой нибудь текст про то, как тут безопасно</p>
            </div>
            <div className="main__container__pros__content__2">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-hammer" viewBox="0 0 16 16">
                <path d="M9.972 2.508a.5.5 0 0 0-.16-.556l-.178-.129a5.009 5.009 0 0 0-2.076-.783C6.215.862 4.504 1.229 2.84 3.133H1.786a.5.5 0 0 0-.354.147L.146 4.567a.5.5 0 0 0 0 .706l2.571 2.579a.5.5 0 0 0 .708 0l1.286-1.29a.5.5 0 0 0 .146-.353V5.57l8.387 8.873A.5.5 0 0 0 14 14.5l1.5-1.5a.5.5 0 0 0 .017-.689l-9.129-8.63c.747-.456 1.772-.839 3.112-.839a.5.5 0 0 0 .472-.334z"/>
              </svg>
              <h6>Качество</h6>
              <p>Какой нибудь текст про то, как тут качественно</p>
            </div>
            <div className="main__container__pros__content__3">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-clipboard2-check" viewBox="0 0 16 16">
                <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h3Z"/>
                <path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12Z"/>
                <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3Z"/>
              </svg>
              <h6>Гарантии</h6>
              <p>Какой нибудь текст про то, какие тут гарантии</p>
            </div>
          </div>
        </div>
        <div id='thereToJump' className="main__container__about">
          <div className="main__container__about__side">
            <div className="main__container__about__side__sides">
              <div className="main__container__about__side__sides__part">
                <div><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                    </svg></div>
                <div className='first'>1 этап</div>
                <div className='second'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac urna nec velit pretium tincidunt. Nunc eu luctus magna. </div>
              </div>
              <div className="main__container__about__side__sides__part">
                <div><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                      <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                    </svg></div>
                <div className='first'>2 этап</div>
                <div className='second'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac urna nec velit pretium tincidunt. Nunc eu luctus magna.</div>
              </div>
              <div className="main__container__about__side__sides__part">
                <div><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                      <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                    </svg></div>
                <div className='first'>3 этап</div>
                <div className='second'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac urna nec velit pretium tincidunt. Nunc eu luctus magna.</div>
              </div>
            </div>
          </div>
          <div className="main__container__about__info">
            <p className="main__container__about__info__title">Размер объекта не имеет значения</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac urna nec velit pretium tincidunt. Nunc eu luctus magna. Suspendisse sollicitudin maximus nisi sit amet blandit. Vestibulum sed elit risus. Phasellus et nisl tempus, rutrum sapien ac, elementum elit.</p>
            <p className="second">Cras vitae lobortis nisl. Phasellus suscipit aliquet condimentum. Vivamus non lacus vestibulum, iaculis orci nec, accumsan mauris. Nullam lacinia libero vel efficitur maximus. Cras malesuada erat vestibulum, iaculis mauris et, aliquam tortor. Sed dapibus fermentum dui, non volutpat massa tincidunt vel. Phasellus interdum, leo non cursus pharetra, sem ipsum fringilla libero, sit amet laoreet nulla justo vel nulla. Aliquam nec pharetra enim. Curabitur sit amet aliquam mauris.</p>
          </div>
        </div>
        <div className="main__container__review">
          <Reviews/>
        </div>
        <div className="main__container__projects">
          <h3>Наши последние работы</h3>
          <div className="main__container__projects__container">
            <div className="main__container__projects__container__one">
              <div className="main__container__projects__container__one__inner">
                <div className='picture'><img width="200"  className='picture' src={bulding1} alt="logo" /></div>
                <div className='text'>
                  <p className='title'>Такой обьект</p>
                  <p>Suspendisse sollicitudin maximus nisi sit amet blandit. Vestibulum sed elit risus. Phasellus et nisl tempus, rutrum sapien ac, elementum elit.</p>
                </div>
                </div>
            </div>
            <div className="main__container__projects__container__one">
              <div className="main__container__projects__container__one__inner">
                <div className='picture'><img width="200"  className='picture' src={bulding2} alt="logo" /></div>
                <div className='text'>
                  <p className='title'>Такой обьект</p>
                  <p>Suspendisse sollicitudin maximus nisi sit amet blandit. Vestibulum sed elit risus. Phasellus et nisl tempus, rutrum sapien ac, elementum elit.</p>
                </div>
                </div>
            </div>
            <div className="main__container__projects__container__one">
              <div className="main__container__projects__container__one__inner">
                <div className='picture'><img width="200" className='picture' src={bulding3} alt="logo" /></div>
                <div className='text'>
                  <p className='title'>Такой обьект</p>
                  <p>Suspendisse sollicitudin maximus nisi sit amet blandit. Vestibulum sed elit risus. Phasellus et nisl tempus, rutrum sapien ac, elementum elit.</p>
                </div>
                </div>
            </div>
          </div>
        </div>
        <div className="main__container__contacts">
          <div className="main__container__contacts__block">
            <h4>Контакты</h4>
            <hr/>
            <p>8 874 456 12 23</p>
            <p>email@gmail.com</p>
            <div className="main__container__contacts__block_social">
              
            </div>
            <p className="text"><b>Главный офис</b></p>
            <p>ул. Антонова-Овсеенко, 44Б</p>
          </div>
          <iframe  className="main__container__contacts__map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2389.275682961072!2d50.21314007702447!3d53.212905184699245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41661c0025159ecd%3A0xd658dfd88f197f3b!2sgooddelo!5e0!3m2!1sru!2sru!4v1683538604485!5m2!1sru!2sru" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div id='thereToJump2' className="main__container__formDiv">
          <p>Остались вопросы? Хотите заказать проект?</p>
          <div className="main__container__formDiv__inner">
            <form>
                        
                        <div className='inputGroup'>
                            <label htmlFor="login">Имя</label>
                            <input className='auth_input' id="name" type='text' name="name"/>
                        </div>
                        <div className='inputGroup'>
                            <label htmlFor="password">Телефон</label>
                            <div className='auth_inputField'>
                                <input className='auth_input'/>
                            </div>
                        </div>
                        <div className='inputGroup'>
                            <label htmlFor="password">Email</label>
                            <div className='auth_inputField'>
                                <input className='auth_input'/>
                            </div>
                        </div>
                        
              <button style={{background: 'gray'}} className='auth_button'>Отправить</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Main;