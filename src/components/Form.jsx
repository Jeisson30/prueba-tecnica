import React, {useState} from "react";

const Form = () => {

    const [formdata, setFormData] = useState({
        user: '',
        password: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formdata, [name]:value})
    }

    const  handleSubmit = (e) => {
        e.preventDefault()
        console.log('datos enviados: ', formdata);
    }

    return (

        <form onSubmit={handleSubmit}>
            <label htmlFor="user">Usuario: </label>
            <input 
                type="text"
                id="username"
                name="username"
                value={formdata.username}
                onChange={handleChange}
                />
            <label htmlFor="password">Contraseña: </label>
            <input 
                type="password"
                id="password"
                name="pasword"
                value={formdata.password}
                onChange={handleChange}
                />

            <button type="submit"> Enviar </button> 
        </form>

    )
}
export default Form