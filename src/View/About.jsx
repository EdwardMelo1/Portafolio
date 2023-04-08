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
                                <div className='imgskills'>
                                    <h3>FIGMA</h3>
                                    <img src="https://logodownload.org/wp-content/uploads/2022/12/figma-logo-0.png" alt="Logo figma" />
                                </div>
                                <div className='imgskills'>
                                    <h3>ADOBEXD</h3>
                                    <img src="https://play-lh.googleusercontent.com/kaox1VteLsWAuNxPxhm8t4llaoyFhxzDjo9g4Hdf92bKdT_Sn6Yrdku6rApuc5ktirw" alt="Logo Adobe xd" />
                                </div>
                                <div className='imgskills'>
                                    <h3>REACT</h3>
                                    <img src="https://www.logo.wine/a/logo/React_(web_framework)/React_(web_framework)-Logo.wine.svg" alt="Logo figma" />
                                </div>
                                <div className='imgskills'>
                                    <h3>MONGODB</h3>
                                    <img src="data:image/png;base64,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" alt="Logo figma" />
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