
interface NomeProps{
  aluno: string | number,
  idade: number
}

export function Nome({aluno, idade}: NomeProps){

  return(
  <div>
      <h1>Bem vindo {aluno},</h1>
      <h3>Idade: {idade}</h3>
    </div>
  )
}