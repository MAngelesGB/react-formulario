export function Platillo({ dish, handleDelete, handleUpdate }) {
  return (
    <div className="max-w-[300px] max-h-[600px] border-gray-300 rounded-lg p-4 bg-white m-10">
      <div className="flex justify-center items-center">
        <img src={dish.imagen} alt={dish.nombre} className="w-60 h-40 object-cover" />
      </div>
      <div className="justify-center mb-4 mt-4">
        <h2 className="text-lg font-sriracha text-[#6B7D7D] text-[28px]">{dish.nombre}</h2>
        <p className="font-sriracha text-[#A6D8D4] text-[22px]">{dish.descripcion}</p>
      </div>
      <ul className="font-sriracha text-[#D7DAE5] text-[18px]">
        <li>Acompañantes: {dish.acompaniantes.join(', ')}</li>
        <li>Picor: {dish.picor}</li>
        <li>Personas: {dish.personas}</li>
      </ul>
      <div className="flex justify-center items-center mt-4">
        <button onClick={() => handleUpdate(dish.id)} className=" max-w-[150px] text-[18px] bg-[#A6D8D4] hover:bg-[#8EAF9D] text-white font-sriracha py-2 px-5 ml-3 rounded-[8px] hover:scale-105">Actualizar</button>
        <button onClick={() => handleDelete(dish.id)} className=" max-w-[150px] text-[18px] bg-[#6B7D7D] hover:bg-[#8EAF9D] text-white font-sriracha py-2 px-5 ml-2 rounded-[8px] hover:scale-105">Eliminar</button>
      </div>
    </div>
  );
}
