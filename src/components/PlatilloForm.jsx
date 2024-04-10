export function PlatilloForm({ form, handleInputChange, handleSubmit, cleanForm, cancelForm }) {
  return (
    <form onSubmit={handleSubmit} className="max-w-[1200px] mx-auto grid gap-4 md:grid-cols-5 rounded-lg px-10 py-4 bg-[#B9CDDA]">
      {/* Columna izquierda */}
      <div className="col-start-1 col-span-2">
        {/*Image del platillo*/}
        <div className="mb-4">
          <label htmlFor="image" className="block font-sriracha text-[#6B7D7D] text-[18px]">Image</label>
          <input placeholder="Image URL direction" id="image" type="text" name="image" value={form.image} onChange={handleInputChange} required className="w-full border border-gray-300 rounded-xl px-4 py-2 text-[16px] font-tauri text-[#6B7D7D]" />
        </div>
        {/*Title del platillo*/}
        <div className="mb-4">
          <label htmlFor="title" className="block font-sriracha text-[#6B7D7D] text-[18px]">Title</label>
          <input placeholder="Title of the book" id="title" type="text" name="title" value={form.title} onChange={handleInputChange} required className="w-full border border-gray-300 rounded-xl px-4 py-2 text-[16px] font-tauri text-[#6B7D7D]" />
        </div>
        {/*Description del platillo*/}
        <div className="mb-4">
          <label htmlFor="description" className="block font-sriracha text-[#6B7D7D] text-[18px]">Description</label>
          <textarea placeholder="Description of the book" id="description" name="description" value={form.description} onChange={handleInputChange} required className="w-full border border-gray-300 rounded-lg px-4 py-2 text-[16px] font-tauri text-[#6B7D7D]"></textarea>
        </div>
      </div>
      {/* Columna derecha */}
      <div className="col-start-3 col-span-2">
        {/*Genre*/}
        <div className="mb-4 max-w-[300px]">
          <label className="block font-sriracha text-[#6B7D7D] text-[18px]">Genre</label>
          <div className="flex gap-2 font-tauri text-[16px] mt-3">
              <input type="checkbox" name="genre" value="Romance" checked={form.genre.includes("Romance")} onChange={handleInputChange} className="relative h-5 w-5 shrink-0 appearance-none rounded-[1px] border checked:bg-[#70D3FD] hover:ring hover:ring-gray-300 focus:outline-none bg-slate-50" /> Romance
              <input type="checkbox" name="genre" value="Fantasy" checked={form.genre.includes("Fantasy")} onChange={handleInputChange} className="relative h-5 w-5 shrink-0 appearance-none rounded-[1px] border checked:bg-[#70D3FD] hover:ring hover:ring-gray-300 focus:outline-none bg-slate-50" /> Fantasy
              <input type="checkbox" name="genre" value="Drama" checked={form.genre.includes("Drama")} onChange={handleInputChange} className="relative h-5 w-5 shrink-0 appearance-none rounded-[1px] border checked:bg-[#70D3FD] hover:ring hover:ring-gray-300 focus:outline-none bg-slate-50" /> Drama
              <input type="checkbox" name="genre" value="Mistery" checked={form.genre.includes("Mistery")} onChange={handleInputChange} className="relative h-5 w-5 shrink-0 appearance-none rounded-[1px] border checked:bg-[#70D3FD] hover:ring hover:ring-gray-300 focus:outline-none bg-slate-50" /> Mistery
              <input type="checkbox" name="genre" value="Tragedy" checked={form.genre.includes("Tragedy")} onChange={handleInputChange} className="relative h-5 w-5 shrink-0 appearance-none rounded-[1px] border checked:bg-[#70D3FD] hover:ring hover:ring-gray-300 focus:outline-none bg-slate-50" /> Tragedy
          </div>
        </div>
        {/*Score*/}
        <div className="mb-4 ">
          <label className="block font-sriracha text-[#6B7D7D] text-[18px]">Score</label>
          <div className="flex gap-2 font-tauri mt-3 text-center">
            <input type="radio" name="score" value="1" checked={form.score=== "1"} onChange={handleInputChange} className="relative h-4 w-4 shrink-0 appearance-none rounded-full border checked:bg-[#70D3FD] hover:ring hover:ring-gray-300 focus:outline-none bg-slate-50 my-1" /> 1 point
            <input type="radio" name="score" value="2" checked={form.score=== "2"} onChange={handleInputChange} className="relative h-4 w-4 shrink-0 appearance-none rounded-full border checked:bg-[#70D3FD] hover:ring hover:ring-gray-300 focus:outline-none bg-slate-50 my-1" /> 2 points
            <input type="radio" name="score" value="3" checked={form.score=== "3"} onChange={handleInputChange} className="relative h-4 w-4 shrink-0 appearance-none rounded-full border checked:bg-[#70D3FD] hover:ring hover:ring-gray-300 focus:outline-none bg-slate-50 my-1" /> 3 points
            <input type="radio" name="score" value="4" checked={form.score=== "4"} onChange={handleInputChange} className="relative h-4 w-4 shrink-0 appearance-none rounded-full border checked:bg-[#70D3FD] hover:ring hover:ring-gray-300 focus:outline-none bg-slate-50 my-1" /> 4 points
            <input type="radio" name="score" value="5" checked={form.score=== "5"} onChange={handleInputChange} className="relative h-4 w-4 shrink-0 appearance-none rounded-full border checked:bg-[#70D3FD] hover:ring hover:ring-gray-300 focus:outline-none bg-slate-50 my-1" /> 5 points
          </div>
        </div>
        {/*Status*/}
        <div className="mb-4">
          <label htmlFor="status" className="block font-sriracha text-[#6B7D7D] text-[18px]">Status</label>
          <select id="status" name="status" value={form.status} onChange={handleInputChange} className=" mt-3 text-[16px] font-tauri text-[#6B7D7D] w-full border border-gray-300 rounded-xl px-4 py-2">
            <option value="To read">To read</option>
            <option value="Reading">Reading</option>
            <option value="Read">Read</option>
            <option value="Abandoned">Abandoned</option>
          </select>
        </div>
      </div>
      {/* Columna derecha */}
      <div className="flex flex-col gap-4 items-center justify-center">
        <button type="submit" className="text-[18px] bg-[#8EAF9D] hover:bg-[#6B7D7D] text-white font-sriracha py-2 px-10 w-[160px] h-[45px] ml-2 rounded-[8px] hover:scale-105">Save</button>
        <button type="button" onClick={cleanForm} className=" text-[18px] bg-[#8EAF9D] hover:bg-[#6B7D7D] text-white font-sriracha py-2 px-10 w-[160px] h-[45px] rounded-[8px] ml-2 hover:scale-105">Clean</button>
        <button type="button" onClick={() => cancelForm()} className="text-[18px] bg-[#8EAF9D] hover:bg-[#6B7D7D] text-white font-sriracha py-2 px-10 w-[160px] h-[45px] rounded-[8px] ml-2 hover:scale-105">Cancel</button>
      </div>
    </form>
  )
}
