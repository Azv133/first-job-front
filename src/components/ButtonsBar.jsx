import React from 'react'

export const ButtonsBar = () => {
  return (
    <div className='buttons-bar'>
        <div className='flex gap-4 items-center'>
            <img src="public\svg\ico1.png" className="ico" alt=""/>
            <img src="public\images\logo1.png" alt="" />
        </div>

        <div className='flex gap-4'>
            <button className='btn gray'>Trabajos</button>
            <button className='btn white'>Postulaciones</button>
            <button className='btn white'>Comunidad</button>
            <button className='btn dark'>
                <img src="public\svg\sparkle.svg" alt="" />
                Eventos
            </button>
        </div>
    </div>
  )
}
