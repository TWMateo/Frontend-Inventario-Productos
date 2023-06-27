import { useState, useEffect } from 'react'
import Axios from 'axios'

const useAxios = async () => {
    const [dato, setDato] = useState(null)
    const options = {
        method: 'GET',// Método HTTP, como GET, POST, PUT, DELETE, etc.
        headers: {
            'Header': `Authorization:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ik1hdGVpdG8iLCJpYXQiOjE2ODc3MTIzNTMsImV4cCI6MTY4Nzc5ODc1M30.2Hz31DllO4e4kVQiH2GUyw30tfKM6c3eQDSi0Vkg4Ag` // Incluir el token en el encabezado de autorización
          }
    };
    const jwToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ik1hdGVpdG8iLCJpYXQiOjE2ODc3MTIzNTMsImV4cCI6MTY4Nzc5ODc1M30.2Hz31DllO4e4kVQiH2GUyw30tfKM6c3eQDSi0Vkg4Ag';
    Axios.defaults.headers.common["Authorization"] = `${jwToken}`;
    Axios.defaults.headers.common["Content-Type"]="application/json"
    console.log('Peticion')
    const peticion = await Axios.get('http://localhost:3000/productos').catch(function (error){console.log(error)})
    console.log('Entro')
    console.log(peticion)
    return peticion
}

export default useAxios