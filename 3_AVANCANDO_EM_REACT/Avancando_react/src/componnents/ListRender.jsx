import { useState } from "react"

const ListRender = () => {
    const [list] = useState(['Samuel', 'Levi', 'Wallace'])

    const [users, setUsers] = useState(
        [
            {id: 1, name: 'Samuel', age: 28},
            {id: 2, name: 'Levi', age: 23},
            {id: 3, name: 'Wallace', age: 27},

        ]
    )
    // Função criada para deletar um usuário aleatório da lista acima
    const deleteRandomUser = () => {
        // criou um numero randomico entre 0 e 3
        const randomNumber = Math.floor(Math.random() * 4)
        // usa o setUsers onde passa o previous State (normalmente)
        // coloca prev + nome do conteudo da lista
        // filtra por usuário (percorre todos os usuários) e o numero
        // randomico gerado tem q ser diferente do id
        setUsers((prevUsers) => 
            prevUsers.filter((user) => randomNumber !== user.id)
        )
    }

  return <div>

         {/* Render sem key */}
        <ul>
        {list.map((item) => (
                <li>{item}</li>  
        ))}
         </ul>
        {/* Render com key */}
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    {user.name} - {user.age} anos
                </li>
            ))}
        </ul>
        <button onClick={deleteRandomUser}>Delete random user</button>
    </div>

}

export default ListRender