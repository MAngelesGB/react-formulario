import { Platillo } from './Platillo'

export function PlatilloList({ books, handleDelete, handleUpdate }) {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.map((book) => (
        <div>
          <Platillo book={book} handleDelete={handleDelete} handleUpdate={handleUpdate} />
        </div>
      ))}
    </div>
  );
}


