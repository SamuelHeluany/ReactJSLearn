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
    </div>

}

export default ListRender