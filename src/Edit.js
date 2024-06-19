import { useEffect } from "react";
import write from './write-blog.png';
import { useParams, Link } from "react-router-dom";
const Edit=({ posts, handleEdit,editTitle, editBody, setEditTitle,setEditBody }) => {
    const { id } =useParams();
    const post= posts.find(post=> (post.id).toString() === id);
    useEffect(()=>{
            if(post)
            {
                setEditTitle(post.title);
                setEditBody(post.body);
            }
    },[post,setEditTitle,setEditBody])
    return(
        <main className="newBlog">
            { editTitle && 
            <>
            <div>
                <h3 className="playwrite-fr-moderne-title" style={{"fontSize":"32px"}}>Edit blog</h3>
                <img src = {write} style={{"margin-top": "16px"}} />
            </div>
            <form className='newPostForm' onSubmit={(e)=> e.preventDefault()}>
                <label>Title:</label>
                <input 
                    type='text'
                    required
                    id='postTitle'
                    value={editTitle}
                    onChange={(e)=> setEditTitle(e.target.value)}
                />
                <label>Post:</label>
                <textarea 
                    id='postBody'
                    required
                    value={editBody}
                    onChange={(e)=> setEditBody(e.target.value)}
                />
                <button type='submit' onClick={()=> handleEdit(post.id)}>Save changes</button>
            </form>
         </>
}

{!editTitle &&
              <>
                <h2>No post to show</h2>
                <p>Well!! that's disappointing</p>
                <p>
                    <Link to='/'>Visit our home page</Link>
                </p>
                </>
              }
        </main>
    )
}

export default Edit