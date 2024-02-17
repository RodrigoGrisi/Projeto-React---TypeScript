interface IHeaderProps{
  nome: string;
  description?: string
}

export function Header({nome, description}: IHeaderProps){
  return(
    <header>
      <h1>{nome}</h1>
      <p>{description}</p>
      <hr/>
    </header>
  )
}