import React, {useState} from 'react'
import './form.css'

const Form = () => {
  const [input, setInput] = useState({
    name:"",
    image:"",
    hp:"",
    attack:"",
    defense:"",
    speed:"", // opcional
    height:"", // opcional
    weight:"", // opcional
    types:"",
  })

  const [errors, setErrors] = useState({
    name:"Campo obligatorio (25 caracteres máximo)",
    image:"Campo obligatorio (debe ser una URL)",
    hp:"Campo obligatorio (Debe ser un número entero)",
    attack:"Campo obligatorio (Debe ser un número entero)",
    defense:"Campo obligatorio (Debe ser un número entero)",
    speed:"", // debe ser numero entero
    height:"", // debe ser numero entero
    weight:"", // debe ser numero entero
    types:"El pokemon debe tener al menos un tipo"
  })

  const validate = (input, name) => {
    if(name === "name"){
      if(input.name!=="") setErrors({...errors, name:""})
      else setErrors({...errors, name:"Campo obligatorio (25 caracteres máximo)"})

      if(input.name.length > 25) setErrors({...errors, name:"el nombre no puede tener más de 25 caracteres"})
      // else setErrors({...errors, name:""}) ----> si seteo el error vacio ignora la condición de arriba

    }
    if(name === "image"){
      if(input.image!=="") setErrors({...errors, image:""})
      else setErrors({...errors, image:"Este campo no puede estar vacío"})
    }
    if(name === "hp"){

    }
    if(name === "attack"){

    }
    if(name === "defense"){

    }
    if(name === "speed"){
      if(parseInt(input.speed)==NaN) setErrors({...errors, speed:"El valor debe ser un número entero"})
    }
    if(name === "height"){
      if(parseInt(input.height)==NaN) setErrors({...errors, height:"El valor debe ser un número entero"})
    }
    if(name === "weight"){
      if(isNaN(parseInt(input.weight))) setErrors({...errors, weight:"El valor debe ser un número entero"})
      else setErrors({...errors, weight:""})

      if(input.weight=="") setErrors({...errors, weight:""})
    }
    if(name === "types"){

    }
  }

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
    validate({
      ...input,
      [e.target.name]: e.target.value
    }, e.target.name)

  }
  return (
    <div className='form-cont'>
      <form>
        <div className='form-input-cont'>
          <label>Nombre:</label>
          <input name="name" onChange={handleChange} type="text" />
          <span>{errors.name}</span>
        </div>

        <div className='form-input-cont'>
          <label>Imagen:</label>
          <input name="image" onChange={handleChange} type="text" />
          <span>{errors.image}</span>
        </div>

        <div className='form-input-cont'>
          <label>Vida:</label>
          <input name="hp" onChange={handleChange} type="text" />
          <span>{errors.hp}</span>
        </div>

        <div className='form-input-cont'>
          <label>Ataque:</label>
          <input name="attack" onChange={handleChange} type="text" />
          <span>{errors.attack}</span>
        </div>

        <div className='form-input-cont'>
          <label>Defensa:</label>
          <input name="defense" onChange={handleChange} type="text" />
          <span>{errors.defense}</span>
          </div>

        <div className='form-input-cont'> 
          <label>Velocidad:</label>
          <input name="speed" onChange={handleChange} type="text" />
          <span>{errors.speed}</span>
        </div>

        <div className='form-input-cont'>
          <label>Altura:</label>
          <input name="height" onChange={handleChange} type="text" />
          <span>{errors.height}</span>
        </div>

        <div className='form-input-cont'>
          <label>Peso:</label>
          <input name="weight" onChange={handleChange} type="text" />
          <span>{errors.weight}</span>
        </div>

        <div className='form-input-cont'>
          <label>Tipos:</label>
          <input name="types" onChange={handleChange} type="text" />
          <span>{errors.types}</span>
        </div>

        <div className='form-button'>
          <input type="submit"/>
          </div>
      </form>
    </div>
  )
}

export default Form