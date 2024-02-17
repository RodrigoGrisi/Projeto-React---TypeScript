import './App.css';
import { Header } from './components/Header';
import { useState } from 'react';

interface UserProps{
  nome: string;
  idade?: number;
  cargo: string;
  status: boolean;
}

function App() {

  const [nome, setNome] = useState<string >("Convidado");
  const [user, setUser] = useState<UserProps>();
  
  function mudarNome(){
    setNome("Lucas Silva")
    setUser({
      nome: "Ana Caroline", 
      cargo: "UI | UX", 
      idade: 25, 
      status: true})
  }

  return (
  <main>

    <Header 
    description="Get ready for a development" 
    nome={"React with Vite"}/>

    <h1>Bem vindo: {nome}</h1>

    <button onClick={mudarNome}>Alterar nome</button>
    <hr/>

    { user && (
      <div>
        <h1>{user.nome}</h1>
        <h1>{user.cargo}</h1>
        <h1>{user.idade}</h1>
        <h1>{user.status ? "Ativa": "Ferias"}</h1>
      </div>
    )}

  </main>
  )
}

export default App;
