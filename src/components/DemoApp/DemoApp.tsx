import React , { useState} from 'react';
import { Users } from '../../Interfaces/Interface';
import { PropsApp} from '../../Interfaces/Interface';


const DemoApp = ( { textarea , number = 0} : PropsApp) => {
    const [ user, setUser] = useState < Users | null>(null);

    const fetchUsers = () =>{
        setUser( {
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
          })
    }



  return (
    <div>
        <div> 
            <h2> {textarea}</h2>
         { number && <p>{number}</p>}
         <button onClick={fetchUsers}> Fetch Users</button>
         { user && `Rendering the ${ user.id }`}    
         


        </div>
    </div>
  )
}

export default DemoApp