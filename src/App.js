import './App.css';
import './index.css';
import Header from './Header';
import Search from './Search';
import Footer from './Footer';
import Home from './Home';
import Blog from './Blog';
import PostPage from './PostPage';
import NewPost from './NewPost';
import About from './About';
import Missing from './Missing';
import Edit from './Edit';
import { Route, Switch, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import api from './api/posts';
import useWindowSize from './hooks/useWindowSize';

function App() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const history = useHistory();
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const [editTitle, setEditTitle] = useState('');
  const [editBody, setEditBody] = useState('');
  //const [postImage, setPostImage] = useState(null);
  const { width } = useWindowSize();

  //const url = '/posts';

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get('/posts');
        console.log(response.data);
        setPosts(response.data);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const results = posts.filter((post) =>
      post.body.toLowerCase().includes(search.toLowerCase()) ||
      post.title.toLowerCase().includes(search.toLowerCase())
    );

    setSearchResults(results.reverse());
  }, [posts, search]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const date = format(new Date(), 'MMMM dd, yyyy pp');
    
    // let imageData = null;
    // if (postImage) {
    //   // Convert image data to base64 string
    //   try {
    //     const response = await fetch(postImage);
    //     const blob = await response.blob();
    //     const base64Image = await new Promise((resolve, reject) => {
    //       const reader = new FileReader();
    //       reader.onloadend = () => resolve(reader.result);
    //       reader.onerror = reject;
    //       reader.readAsDataURL(blob);
    //     });
    //     imageData = base64Image;
    //   } catch (err) {
    //     console.log(`Error converting image: ${err.message}`);
    //   }
    // }
  
    const newPost = { id, title: postTitle, date, body: postBody };
    
    try {
      // Send POST request to the server
      const response = await api.post('/posts', newPost);
      const updatedPosts = [...posts, response.data]; // Assuming response.data contains the newly created post
      setPosts(updatedPosts);
      setPostTitle('');
      setPostBody('');
      //setPostImage(null);
      history.push('/blog');
    } catch (err) {
      console.log(`Error creating new post: ${err.message}`);
    }
  };
  
  
  const handleEdit = async (id) => {
    const date = format(new Date(), 'MMMM dd, yyyy pp');
    const updatedPost = { id, title: editTitle, date, body: editBody };

    try {
      const response = await api.put(`/posts/${id}`, updatedPost);
      const updatedList = posts.map(post => post.id === id ? { ...response.data } : post);
      setPosts(updatedList);
      setEditTitle('');
      setEditBody('');
      history.push('/blog');
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}`);
      const postsList = posts.filter(post => post.id !== id);
      setPosts(postsList);
      history.push('/blog');
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  return (
    <div className="App">
      <Header title="Hey there!" width={width}  />
      {/* <Search search={search} setSearch={setSearch} /> */}
      <Switch>
      <Route exact path='/'>
          <Home  />
        </Route>
        <Route exact path='/blog'>
          <Blog posts={searchResults} handleDelete={handleDelete} search={search} setSearch={setSearch} />
        </Route>
        <Route path='/post/:id'>
          <PostPage posts={posts} handleDelete={handleDelete} />
        </Route>
        <Route exact path='/post'>
          <NewPost 
            handleSubmit={handleSubmit}
            postTitle={postTitle}
            setPostTitle={setPostTitle}
            postBody={postBody}
            setPostBody={setPostBody}
            // postImage ={postImage}
            // setPostImage = {setPostImage}
          />
        </Route>
        <Route path='/edit/:id'>
          <Edit 
            posts={posts}
            handleEdit={handleEdit}
            editTitle={editTitle}
            setEditTitle={setEditTitle}
            editBody={editBody}
            setEditBody={setEditBody}
          />
        </Route>
        <Route exact path='/about' component={About} />
        <Route path='*' component={Missing} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
