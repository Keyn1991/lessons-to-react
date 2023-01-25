import {Routes, Route, Link} from "react-router-dom";
import './App.css';

import AlbumsPage from "./pages/Albums/AlbumsPage";
import ComentsPage from "./pages/Coments/ComentsPage";
import {HomePage} from "./layouts/HomePage";
import TodosPage from "./pages/Todos/TodosPage";
import PostsPage from "./pages/Posts/PostsPage";
import PostPage from "./pages/Post/PostPage";
function App() {
  return (

    <div className="App">
<div className={'home-page'}>

        <button className={'home-btn'}><Link to={'/'}>Home</Link></button>
        <button className={'todos-btn'}><Link to={'todos'}>Todos</Link></button>
        <button className={'albums-btn'}><Link to={'albums'}>Albums</Link></button>
        <button className={'comments-btn'}><Link to={'comments'}>Comments</Link></button>
</div>





        <div className={'cont'}>
<Routes>

    <Route path={'/'} element={<HomePage/>}/>
    <Route path={'todos'} element={<TodosPage/>}/>
    <Route path={'albums'} element={<AlbumsPage/>}/>



    <Route path={'comments'} element={<ComentsPage/>}>
        <Route path={'posts'} element={<PostsPage/>}>
            <Route path={':id'} element={PostPage}/>
        </Route>
    </Route>

</Routes>
    </div>
    </div>

  );
}

export default App;
