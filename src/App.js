import React from 'react';
import './App.css';
import Title from './Title';
import InputField from './InputField';
import Checkbox from './Checkbox';
import Button from './Button';

function App() {
  return (
    <div className="App">
      <Title title="Nuevo Usuario" />
      <InputField label="Usuario" />
      <InputField label="Correo" type="email" />
      <InputField label="Contraseña" type="password" />
      <Checkbox label="Aceptar términos y condiciones" />
      <Button label="Cancelar" />
      <Button label="Aceptar" />
    </div>
  );
}

export default App;
