import './PlatilloForm.css';
export function PlatilloForm ({form, handleInputChange, handleSubmit, cleanForm, cancelForm}) {
	return (
		<>
			<form onSubmit={handleSubmit}>
				{/*Imagen del platillo*/}
				<div className="order-item">
					<label htmlFor="imagen">Imagen del platillo</label>
					<input type="text" name="imagen" value = {form.imagen} onChange = {handleInputChange} required/>
				</div>
				{/*Nombre del platillo*/}
				<div className="order-item">
					<label htmlFor="nombre">Nombre del platillo</label>
					<input type="text" name="nombre" value = {form.nombre} onChange = {handleInputChange} required/>
				</div>
				{/*Descripción del platillo*/} 
				<div className="order-item">
					<label htmlFor="descripcion">Descripción del platillo</label>
					<textarea name="descripcion" value={form.descripcion} onChange={handleInputChange} required/>
				</div>
				{/*Acompañantes*/} 
				<div className="order-item">
					<label htmlFor="acompaniantes">Acompañantes</label>
					<div className="item-options">
						<input type="checkbox" name="acompaniantes" value="Salsa roja" checked={form.acompaniantes.includes("Salsa roja")}
						onChange={handleInputChange} /> Salsa roja
						<input type="checkbox" name="acompaniantes" value="Salsa verde" checked={form.acompaniantes.includes("Salsa verde")}
						onChange={handleInputChange} /> Salsa verde
					</div>		
				</div>
				{/*Picor*/} 
				<div className="order-item">
					<label htmlFor="picor">¿Picante?</label>
					<div className="item-options">
						<input type="radio" name="picor" value="Sin picante" checked={form.picor==="Sin picante"} 
							onChange={handleInputChange}/> Sin picante
						<input type="radio" name="picor" value="Con picante" checked={form.picor==="Con picante"} 
							onChange={handleInputChange}/> Con picante
					</div>
				</div>	
				{/*Número de personas*/}
				<div className="order-item">
					<label htmlFor="personas">Número de personas</label>
					<select name="personas" value={form.personas} onChange={handleInputChange}>
						<option value="1">1 persona(s)</option>
						<option value="2">2 persona(s)</option>
						<option value="3">3 persona(s)</option>
						<option value="4">4 persona(s)</option>
					</select>
				</div>
				<button type="submit">Guardar</button>	
				<button type="button" onClick={cleanForm}>Limpiar</button>
				<button type="button" onClick={() => cancelForm()}>Cancelar</button>
			</form>
		</>
	)
}