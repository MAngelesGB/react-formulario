export function Platillo({dish, index, handleDelete, handleUpdate}){
	return(
		<>
			<div>
				<div className="card" style={{width: '18rem'}}>
					<img src={dish.imagen} alt={dish.nombre} />
					<div className="card-body">
						<h5 className="card-title">{dish.nombre}</h5>
						<p className="card-text">{dish.descripcion}</p>
					</div>
					<ul className="list-group list-group-flush">
						<li className="list-group-item">Acompañantes: {dish.acompaniantes.join(', ')}</li>
						<li className="list-group-item">Picor: {dish.picor}</li>
						<li className="list-group-item">Personas: {dish.personas}</li>
					</ul>
					<div className="card-body">
						<button onClick={() => handleUpdate(index)}>Actualizar</button>
						<button onClick={() => handleDelete(index)}>Eliminar</button>
						</div>

				</div>
			</div>
		</>
	)

}