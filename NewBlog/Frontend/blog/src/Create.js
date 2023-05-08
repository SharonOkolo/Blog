import { useState } from "react";
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] =useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory ();


    const handleSubmit = (e) => {
        e.preventDefault();
        const blog ={title, body, author};
        setIsPending (true);
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then (() =>{
            alert('New Blog Added');
            console.log("new blog added");
            setIsPending(false);
            //history.go(-1);
            history.push('/');

        })
    }

    return ( 
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                 <input
                  type= "text"
                  required
                  value={title}
                  onChange= {(e) =>setTitle(e.target.value)}
                  />
                  <label>Blog Body :</label>
                  <textarea 
                    required
                    value={body}
                    onChange= {(e) =>setBody(e.target.value)}
                  ></textarea>
                  <label>Written by:</label>
                 <input
                  type= "text"
                  required
                  value={author}
                  onChange= {(e) =>setAuthor(e.target.value)}
                  />
                  {!isPending && <button>Add blog</button>}
                  {isPending && <button disbled >Adding blog ..</button>}
                  
            </form>
        </div>
     );
}
 
export default Create;