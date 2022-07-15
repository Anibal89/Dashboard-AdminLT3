import React from 'react'
import IconoCarga from '../Img/Icono-menu.png';

function Preloader() {
  return (
   <div className="preloader flex-column justify-content-center align-items-center">
  <img className="animation__shake" src={IconoCarga} alt="UnisaLogo" height={60} width={60} />
</div>

  )
}

export default Preloader