import React from 'react';
import './../styles/footer.scss'
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>

function Footer (){

  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__container__social">
            <p><b>Контакты</b></p>
            <p>8 874 456 12 23</p>
            <p>email@gmail.com</p>
        </div>
        <div className="footer__container__address">
            <p><b>Аддрес</b></p>
            <p className='text'>ул. Антонова-Овсеенко, 44Б, этаж 7, офис 704, Самара, Самарская обл., 443066</p>
        </div>
        <div className="footer__container__else">
            <p><b>Информация</b></p>
            <p className='text'>Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации</p>
        </div>
      </div>
    </div>
  );
}
export default Footer;