import React from 'react';
import { Link } from 'react-router-dom'; 
import travel from './travel.jpg'; // Import travel image
import food from './food.jpg'; // Import food image
import fashion from './fashion.jpg';

function Home() {
  return (
    <div id="home">
      <div id="headerHome">
        <p className="playwrite-fr-moderne-title" style={{ fontSize: "32px" }}>Write Your World:</p>
        <p className="subTitle">From Travel to Food, Fashion, and Beyond</p>
        <p className="brief" style={{ fontSize: "14px", marginTop: "24px" }}>
          Welcome to a space where your thoughts, experiences, and passions take center stage. Whether you're inspired by travel, enchanted by culinary adventures, intrigued by fashion, or driven by any other interest, this platform is your blank canvas. Share your unique voice through blogs on any topic under the sun.
        </p>
        <Link to="/post" className="create">
          <span className="createBlog" style={{ cursor: "pointer" }}>Create your blog</span>
        </Link>
      </div>
      <div className="images">
        <div className="image-item one" style={{ backgroundImage: `url(${travel})` }}></div>
        <div className="image-item two" style={{ backgroundImage: `url(${food})` }}></div>
        <div className="image-item three" style={{ backgroundImage: `url(${fashion})` }}></div>
      </div>
    </div>
  );
}

export default Home;
