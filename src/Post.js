import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { AiFillEdit } from 'react-icons/ai';
import { AiFillDelete} from 'react-icons/ai';
const Post = ({post,handleDelete})=>{
    return (
        <article className="post">
            <div className="cardBlog">
               
            
            <Link to={`/post/${post.id}`}>
                <h2 className="postTitle">{post.title}</h2>
            </Link>
            <div className="icons">
            <Link className="edit" to={`/edit/${post.id}`}>
                <AiFillEdit className="edit" size={27} />
            </Link>
            <button className="del" onClick={()=> handleDelete(post.id)}>
                    <AiFillDelete size={25} />
            </button>
             </div>
                
            </div>


            <Link to={`/post/${post.id}`}>
                <p className="postDate">{post.date}</p>
            </Link>
            <p className="postBody">{
                (post.body).length <= 35 ?post.body : `${(post.body).slice(0,30)}...`
            }</p>
        </article>
    )
}
export default Post