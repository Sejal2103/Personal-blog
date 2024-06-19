import { useParams, Link } from "react-router-dom";

const PostPage = ({ posts, handleDelete }) => {
    const { id } = useParams();
    const post = posts.find(post => (post.id).toString() === id);

    return (
        <main className="postPage">
            <article className="individualBlog">
                {post && (
                    <>
                        <h2 className="postTitle">{post.title}</h2>
                        <p className="postDate">{post.date}</p>
                        <p className="postBody">{post.body}</p>
                        <div style={{"margin-left":"12px"}} className="buttonsContainer">
                            <Link to={`/edit/${post.id}`}>
                                <button className="editButton">Edit</button>
                            </Link>
                            <button className="deleteButton" onClick={() => handleDelete(post.id)}>
                                Delete post
                            </button>
                        </div>
                    </>
                )}
            </article>

            {!post && (
                <div className="missing">
                    <>
                        <h2 style={{ marginBottom: "8px" }}>Oh no! The page doesn't exist</h2>
                        <p>Well!! that's disappointing</p>
                        <>
                            <Link to='/' className="createPost">Visit our home page</Link>
                        </>
                    </>
                </div>
            )}
        </main>
    );
};

export default PostPage;
