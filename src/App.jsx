import { useState } from 'react'
import { PlatilloForm } from './components/PlatilloForm'
import { PlatilloList } from './components/PlatilloList'

function App() {
  const [originalDishes, setOriginalDishes] = useState([]); // Copia de platillos original
  const [dishes, setDishes] = useState([]) //Array de platillos
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [form, setForm] = useState({ //Objeto para el formulario
    id: 0,
    imagen: '',
    nombre: '',
    descripcion: '',
    acompaniantes: [],
    picor: 'Sin picante',
    personas: '1'
  })
  const [filter, setFilter] = useState('');

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      if (checked) {
        setForm({
          ...form,
          acompaniantes: [...form.acompaniantes, value]
        });
      } else {
        setForm({
          ...form,
          acompaniantes: form.acompaniantes.filter(a => a !== value)
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
      const updatedDishes = dishes.map(dish => {
        if (dish.id === form.id) {
          return { ...form };
        } else {
          return dish;
        }
      });
      setDishes(updatedDishes);

      const updatedOriginalDishes = originalDishes.map(dish => {
        if (dish.id === form.id) {
          return { ...form };
        } else {
          return dish;
        }
      });
      setOriginalDishes(updatedOriginalDishes);
    } else {
      const newId = dishes.reduce((maxId, dish) => Math.max(dish.id, maxId), 0) + 1;
      const newDish = { ...form, id: newId };

      setDishes([...dishes, newDish]);
      setOriginalDishes([...originalDishes, newDish]);
    }
    setIsFormVisible(false);
    resetForm();
  }

  const handleUpdate = (id) => {
    const dishToUpdate = dishes.find(dish => dish.id === id);
    if (dishToUpdate) {
      setIsFormVisible(true);
      setForm(dishToUpdate);
    }
  };

  const handleDelete = (id) => {
    const newDishes = dishes.filter(dish => dish.id !== id);
    const newOriginalDishes = originalDishes.filter(dish => dish.id !== id);

    setDishes(newDishes);
    setOriginalDishes(newOriginalDishes);
  };

  const resetForm = () => {
    setForm({
      id: 0,
      imagen: '',
      nombre: '',
      descripcion: '',
      acompaniantes: [],
      picor: 'Sin picante',
      personas: '1'
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

  const filterDishes = (dishes, filterText) => {
    if (!filterText) {
      return dishes;
    }

    const lowerCaseFilter = filterText.toLowerCase();
    return dishes.filter(dish => {
      return Object.values(dish).some(value =>
        value.toString().toLowerCase().includes(lowerCaseFilter)
      );
    });
  };

  const filteredDishes = filterDishes(dishes, filter);

  const sortDishes = (sortBy) => {
    let sortedDishes;
    switch (sortBy) {
      case 'nombre':
        sortedDishes = [...dishes].sort((a, b) => a.nombre.localeCompare(b.nombre));
        break;
      case 'personas':
        sortedDishes = [...dishes].sort((a, b) => a.personas - b.personas);
        break;
      default:
        setDishes([...originalDishes]);
        return;
    }
    setDishes(sortedDishes);
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center my-4">Platillos</h1>
      {isFormVisible && (
        <div className="my-4">
          <PlatilloForm
            form={form}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            cleanForm={resetForm}
            cancelForm={cancelForm}
          />
        </div>
      )}

      <div className='flex flex-row justify-evenly items-center'>
        <div className="my-4">
          <input
            type="text"
            placeholder="Buscar platillo"
            value={filter}
            onChange={handleFilterChange}
            className="border border-gray-300 rounded px-4 py-2"
          />
          <select onChange={(e) => sortDishes(e.target.value)}>
            <option value="">Ordenar por...</option>
            <option value="nombre">Nombre</option>
            <option value="personas">Personas</option>
        </select>
        </div>

        <a
          onClick={() => setIsFormVisible(true)}
          className={`my-4 ${isFormVisible ? 'hidden' : 'block'} py-2 px-4 rounded hover:scale-105 cursor-pointer`}
        >
          <svg width="36" height="36" viewBox="0 0 24 24"><path fill="#65a30d" d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4zm1 5q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22" /></svg>
        </a>
      </div>


      <div className="my-4">
        {
          filteredDishes.length === 0 && (
            <div className="text-center text-gray-500">
              No hay platillos
            </div>
          )
        }
        <PlatilloList
          dishes={filteredDishes}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      </div>
    </>

  );
}

export default App
