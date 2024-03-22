export function Platillo({ dish, index, handleDelete, handleUpdate }) {
  return (
    <div className="border border-gray-300 rounded p-4">
      <div className="flex justify-center items-center">
        <img src={dish.imagen} alt={dish.nombre} className="w-36 h-36 object-cover mb-4 rounded-full" />
      </div>
      <div className="mb-4">
        <h2 className="text-lg font-semibold">{dish.nombre}</h2>
        <p className="text-gray-600">{dish.descripcion}</p>
      </div>
      <ul className="text-sm text-gray-700 mb-4">
        <li>Acompañantes: {dish.acompaniantes.join(', ')}</li>
        <li>Picor: {dish.picor}</li>
        <li>Personas: {dish.personas}</li>
      </ul>
      <div>
        <button onClick={() => handleUpdate(index)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Actualizar</button>
        <button onClick={() => handleDelete(index)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Eliminar</button>
      </div>
    </div>
  );
}
