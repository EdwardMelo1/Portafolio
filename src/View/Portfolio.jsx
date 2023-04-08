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
            <div class='card' id='card6'>

              <div class='info'>

                  <h1 class='title'>Extinción</h1>
                  <p class='description'>Caso práctico desarrollado para el curso de UX design de google </p>
                  <button className='links'><a href="https://www.figma.com/proto/9C0Jz9AHV6iLKVuNrzWcTr/Untitled?node-id=52-482&scaling=min-zoom&page-id=52%3A481"><TbWorld/>prototype</a></button>
                  <button className='links'><a href="https://www.figma.com/file/9C0Jz9AHV6iLKVuNrzWcTr/Untitled?node-id=52%3A482&t=0lj1lZnzYjSJWLuM-1"><TbWorld/>mokups</a></button>
                  <button className='links'><a href="https://drive.google.com/file/d/17kROoY_8801J9GIonpzPxcRDGRQVeAaV/view"><TbWorld/> practical case</a></button>
              
              </div>

            </div>
          </div>
          <div>
            <div class='card' id='card7'>

              <div class='info'>

                  <h1 class='title'>Fundacion</h1>
                  <p class='description'> Caso práctico desarrollado para el curso de UX design de google</p>
                  <button className='links'><a href="https://www.figma.com/proto/bvaERMAGbKFLZX2TG5JjVP/Untitled?node-id=39-2&scaling=scale-down&page-id=36%3A2&starting-point-node-id=39%3A2"><TbWorld/>prototype</a></button>
                  <button className='links'><a href="https://www.figma.com/file/bvaERMAGbKFLZX2TG5JjVP/Untitled?node-id=39%3A2&t=HEd5iCb80PGaFRSV-1"><TbWorld/>mokups</a></button>
                  <button className='links'><a href="https://drive.google.com/file/d/1_4693gUTojrRn5k-0HC1jnz2S_2EctdE/view"><TbWorld/> practical case</a></button>
              
              </div>

            </div>
          </div>
          <div>
            <div class='card' id='card8'>

              <div class='info'>

                  <h1 class='title'>Tienda de musica</h1>
                  <p class='description'>Caso práctico desarrollado para el curso de UX design de google </p>
                  <button className='links'><a href="https://www.figma.com/proto/QczA9THFRRO6VRhwCzONc6/Untitled?node-id=53-3&scaling=scale-down&page-id=53%3A2&starting-point-node-id=53%3A3"><TbWorld/>prototype</a></button>
                  <button className='links'><a href="https://www.figma.com/file/QczA9THFRRO6VRhwCzONc6/Untitled?node-id=53%3A2&t=0lj1lZnzYjSJWLuM-1"><TbWorld/>mokups</a></button>
                  <button className='links'><a href="https://drive.google.com/file/d/1B2njSVxf3mOIAe1ys4o5fEitD1jHldN1/view"><TbWorld/> practical case</a></button>
              
              </div>

            </div>
          </div>
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
          
          
          
        </div>
    </section>
    </>
  )
}

export default Portfolio