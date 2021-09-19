import React, { useState }from "react";
import "./Contacto.css";


const INITIAL_STATE = {
    name: '',
    address: '',
    email: '',
    textarea: '',
};

const Contacto = (props) => {
    const [state, setState] = useState(INITIAL_STATE);

    const submitForm = (ev) => {
        ev.preventDefault();
    };

    const handleInput = (ev) => {
        const {name, value} = ev.target;
        setState({...state, [name]: value});
    };

    return (
        <form onSubmit={submitForm}>
            <fieldset>
                <label>
                    <p>Nombre</p>
                    <input class="input" type="text" name="name" value={state.name} onChange={handleInput} placeholder="Su nombre" required />
                </label>

                <label>
                    <p class="text">Apellidos</p>
                    <input class="input" type="text" name="address" value={state.address} onChange={handleInput} placeholder="Sus apellidos" required />
                </label>

                <label>
                    <p>Email</p>
                    <input class="input" type="email" name="email" value={state.email} onChange={handleInput} placeholder="Su email" required/>
                </label>

                <label>
                    <p>Comentarios</p>
                    <textarea name="comentarios" rows="10" cols="30" placeholder="Inserte su comentario" required/>
                </label>

                <div>
                    <button type="submit">Enviar</button>
                </div>
            </fieldset>
        </form>
    )
};


export default Contacto;