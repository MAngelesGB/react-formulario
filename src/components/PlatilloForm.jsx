export function PlatilloForm({ form, handleInputChange, handleSubmit, cleanForm, cancelForm }) {
  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto grid grid-cols-1 gap-4 md:grid-cols-2">
      {/* Columna izquierda */}
      <div>
        {/*Imagen del platillo*/}
        <div className="mb-4">
          <label htmlFor="imagen" className="block">Imagen del platillo</label>
          <input id="imagen" type="text" name="imagen" value={form.imagen} onChange={handleInputChange} required className="w-full border border-gray-300 rounded px-4 py-2" />
        </div>
        {/*Nombre del platillo*/}
        <div className="mb-4">
          <label htmlFor="nombre" className="block">Nombre del platillo</label>
          <input id="nombre" type="text" name="nombre" value={form.nombre} onChange={handleInputChange} required className="w-full border border-gray-300 rounded px-4 py-2" />
        </div>
        {/*Descripción del platillo*/}
        <div className="mb-4">
          <label htmlFor="descripcion" className="block">Descripción del platillo</label>
          <textarea id="descripcion" name="descripcion" value={form.descripcion} onChange={handleInputChange} required className="w-full border border-gray-300 rounded px-4 py-2"></textarea>
        </div>
      </div>
      {/* Columna derecha */}
      <div>
        {/*Acompañantes*/}
        <div className="mb-4">
          <label className="block">Acompañantes</label>
          <div className="flex gap-2">
            <input type="checkbox" name="acompaniantes" value="Salsa roja" checked={form.acompaniantes.includes("Salsa roja")} onChange={handleInputChange} className="mr-1" /> Salsa roja
            <input type="checkbox" name="acompaniantes" value="Salsa verde" checked={form.acompaniantes.includes("Salsa verde")} onChange={handleInputChange} className="mr-1" /> Salsa verde
          </div>
        </div>
        {/*Picor*/}
        <div className="mb-4">
          <label className="block">¿Picante?</label>
          <div className="flex gap-2">
            <input type="radio" name="picor" value="Sin picante" checked={form.picor === "Sin picante"} onChange={handleInputChange} className="mr-1" /> Sin picante
            <input type="radio" name="picor" value="Con picante" checked={form.picor === "Con picante"} onChange={handleInputChange} className="mr-1" /> Con picante
          </div>
        </div>
        {/*Número de personas*/}
        <div className="mb-4">
          <label htmlFor="personas" className="block">Número de personas</label>
          <select id="personas" name="personas" value={form.personas} onChange={handleInputChange} className="w-full border border-gray-300 rounded px-4 py-2">
            <option value="1">1 persona(s)</option>
            <option value="2">2 persona(s)</option>
            <option value="3">3 persona(s)</option>
            <option value="4">4 persona(s)</option>
          </select>
        </div>
      </div>
      <div className="col-span-2 flex justify-center items-center">
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg hover:scale-105">Guardar</button>
        <button type="button" onClick={cleanForm} className=" bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded-lg ml-2 hover:scale-105">Limpiar</button>
        <button type="button" onClick={() => cancelForm()} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg ml-2 hover:scale-105">Cancelar</button>
      </div>
    </form>
  )
}
