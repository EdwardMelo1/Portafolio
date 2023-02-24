import React from 'react'
import "./Portfolio.css"
import { AiFillGithub } from 'react-icons/ai';
import { TbWorld } from 'react-icons/tb';


const Portfolio = () => {
  return (
    <>
    <section className='containercards' id='section_2'>
      <h1 className='maintext'>Portfolio</h1>
      <h2>Here you can see the projects I have worked on.</h2>
        <div className='cards'>
          <div>
            <div className='card' id='card1'>
                
              <div className='info'>

                  <h1 className='title'>Semillas</h1>
                  <p className='description'></p> 
                  <button className='links'><a href="https://neon-sfogliatella-5dfada.netlify.app/"><TbWorld/>Website</a></button>
                  <button className='links'><a href="https://github.com/JhonattanSSG01/Fundaci-nSemillas"><AiFillGithub/>Repositorio</a></button>
              
              </div>

            </div>
          </div>
          <div>
            <div class='card' id='card2'>

              <div class='info'>

                  <h1 class='title'>Tributo Badbunny</h1>
                  <p class='description'> </p>
                  <button className='links'><a href="https://edwardmelo1.github.io/Tributo/"><TbWorld/>Website</a></button>
                  <button className='links'><a href="https://github.com/EdwardMelo1/Tributo"><AiFillGithub/>Repositorio</a></button>
              
              </div>

            </div>
          </div>
          <div>
            <div class='card'id='card3'>

              <div class='info'>

                  <h1 class='title'>Sabujcha</h1>
                  <p class='description'> </p>
                  <button className='links'><a href="https://63531756e201e0007994a29a--lovely-seahorse-608137.netlify.app/"><TbWorld/>Website</a></button>
                  <button className='links'><a href="https://github.com/EdwardMelo1/Sabujcha.git"><AiFillGithub/>Repositorio</a></button>
              
              </div>

            </div>
          </div>
          <div>
            <div class='card' id='card4'>

              <div class='info'>

                  <h1 class='title'>Whillofzombies</h1>
                  <p class='description'> </p>
                  <button className='links'><a href="https://lambent-axolotl-7d7967.netlify.app/"><TbWorld/>Website</a></button>
                  <button className='links'><a href="https://www.youtube.com/watch?v=UrvPjYViDTQ&t=660s"><AiFillGithub/>Repositorio</a></button>
              
              </div>

            </div>
          </div>
          <div>
            <div class='card' id='card5'>

              <div class='info'>

                  <h1 class='title'>Restaurante</h1>
                  <p class='description'> </p>
                  <button className='links'><a href="https://astounding-lamington-f785b2.netlify.app/"><TbWorld/>Website</a></button>
                  <button className='links'><a href="https://github.com/EdwardMelo1/ProyectoRestaurante"><AiFillGithub/>Repositorio</a></button>
              
              </div>

            </div>
          </div>
          <div>
            <div class='card' id='card6'>

              <div class='info'>

                  <h1 class='title'>Title</h1>
                  <p class='description'> </p>
                  <button className='links'><a href="https://www.youtube.com/watch?v=lBZc-Osw-Pc"><TbWorld/>Website</a></button>
                  <button className='links'><a href="https://www.youtube.com/watch?v=UrvPjYViDTQ&t=660s"><AiFillGithub/>Repositorio</a></button>
              
              </div>

            </div>
          </div>
          
        </div>
    </section>
    </>
  )
}

export default Portfolio