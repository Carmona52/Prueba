import classes from "./styles/NewPost.module.css";
function newPost(props) {

    return (
        <>
            <form className={classes.form}>
                <p>
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" required onChange={props.onAuthorChange}/>
                </p>
                <p>
                    <label htmlFor="body">Text</label>
                    <textarea id="body" required rows={3} onChange={props.onBodyChange}></textarea>
                </p>
                <p></p>

            </form>
        </>
    );
}

export default newPost;