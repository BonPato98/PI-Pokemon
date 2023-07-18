import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { postPokemon } from '../../Redux/Actions'
import './form.css'

const Form = () => {

  const dispatch = useDispatch()

  const [input, setInput] = useState({
    name:"",
    image:"",
    hp:"",
    attack:"",
    defense:"",
    speed: null, // opcional
    height: null, // opcional
    weight: null, // opcional
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

      if (input.types.length === 0) setErrors({...errors, types:"El pokemon debe tener al menos un tipo"})

      if (input.types.length > 2) setErrors({...errors, types:"El pokemon puede tener un máximo de 2 tipos"})
      else setErrors({...errors, types:""})
    }
}

  const disable = () => {
    let disabled = true;
    for(let error in errors){
      if(errors[error]==="") disabled = false;
      else {
        disabled=true;
        break;
      }
    }
    return disabled;
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

  const handleSelect = (e) => {
    const options = e.target.options
    const addedTypes = []
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        addedTypes.push(options[i].value)
      } else {
        addedTypes.filter(type => !type)
      }
    }
    setInput({
      ...input,
      types: addedTypes
    })
    validate({
      ...input,
      types: addedTypes
    }, "types")
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postPokemon(input))
  }

  return (
    <div className='form-main-cont'>
    <div className='form-cont'>
      <form onSubmit={handleSubmit} className='form'>
        <div className='form-input-cont'>
          <div className='form-input-title-cont'><label>Nombre:</label></div>
          <input name="name" onChange={handleChange} type="text" />
          <span className='form-warning'>{errors.name}</span>
        </div>

        <div className='form-input-cont'>
        <div className='form-input-title-cont'><label>Imagen:</label></div>
          <input name="image" onChange={handleChange} type="text" />
          <span className='form-warning'>{errors.image}</span>
        </div>

        <div className='form-input-cont'>
        <div className='form-input-title-cont'><label>Vida:</label></div>
          <input name="hp" onChange={handleChange} type="text" />
          <span className='form-warning'>{errors.hp}</span>
        </div>

        <div className='form-input-cont'>
        <div className='form-input-title-cont'><label>Ataque:</label></div>
          <input name="attack" onChange={handleChange} type="text" />
          <span className='form-warning'>{errors.attack}</span>
        </div>

        <div className='form-input-cont'>
        <div className='form-input-title-cont'><label>Defensa:</label></div>
          <input name="defense" onChange={handleChange} type="text" />
          <span className='form-warning'>{errors.defense}</span>
          </div>

        <div className='form-input-cont'> 
        <div className='form-input-title-cont'><label>Velocidad:</label></div>
          <input name="speed" onChange={handleChange} type="text" />
          <span className='form-warning'>{errors.speed}</span>
        </div>

        <div className='form-input-cont'>
        <div className='form-input-title-cont'><label>Altura:</label></div>
          <input name="height" onChange={handleChange} type="text" />
          <span className='form-warning'>{errors.height}</span>
        </div>

        <div className='form-input-cont'>
        <div className='form-input-title-cont'><label>Peso:</label></div>
          <input name="weight" onChange={handleChange} type="text" />
        </div>
        <div><span className='form-warning'>{errors.weight}</span></div>

        <div className='form-input-cont'>
        <div className='form-input-title-cont'><label>Tipos:</label></div>
          <select multiple={true} name="types" onChange={handleSelect}>
                <option value="normal">Normal</option>
                <option value="fighting">Lucha</option>
                <option value="flying">Volador</option>
                <option value="poison">Veneno</option>
                <option value="ground">Tierra</option>
                <option value="rock">Roca</option>
                <option value="bug">Bicho</option>
                <option value="ghost">Fantasma</option>
                <option value="steel">Acero</option>
                <option value="fire">Fuego</option>
                <option value="water">Agua</option>
                <option value="grass">Planta</option>
                <option value="electric">Eléctrico</option>
                <option value="psychic">Psíquico</option>
                <option value="ice">Hielo</option>
                <option value="dragon">Dragón</option>
                <option value="dark">Siniestro</option>
                <option value="fairy">Hada</option>
                <option value="unknown">???</option>
                <option value="shadow">Sombra</option>
          </select>
          <span className='form-warning'>{errors.types}</span>
        </div>

        <div className='form-button'>
          <input disabled={disable()} type="submit"/>
          </div>
      </form>
    </div>
    </div>
  )
}

export default Form