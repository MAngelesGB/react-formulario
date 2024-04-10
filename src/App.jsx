import { useState } from 'react'
import { PlatilloForm } from './components/PlatilloForm'
import { PlatilloList } from './components/PlatilloList'

function App() {
  const [originalBooks, setOriginalBooks] = useState([]); // Copia de platillos original
  const [books, setBooks] = useState([]) //Array de platillos
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [form, setForm] = useState({ //Objeto para el formulario
    id: 0,
    image: '',
    title: '',
    description: '',
    genre: [],
    status: 'To Read',
    score: '1'
  })
  const [filter, setFilter] = useState('');

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      if (checked) {
        setForm({
          ...form,
          genre: [...form.genre, value]
        });
      } else {
        setForm({
          ...form,
          genre: form.genre.filter(a => a !== value)
        });
      }
    }
    else {
      setForm({
        ...form,
        [name]: value
      });
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.id) {
      const updatedBooks = books.map(book => {
        if (book.id === form.id) {
          return { ...form };
        } else {
          return book;
        }
      });
      setBooks(updatedBooks);

      const updatedOriginalBooks = originalBooks.map(book => {
        if (book.id === form.id) {
          return { ...form };
        } else {
          return book;
        }
      });
      setOriginalBooks(updatedOriginalBooks);
    } else {
      const newId = books.reduce((maxId, book) => Math.max(book.id, maxId), 0) + 1;
      const newBook = { ...form, id: newId };

      setBooks([...books, newBook]);
      setOriginalBooks([...originalBooks, newBook]);
    }
    setIsFormVisible(false);
    resetForm();
  }

  const handleUpdate = (id) => {
    const bookToUpdate = books.find(book => book.id === id);
    if (bookToUpdate) {
      setIsFormVisible(true);
      setForm(bookToUpdate);
    }
  };

  const handleDelete = (id) => {
    const newBooks = books.filter(book => book.id !== id);
    const newOriginalBooks = originalBooks.filter(book => book.id !== id);

    setBooks(newBooks);
    setOriginalBooks(newOriginalBooks);
  };

  const resetForm = () => {
    setForm({
      id: 0,
      image: '',
      title: '',
      description: '',
      genre: [],
      status: 'To Read',
      score: '1'
    })
  }
  const cancelForm = () => {
    resetForm();
    setIsFormVisible(false);
  };

  const handleFilterChange = (e) => {
    const newFilter = e.target.value.toLowerCase();
    setFilter(newFilter);
  };

  const filterBooks = (books, filterText) => {
    if (!filterText) {
      return books;
    }

    const lowerCaseFilter = filterText.toLowerCase();
    return books.filter(book => {
      return Object.entries(book).some(([key, value]) => {
        if (key === 'id') {
          return false;
        }
        return value.toString().toLowerCase().includes(lowerCaseFilter);
      });
    });
  };

  const filteredBooks = filterBooks(books, filter);

  const sortBooks = (sortBy) => {
    let sortedBooks;
    switch (sortBy) {
      case 'title':
        sortedBooks = [...books].sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'score':
        sortedBooks = [...books].sort((a, b) => a.score - b.score);
        break;
      default:
        setBooks([...originalBooks]);
        return;
    }
    setBooks(sortedBooks);
  };

  return (
    <>
    
    <div className="bg-[#B9CDDA] h-[110px]">
      <h1 className="font-sriracha text-[#6B7D7D] text-[48px] text-center pt-4">My personal library</h1>
    </div>
      {isFormVisible && (
        <div className="my-4">
          <h2 className="text-[#6B7D7D] text-[30px] font-sriracha mb-4 ml-[200px]">Data book</h2>
          <PlatilloForm
            form={form}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            cleanForm={resetForm}
            cancelForm={cancelForm}
          />
        </div>
      )}

      <div className='flex flex-col items-center mt-6'>
        <div className="my-4 font-tauri ">
          <input
            type="text"
            placeholder="Search..."
            value={filter}
            onChange={handleFilterChange}
            className="border border-gray-300 px-4 py-2 w-[1090px] rounded-[15px] "
          />
          <select  className=" bg-[#8EAF9D] text-[#FFFFFF] text-center ml-3 rounded-[10px] hover:bg-[#FFFFFF] hover:text-[#6B7D7D] w-[100px] h-[40px]"onChange={(e) => sortBooks(e.target.value)}>
            <option value=""> Order by </option>
            <option value="title">Title</option>
            <option value="score">Score</option>
          </select>
        </div>
        <div className="flex flex-col items-end px-[50px]">
          <a
            onClick={() => setIsFormVisible(true)}
            className={` ${isFormVisible ? 'hidden' : 'block'} rounded-full hover:scale-105 cursor-pointer w-[60px]`}
          >
            <svg width="60" height="60" viewBox="0 0 24 24"><path fill="#8EAF9D" d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4zm1 5q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22" /></svg>
          </a>
        </div>
      </div>
      
      <div className="my-4">
        {
          filteredBooks.length === 0 && (
            <div className="text-center text-[30px] font-tauri text-[#6B7D7D]">
              No books found
            </div>
          )
        }
        <PlatilloList
          books={filteredBooks}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      </div>
      
    </>

  );
}

export default App
