import React from 'react'
import "./Contact.css"
const Contact = () => {
  return (
    <div>
      <section className='contact'>
        <div>
          <h1 className='textcontact'>
              Contact
          </h1> 
          <h2>Contact me if you want us to work together. </h2>
        </div>
          <div className='contacticons'>
              <div className='linkcontact'>
                <a href="https://www.instagram.com/a.lejandro.o_/">
                  <img className='gmail' src="https://cdn-icons-png.flaticon.com/512/281/281769.png" alt="" />
                </a>
                <h1>
                  Mail me
                </h1>
              </div>
              <div className='linkcontact'>
                <a href="https://www.linkedin.com/in/edward-melo/">
                  <img  className='linkedi' src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw" alt="" />
                </a>
                <h1>
                  Contact me
                </h1>
              </div>
              <div className='linkcontact'>
                <a href="https://www.instagram.com/a.lejandro.o_/">
                  <img className='insta' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png" alt="" />
                </a>
                <h1>
                  Contact me
                </h1>
              </div>
              <div className='linkcontact'>
                <a href="https://t.me/Edwardmelo">

                  <img className='telegram' src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/1200px-Telegram_2019_Logo.svg.png" alt="" />
                </a>
                <h1>
                  Contact me
                </h1>
              </div>
          </div>
      </section>

      
    </div>
    
  )
}

export default Contact