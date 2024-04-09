export function PlatilloForm({ form, handleInputChange, handleSubmit, cleanForm, cancelForm }) {
  return (
    <form onSubmit={handleSubmit} className="max-w-[1200px] mx-auto grid gap-4 md:grid-cols-3 rounded-lg px-10 py-4 bg-[#B9CDDA]">
      {/* Columna izquierda */}
      <div>
        {/*Imagen del platillo*/}
        <div className="mb-4">
          <label htmlFor="imagen" className="block font-sriracha text-[#6B7D7D] text-[18px]">Imagen del platillo</label>
          <input placeholder="Inserte una URL" id="imagen" type="text" name="imagen" value={form.imagen} onChange={handleInputChange} required className="w-full border border-gray-300 rounded-xl px-4 py-2 text-[16px] font-tauri text-[#6B7D7D]" />
        </div>
        {/*Nombre del platillo*/}
        <div className="mb-4">
          <label htmlFor="nombre" className="block font-sriracha text-[#6B7D7D] text-[18px]">Nombre del platillo</label>
          <input id="nombre" type="text" name="nombre" value={form.nombre} onChange={handleInputChange} required className="w-full border border-gray-300 rounded-xl px-4 py-2 text-[16px] font-tauri text-[#6B7D7D]" />
        </div>
        {/*Descripción del platillo*/}
        <div className="mb-4">
          <label htmlFor="descripcion" className="block font-sriracha text-[#6B7D7D] text-[18px]">Descripción del platillo</label>
          <textarea id="descripcion" name="descripcion" value={form.descripcion} onChange={handleInputChange} required className="w-full border border-gray-300 rounded-lg px-4 py-2 text-[16px] font-tauri text-[#6B7D7D]"></textarea>
        </div>
      </div>
      {/* Columna derecha */}
      <div>
        {/*Acompañantes*/}
        <div className="mb-4">
          <label className="block font-sriracha text-[#6B7D7D] text-[18px]">Acompañantes</label>
          <div className="flex gap-2 font-tauri text-[16px]">
            <input type="checkbox" name="acompaniantes" value="Salsa roja" checked={form.acompaniantes.includes("Salsa roja")} onChange={handleInputChange} className="mr-1" /> Salsa roja
            <input type="checkbox" name="acompaniantes" value="Salsa verde" checked={form.acompaniantes.includes("Salsa verde")} onChange={handleInputChange} className="mr-1" /> Salsa verde
          </div>
        </div>
        {/*Picor*/}
        <div className="mb-4">
          <label className="block font-sriracha text-[#6B7D7D] text-[18px]">¿Picante?</label>
          <div className="flex gap-2 font-tauri">
            <input type="radio" name="picor" value="Sin picante" checked={form.picor === "Sin picante"} onChange={handleInputChange} className="mr-1" /> Sin picante
            <input type="radio" name="picor" value="Con picante" checked={form.picor === "Con picante"} onChange={handleInputChange} className="mr-1" /> Con picante
          </div>
        </div>
        {/*Número de personas*/}
        <div className="mb-4">
          <label htmlFor="personas" className="block font-sriracha text-[#6B7D7D] text-[18px]">Número de personas</label>
          <select id="personas" name="personas" value={form.personas} onChange={handleInputChange} className="text-[16px] font-tauri text-[#6B7D7D] w-full border border-gray-300 rounded-xl px-4 py-2">
            <option value="1">1 persona(s)</option>
            <option value="2">2 persona(s)</option>
            <option value="3">3 persona(s)</option>
            <option value="4">4 persona(s)</option>
          </select>
        </div>
      </div>
      {/* Columna derecha */}
      <div className="flex flex-col gap-4 mb-4 items-center justify-center">
        <button type="submit" className="text-[18px] bg-[#8EAF9D] hover:bg-[#6B7D7D] text-white font-sriracha py-2 px-10 ml-2 rounded-[8px] hover:scale-105">Guardar</button>
        <button type="button" onClick={cleanForm} className=" text-[18px] bg-[#8EAF9D] hover:bg-[#6B7D7D] text-white font-sriracha py-2 px-10 rounded-[8px] ml-2 hover:scale-105">Limpiar</button>
        <button type="button" onClick={() => cancelForm()} className="text-[18px] bg-[#8EAF9D] hover:bg-[#6B7D7D] text-white font-sriracha py-2 px-10 rounded-[8px] ml-2 hover:scale-105">Cancelar</button>
      </div>
    </form>
  )
}
