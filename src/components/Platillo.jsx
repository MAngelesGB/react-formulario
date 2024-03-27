export function Platillo({ dish, handleDelete, handleUpdate }) {
  return (
    <div className="border border-gray-300 rounded-lg p-4 bg-white">
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
        <button onClick={() => handleUpdate(dish.id)} className="bg-blue-500 hover:bg-blue-700 hover:scale-105 text-white font-bold py-2 px-4 rounded-lg mr-2">Actualizar</button>
        <button onClick={() => handleDelete(dish.id)} className="bg-red-500 hover:bg-red-700 hover:scale-105 text-white font-bold py-2 px-4 rounded-lg">Eliminar</button>
      </div>
    </div>
  );
}
