import {useEffect, useState} from "react";

import {Comments} from "./components/Users/Comments";
import {ComentService, userService} from "./service";
import {UserForm, Users, CommentForm} from "./components";


function App() {

  const [users, setUsers] = useState([]);

  useEffect( () => {
    userService.getAll().then(({data}) => setUsers([...data]))

  },[])


  const [coments, setComents] = useState([]);

  useEffect( () => {
    ComentService.getAll().then(({data}) => setComents([...data]))

  },[])
  return (
    <div>
    <UserForm setUsers={setUsers}/>
      <hr/>
      <Users users={users}/>
      <hr/>
      <CommentForm setComents={setComents}/>
        <Comments coments={coments}/>
      <hr/>
      <hr/>
    </div>
  );
}

export default App;
