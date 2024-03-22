import { useState } from 'react'
import './App.css'
import {PlatilloForm} from './components/PlatilloForm'
import {PlatilloList}  from './components/PlatilloList'
function App() {
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


  const handleInputChange = (e) =>{
    const {name, value, type, checked} = e.target;
    if (type === "checkbox"){
      if(checked){
        setForm({
          ...form,
          acompaniantes: [...form.acompaniantes, value]
        }); 
      }else{
        setForm({
          ...form,
          acompaniantes: form.acompaniantes.filter(a => a !== value)
        });
      }
    }
    else{
      setForm({
        ...form,
        [name]: value
      });
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (form.id) {
      // Modo de edición: actualiza el platillo existente
      const updatedDishes = dishes.map(dish => {
        if (dish.id === form.id) {
          return { ...form }; // o simplemente form si ya contiene todos los datos actualizados
        } else {
          return dish;
        }
      });
  
      setDishes(updatedDishes);
    } else {
      const newId = dishes.reduce((maxId, dish) => Math.max(dish.id, maxId), 0) + 1;  
      const newDish = { ...form, id: newId };
    
      setDishes([...dishes, newDish]);
    }
  
    resetForm();
  }

  const handleUpdate = (index) => {
    setForm(dishes[index]); 
  }

  const handleDelete = (index) => {
    const newDishes = [...dishes]
    newDishes.splice(index, 1)
    setDishes(newDishes)
  }

  const resetForm = () =>{
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
    setIsFormVisible(false); // Oculta el formulario
  };

  const [filteredDishes, setFilteredDishes] = useState(dishes);

  const filterDishes = (filter) => {
    const lowerCaseFilter = filter.toLowerCase();
    const newFilteredDishes = dishes.filter(dish => {
      return Object.values(dish).some(value =>
        value.toString().toLowerCase().includes(lowerCaseFilter)
      );
    });
    setFilteredDishes(newFilteredDishes);
  }

  return (
    <>
      {isFormVisible && (
      <PlatilloForm form = {form} handleInputChange={handleInputChange} handleSubmit={handleSubmit}
        cleanForm={resetForm} cancelForm={cancelForm} 
      />
    )}
    <input type="text" placeholder="Buscar platillo" onChange={(e) => filterDishes(e.target.value)}/>
    <button onClick={() => setIsFormVisible(true)} style={{display: isFormVisible? "none":"block"}}>Agregar</button >
    <PlatilloList dishes = {filteredDishes} handleDelete={handleDelete} handleUpdate={handleUpdate}/>
    </>
  )
}

export default App
