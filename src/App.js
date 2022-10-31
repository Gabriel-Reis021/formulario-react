import './App.css';
import React from 'react';
import {useState, useEffect} from 'react';

function App(){
  const [countries, setCountries] = useState([])
  const [cities, setCities] = useState([])
  
  useEffect( () => {
  getCountry()
    getCity()
  }, [])
  
  

  const [formValues, setFormValues] = useState({});

  const handleInputChange = (e) =>{
  
    const {name, value, } = e.target;
    console.log('*** handlnputChange', name, value)
  }

  const handleSubmit = (e)=>{
  e.preventDefault();

  const formData = new FormData(e.target)
  const data = Object.fromEntries(formData)

  console.log('***handleSubmit', data)

  };

  const getCity = () => {
    fetch('https://amazon-api.sellead.com/city').then(res => res.json()).then(data => setCities(data))
  }
  const getCountry = () => {
  
  fetch('https://amazon-api.sellead.com/country')
        .then(response => response.json())
        .then(data => setCountries(data));
  }

  
  return (
   <form onSubmit={handleSubmit}>
    
    <input type="text" name="nome" id="" placeholder='Digite seu nome...' onChange={handleInputChange} required/>
    <input type="email" name="email" id="" placeholder='Digite seu email...' onChange={handleInputChange} required/>
    <input type="tel" name="celular" id="" placeholder='Digite seu celular..' onChange={handleInputChange} required/>
    <input type="text" name="cpf" id="" placeholder='Digite seu cpf...' onChange={handleInputChange} required/>
    <select id='country' onChange={handleInputChange}>
      {countries.map(el => {
      return  <option value={el.name} name={el.name}>{el.name_ptbr}</option>
    })}
    </select>
       <select id='cities'>
      {cities.map(el => {
      return  <option value={el.name} name={el.name}>{el.name_ptbr}</option>
    })}
    </select>
      <button type="submit">Enviar</button>
   </form>
  );
}

export default App;
