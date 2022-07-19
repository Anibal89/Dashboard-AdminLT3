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
                    {tabla2.map(tabla => (
                        <tr key={tabla.Id}>
                            <td >{tabla.Id}</td>
                            <td>{tabla.tipoMaterial}</td>
                            <td>{tabla.turno}</td>
                            <td>{tabla.fecha}</td>
                            <td>{tabla.supervisor}</td>
                            <td>{tabla.operador}</td>
                            <td>{tabla.peso}</td>
                            <td>{tabla.maquina}</td>
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