import React from 'react'

const Hero = () => {
  return (
    <div className="container mx-auto bottom-0 flex">
      <div className="font-montserrat grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center ml-10 ">
        <div className="flex mx-auto text-black flex-col">
          <h1 className="text-4xl font-black mb-10 sm:mb-14">CREANDO ESTADÍSTICAS DE LOS PACIENTES</h1>
          <h4 className="text-xl mb-10 sm:mb-14 font-regular">Somos la primer plataforma que crea estadísticas de los pacientes y los sincroniza con los hospitales.</h4>
          <a target="_blank" rel="noopener noreferrer" href="https://form.jotform.com/230076352214648">
            <button className="bg-[#96C3D6] w-52 h-12 rounded-full text-white font-black">BOOK A DEMO</button>
          </a>
        </div>

        <img alt="doctor" className="w-5/6 lg:w-full mt-auto" src="/doc_website.png"></img>

        <div className="flex items-center col-start-1 lg:col-start-3 col-end-3">
          <div className="text-[#8E91B0] flex flex-col">
            <h4 className="text-xl mb-14 font-regular">
              Eve revoluciona la<br></br> forma en que los<br></br> hospitales obtienen y<br></br> comparten datos.
            </h4>
            <div className="w-60 h-60 relative flex items-center">
              <div className="bg-white w-5/6 h-5/6 absolute flex items-center flex-col justify-evenly">
                <div>
                  <p className="font-bold text-[#96C3D6] text-2xl">1000+</p>
                  <p>Estadísticas</p>
                </div>
                <div>
                  <p className="font-bold text-[#96C3D6] text-2xl">10+</p>
                  <p>Hospitales</p>
                </div>
              </div>
              <div className="bg-[#90AFDF] w-5/6 h-5/6 ml-5 mb-8"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
