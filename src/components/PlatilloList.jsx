import { Platillo } from './Platillo'

export function PlatilloList({ dishes, handleDelete, handleUpdate }) {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {dishes.map((dish) => (
        <div>
          <Platillo dish={dish} handleDelete={handleDelete} handleUpdate={handleUpdate} />
        </div>
      ))}
    </div>
  );
}


