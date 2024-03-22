import {Platillo} from './Platillo'

export function PlatilloList ({dishes, handleDelete, handleUpdate}){
  return(
    <>
      <div>
      {dishes.map((dish, index) => (
            <Platillo key = {dish.id} dish={dish} index={index} handleDelete={handleDelete} handleUpdate={handleUpdate}/>
        ))}
      </div>
    </>
  )
}

