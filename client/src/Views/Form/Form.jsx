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
    types:[],
  })

  const [errors, setErrors] = useState({
    name:"Campo obligatorio (25 caracteres máximo)",
    image:"Campo obligatorio (Debe ser una URL)",
    hp:"Campo obligatorio (Debe ser un número entero)",
    attack:"Campo obligatorio (Debe ser un número entero)",
    defense:"Campo obligatorio (Debe ser un número entero)",
    speed:"", // debe ser numero entero
    height:"", // debe ser numero entero
    weight:"", // debe ser numero entero
    types:"Campo obligatorio (El pokemon debe tener al menos un tipo)"
  })

  const validate = (input, name) => {
    if(name === "name"){
      if(input.name!=="") setErrors({...errors, name:""})
      else setErrors({...errors, name:"Campo obligatorio (25 caracteres máximo)"})

      if(input.name.length > 25) setErrors({...errors, name:"el nombre no puede tener más de 25 caracteres"})
      // else setErrors({...errors, name:""}) ----> si seteo el error vacio ignora la condición de arriba

    }
    if(name === "image"){
      let regex = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|png)/
      if(regex.test(input.image)) setErrors({...errors, image:""})
      else setErrors({...errors, image:"La imagen debe ser una URL con extensión jpg o png"})

      if(input.image=="") setErrors({...errors, image:"Campo obligatorio (Debe ser una URL con extensión jpg o png)"})
    }
    if(name === "hp"){
      let regex = (/^[0-9]+$/)
      if(regex.test(input.hp)) setErrors({...errors, hp:""})
      else setErrors({...errors, hp:"El valor debe ser un número entero"})

     if(input.hp > 255) setErrors({...errors, hp:"El valor de una caracteristica no puede ser mayor a 255"})

     if(input.hp=="") setErrors({...errors, hp:"Campo obligatorio (Debe ser un número entero)"})
    }
    if(name === "attack"){
      let regex = (/^[0-9]+$/)
      if(regex.test(input.attack)) setErrors({...errors, attack:""})
      else setErrors({...errors, attack:"El valor debe ser un número entero"})

     if(input.attack > 255) setErrors({...errors, attack:"El valor de una caracteristica no puede ser mayor a 255"})

     if(input.attack=="") setErrors({...errors, attack:"Campo obligatorio (Debe ser un número entero)"})
    }
    if(name === "defense"){
      let regex = (/^[0-9]+$/)
      if(regex.test(input.defense)) setErrors({...errors, defense:""})
      else setErrors({...errors, defense:"El valor debe ser un número entero"})

     if(input.defense > 255) setErrors({...errors, defense:"El valor de una caracteristica no puede ser mayor a 255"})

     if(input.defense=="") setErrors({...errors, defense:"Campo obligatorio (Debe ser un número entero)"})
    }
    if(name === "speed"){
      let regex = (/^[0-9]+$/)
      if(regex.test(input.speed)) setErrors({...errors, speed:""})
      else setErrors({...errors, speed:"El valor debe ser un número entero"})

     if(input.speed > 255) setErrors({...errors, speed:"El valor de una caracteristica no puede ser mayor a 255"})

     if(input.speed=="") setErrors({...errors, speed:""})
    }
    if(name === "height"){
      let regex = (/^[0-9]+$/)
      if(regex.test(input.height)) setErrors({...errors, height:""})
      else setErrors({...errors, height:"El valor debe ser un número entero"})

      if(input.height > 255) setErrors({...errors, height:"El valor de una caracteristica no puede ser mayor a 255"})

      if(input.height=="") setErrors({...errors, height:""})
    }
    if(name === "weight"){
      let regex = (/^[0-9]+$/)
      if(regex.test(input.weight)) setErrors({...errors, weight:""})
      else setErrors({...errors, weight:"El valor debe ser un número entero"})

      if(input.weight > 255) setErrors({...errors, weight:"El valor de una caracteristica no puede ser mayor a 255"})

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