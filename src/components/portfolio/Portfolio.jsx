import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/garbage-game.png'
import IMG2 from '../../assets/auth.png'


function Portfolio() {

  const data = [
    {
      id: 1,
      title: 'Garbage game',
      parag: 'Eco project that will teach you how to properly sort waste',
      img: IMG1,
      git: "https://github.com/Banu891/garbage-game-eco-project",
    },
        {
      id: 2,
      title: 'Authorization',
      parag: 'Authorization,registration with a personal account on React.js and Express',
      img: IMG2,
      git: "https://github.com/Banu891/auth-react-express",
    }
  ]
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>My Portfolio</h2>

      <div className='container portfolio__container'>
        {data.map(({ id, title, parag, img, git }) => 
          <article key={id} className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={img} alt={title}/>
          </div>
          <div className='portfolio__item-cta'>
            <h3>{title}</h3>
          </div>
          <p>{parag}</p>
          <div className='portfolio__item-cta'> 
            <a href={git} className='btn' target='_blank' rel="noreferrer" >Github</a>
          </div>
        </article>
        )}
      </div>
    </section>
  )
}

export default Portfolio