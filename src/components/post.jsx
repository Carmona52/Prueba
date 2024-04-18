import classes from "./styles/Post.module.css";
function post(props) {
props.author;
props.body;
    return (
        <main>
            <div className={classes.post}>
                <p className={classes.author}>{props.author}</p>
                <p>{props.body}</p>
            </div>
        </main>
    );
}

export default post;