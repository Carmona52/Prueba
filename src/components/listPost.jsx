import Post from "./post.jsx";
import classes from "./styles/PostList.module.css"
import NewPost from "./newPost.jsx";
import {useState} from "react";

function list() {
    const [text, setText] = useState("Este comentario va a Cambiar");
    const [author, setAuthor] = useState("Jesus Carmona");

    const textos = [{
        author: "Johan", body: "Prueba"
    }, {
        author: "Lizbeth", body: "Prueba 2"
    }, {
        author: "Denisse", body: "Prueba 3"
    }];


    function bodyChangeHandler(event) {
        setText(event.target.value)
    }

    function authorChangeHandler(event) {
        setAuthor((event.target.value))
    }

    return (<>
            <NewPost onAuthorChange={authorChangeHandler} onBodyChange={bodyChangeHandler}/>

            <ul className={classes.posts}>
                {textos.map((item, index) => (<li key={index} className="flex justify-between gap-x-6 py-5">
                    <Post author={item.author} body={item.body}/>
                </li>))}


                <li className="flex justify-between gap-x-6 py-5">
                    <Post author={author} body={text}/>
                </li>


            </ul>


        </>);
}

export default list;