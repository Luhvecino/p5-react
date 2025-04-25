import React, { useState } from 'react';
import Sketch from '../sketch';
//import './App.css';

const Usuario = () => {
  const [formData, setFormData] = useState({
    nome: '',
    nascimento: '',
    cep: '',
    endereco: '',
    senha: '',
    repetirSenha: '',
  });
  const [movS, setMovS] = useState(false); 
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.senha !== formData.repetirSenha) {
      alert('As senhas não coincidem!');
      return;
    }

    // Aqui você pode enviar os dados para uma API, salvar no estado global, etc.
    console.log('Dados do formulário:', formData);
    alert('Formulário enviado com sucesso!');
  };

  return (        
    <form onSubmit={handleSubmit} className='head'>
      <div className='olhos'>
        
      <Sketch movS={movS} />
      <Sketch movS={movS} />
      </div>

      <div>
        <h1> Interaja com o formulário !!!</h1>
      </div>

      <div className='formulario'>
      <div>
        <label>Nome:</label>
        <input
          className="full-width"
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          onClick={() => setMovS(true)}  
          onBlur={() => setMovS(false)}  
          />
      </div>
      <div>
        <label>Data de Nascimento:</label>
        <input
          type="date"
          name="nascimento"
          value={formData.nascimento}
          onChange={handleChange}
          className="full-width"
          onClick={() => setMovS(true)}  
          onBlur={() => setMovS(false)}  
          />
      </div>
      <div>
        <label>CEP:</label>
        <input
          type="text"
          name="cep"
          value={formData.cep}
          onChange={handleChange}
          className="full-width"
          onClick={() => setMovS(true)}  
          onBlur={() => setMovS(false)}  
          />
      </div>
      <div>
        <label>Endereço:</label>
        <input
          type="text"
          name="endereco"
          value={formData.endereco}
          onChange={handleChange}
          className="full-width"
          onClick={() => setMovS(true)}  
          onBlur={() => setMovS(false)}  
          />
      </div>
          
      <div>
        <label>Senha:</label>
        <input
          type="password"
          name="senha"
          value={formData.senha}
          onChange={handleChange}
          className="full-width"
          onClick={() => setMovS(true)}  
          onBlur={() => setMovS(false)}  
          />
      </div>
      <div>
        <label>Repetir Senha:</label>
        <input
          type="password"
          name="repetirSenha"
          value={formData.repetirSenha}
          onChange={handleChange}
          className="full-width"   
          onClick={() => setMovS(true)}  
          onBlur={() => setMovS(false)}                       
          />
      </div>      
      <button style={{marginTop: '20px'}} type="submit">Enviar</button>      
      </div>
    </form>
    
  );
  
};

export default Usuario;