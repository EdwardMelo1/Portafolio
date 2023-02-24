import React from 'react'

const about = () => {
  return (
    <>
    <section id='section_1'>
        <div className='container-about' >
                    <h1>About me </h1>
                    <div className='about'>
                        <div className='boxabout'>
                            <h2>Who am i?</h2>
                            <h3>I am edward melo, a full stack programmer with excellent communication skills, I like to work in a team, I am a very sociable and outgoing person, always willing to give the best of me.</h3>
                        </div>
                        <div className='boxaboutmy'>
                            <h2>My skills</h2>
                            <div className='skills'>
                                <div className='imgskills'>
                                    <h3>HTML</h3>
                                    <img src="https://img.freepik.com/iconos-gratis/html-5_318-566077.jpg?w=2000" alt="logo HTML" />
                                </div>
                                <div className='imgskills'>
                                    <h3>CSS</h3>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" alt="logo CSS" />
                                </div>
                                <div className='imgskills'>
                                    <h3>JAVASCRIPT</h3>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" alt="logo Javascript" />
                                </div>
                                <div className='imgskills'>
                                    <h3>GITHUB</h3>
                                    <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Logo Gitgub" />
                                </div>
                            </div>
                        </div>
                    </div>
                
            </div>
    </section>
</>
)
}

export default about