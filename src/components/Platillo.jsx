export function Platillo({ book, handleDelete, handleUpdate }) {
  return (
    <div className="max-w-[800px]  border-gray-300 rounded-lg bg-white m-5 rounded-[30px] ">
      <div className="flex justify-center items-center ">
        <img src={book.image} alt={book.title} className="w-[800px] h-[250px] object-cover rounded-[15px]" />
      </div>
      <div className="my-4 flex flex-col items-center mb-4 mt-4">
        <h2 className="mb-2 text-lg font-sriracha text-[#6B7D7D] text-[35px]">{book.title}</h2>
        <p className="font-sriracha text-[#A6D8D4] text-[22px]">{book.author}</p>
      </div>
      <ul className="font-sriracha text-[#D7DAE5] text-[18px] px-[20px]">
        <li>Genre: {book.genre.join(', ')}</li>
        <li>Status: {book.status}</li>
        <li>Score: {book.score}</li>
      </ul>
      <div className="flex justify-center items-center mt-4 py-[20px]">
        <button onClick={() => handleUpdate(book.id)} className=" max-w-[150px] text-[18px] bg-[#A6D8D4] hover:bg-[#8EAF9D] text-white font-sriracha py-2 px-5  rounded-[8px] hover:scale-105">Edit</button>
        <button onClick={() => handleDelete(book.id)} className=" max-w-[150px] text-[18px] bg-[#6B7D7D] hover:bg-[#8EAF9D] text-white font-sriracha py-2 px-5 ml-3 rounded-[8px] hover:scale-105">Delete</button>
      </div>
    </div>
  );
}
