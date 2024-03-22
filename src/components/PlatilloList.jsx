import { Platillo } from './Platillo'

export function PlatilloList({ dishes, handleDelete, handleUpdate }) {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {dishes.map((dish, index) => (
        <div key={index}>
          <Platillo dish={dish} index={index} handleDelete={handleDelete} handleUpdate={handleUpdate} />
        </div>
      ))}
    </div>
  );
}


