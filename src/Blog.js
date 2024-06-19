import Feed from "./Feed"
import { Link } from 'react-router-dom'; 
import Search from './Search';

const Blog=({posts, handleDelete,  search, setSearch}) => {
    console.log(posts.length);
    return(
        <main className="home">
            <div className="search-section">
                <Search search={search} setSearch={setSearch}/>
            </div>
            {posts.length? (
                <Feed posts={posts} handleDelete={handleDelete} />
            ):
            (
                <div className="noPost">
                    <p>Oh no ! No posts to show at the moment.</p>
                    <Link to="/post" className="createPost">Create New Post</Link>
                </div>
            )}
        </main>
    )
}

export default Blog