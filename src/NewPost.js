import React from 'react';
import write from './write-blog.png';
const NewPost = ({ handleSubmit, postTitle, postBody, setPostTitle, setPostBody }) => {
  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   const reader = new FileReader();
  //   reader.onloadend = () => {
  //     setPostImage(reader.result); 
  //   };
  //   if (file) {
  //     reader.readAsDataURL(file);
  //   }
  // };
  return (
    <main className="newBlog">
      <div>
      <h3 className="playwrite-fr-moderne-title" style={{"fontSize":"32px"}}> Create new blog</h3>
      <img src = {write} style={{"margin-top": "16px"}} />
      </div>
  
      <form className='newPostForm' onSubmit={handleSubmit}>
     
        <label>Title:</label>
        <input 
          type='text'
          required
          id='postTitle'
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <label>Post:</label>
        <textarea 
          id='postBody'
          required
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
        />
        <button style={{"outline":"none"}} type='submit'>Post blog</button>
      </form>
    </main>
  );
};

export default NewPost;
