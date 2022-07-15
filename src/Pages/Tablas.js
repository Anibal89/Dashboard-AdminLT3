import React from 'react'



    const Tablas2 = ({ tabla2 }) => {
        return (
            <div className='table-responsive'>
            <table className="table table-striped table-bordered text-center ">
                <thead className="thead-dark">
                    <tr>
                        <th >Id</th>
                        <th >Tipo de Material</th>
                        <th>Turno</th>
                        <th >Fecha</th>
                        <th >Supervisor</th>
                        <th >Operador</th>
                        <th >Peso</th>
                        <th >Maquina</th>
                        <th >Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {tabla2.map(extrusion_b2 => (
                        <tr key={extrusion_b2.Id}>
                            <td >{extrusion_b2.Id}</td>
                            <td>{extrusion_b2.tipoMaterial}</td>
                            <td>{extrusion_b2.turno}</td>
                            <td>{extrusion_b2.fecha}</td>
                            <td>{extrusion_b2.supervisor}</td>
                            <td>{extrusion_b2.operador}</td>
                            <td>{extrusion_b2.peso}</td>
                            <td>{extrusion_b2.maquina}</td>
                            <td>
                                <button type="button" className="btn btn-success">Editar</button>{" "}
                                <button type="button" className="btn btn-danger">Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        );
    }
    

export default Tablas2