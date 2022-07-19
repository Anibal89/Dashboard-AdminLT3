import React from 'react'

const Form =({tabla, setTabla}) => {

 const handleChange  = e => {   // Utilizacion de Hooks, copia de estados
    setTabla({
        ...tabla,
        [e.target.name]: e.target.value
    })

 }
    let{tipoMaterial, turno, fecha, supervisor, operador, peso, maquina} = tabla

    const handleSubmit = () =>{
        maquina = parseInt(maquina, 10)
    //validacion de campos internos
    if(tipoMaterial === '' || turno === '' ||fecha === '' ||supervisor === '' || operador === '' ||peso === '' || maquina <= 0){
        alert("Todos los campos son obligatorios")
        return
    }
    //consulta para guardar datos
    const requestInit ={
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify(tabla)
    }
    fetch('http://localhost:80/api-swort/', requestInit)
        .then(res => res.json())
        .then(data => console.log(data))

//reiniciar datos del formulario

 setTabla({
    tipoMaterial: '',
    turno: '',
    fecha: '',
    supervisor: '',
    operador: '',
    peso: '',
    maquina: 0
 })

}

  return (
    <form onSubmit={handleSubmit} className="form-horizontal">
    <div class="card-body">
      <div className="form-group row">
        <label htmlFor="tpmaterial" className="col-sm-2 col-form-label">Tipo de material</label>
        <div className="col-sm-10">
          <input value={tipoMaterial}  name="tipoMaterial" onChange={handleChange} type="text" id="tpmaterial" className="form-control"/>
        </div>
      </div>

      <div class="form-group row">
        <label htmlFor="turn" className="col-sm-2 col-form-label">Turno</label>
        <div className="col-sm-10">
          <input  value={turno} name="turno" onChange={handleChange} type="text" id="turn" className="form-control"/>
        </div>
      </div>

      <div className="form-group row">
        <label htmlFor="fech" className="col-sm-2 col-form-label">Fecha</label>
        <div class="col-sm-10">
          <input value={fecha} name="fecha" onChange={handleChange}type="date" id="fech" className="form-control"/>
        </div>
      </div>

      <div className="form-group row">
        <label htmlFor="superv" className="col-sm-2 col-form-label">Supervisor</label>
        <div className="col-sm-10">
          <input value={supervisor} name="supervisor" onChange={handleChange} type="text" id="superv" className="form-control"/>
        </div>
      </div>

      <div className="form-group row">
        <label htmlFor="opera" className="col-sm-2 col-form-label">Operador</label>
        <div className="col-sm-10">
          <input value={operador} name="operador" onChange={handleChange}type="text" id="opera" className="form-control"/>
        </div>
      </div>

      <div className="form-group row">
        <label htmlFor="pes" className="col-sm-2 col-form-label">Peso</label>
        <div className="col-sm-10">
          <input value={peso} name="peso" onChange={handleChange} type="text" id="pes" className="form-control"/>
        </div>
      </div>

      
      <div className="form-group row">
        <label htmlFor="maqui" className="col-sm-2 col-form-label">Maquina</label>
        <div className="col-sm-10">
          <input value={maquina} name="maquina" onChange={handleChange} type="number" id="maqui" className="form-control"/>
        </div>
      </div>
    </div>
      <button type='submit' class="btn btn-info">Guardar registro</button>
  </form>
  );
}

export default Form;
