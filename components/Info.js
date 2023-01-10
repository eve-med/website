import React from 'react'

const Info = () => {
  return (
    <div className="bg-[#C0DAFF]">
      <div className="container mx-auto my-24">
        <div class="grid grid-cols-2 text-center ml-10">
          <div class="col-span-4">
            <h1 className="text-2xl md:text-4xl font-bold mb-24 md:mb-24">
              Si tienes dudas,<br></br>pregúntale a tus datos
            </h1>
          </div>
          <div class="text-left">
            <div className="mb-10">
              <h1 className="text-md lg:text-3xl font-bold mb-2 md:mb-14 lg:mb-14">Búsqueda a tu manera</h1>
              <h4 className="text-xs lg:text-xl font-regular mb-2">
                Eve te permite realizar y combinar muchos tipos de búsquedas: <br></br>por hospital, por pacientes, por genero, por enfermedad, por grupo<br></br> etario, de la
                forma que desees. Comienza por lo más simple con<br></br> una pregunta y observa a dónde te lleva.
              </h4>
            </div>
            <div>
              <h1 className="text-md lg:text-3xl font-bold mb-2 md:mb-14 lg:mb-14">Analiza a escala</h1>
              <h4 className="text-xs lg:text-xl font-regular mb-2">
                Es facil encontrar pacientes que coincidan con tu busqueda.<br></br> Pero, ¿cómo le damos sentido a 100 mil pacientes y a un millón?<br></br> Eve te permite obtener
                una vista mas general para<br></br> explorar tendencias y patrones en tus datos.
              </h4>
            </div>
          </div>
          <div class=" self-center">
            <div className="flex items-center justify-center ">
              <img alt="doctor" className="w-fit" src="/estetoscopio_amarillo.png"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info
