import './styles.css'

export const Banner = () => {
  return (
    <div className='banner'>
        <p>Bienvenido a <b>FirstJob</b>, el lugar donde comienzas a dar
        <br /> forma a tus primeras experiencias laborales.</p>
        <button className='btn-banner'>
            <span>Empieza a interactuar</span>
        </button>

        <img src="public\images\left-banner.png" alt="" className='img-left' />
        <img src="public\images\right-banner.png" alt="" className='img-right'/>
    </div>
  )
}
