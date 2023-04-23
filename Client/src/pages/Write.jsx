import React from "react";
import { useState , useContext} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import axios from "axios";
import moment from "moment";
import "react-quill/dist/quill.snow.css";
import { AuthContext } from "../context/authContext";

const Write = () => {
  const { currentUser } = useContext(AuthContext);
  const state = useLocation().state;
  const [content, setContent] = useState(state?.title || "");
  const [title, setTitle] = useState(state?.desc || "");
  const [file, setFile] = useState();
  const [cat, setCat] = useState(state?.cat || "");

  const navigate = useNavigate();

  
  const handleClick = async (e) => {
    e.preventDefault();
    let post = { userid:currentUser.data._id ,
      title: title,
      content: content,
      cat: cat,
      date:moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
      img : file
    }
    try{
    const res = await axios.post(`/addNewBlog`, post);
      console.log(res);
      navigate("/");
    }catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="add">
      
      <div className="content">
        
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="editorContainer">
          {" "}
          <ReactQuill
            className="editor"
            theme="snow"
            value={content}
            onChange={setContent}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1> publish</h1>
          <span>
            <b>Status:</b> Draft
          </span>
          <span>
            <b>Visibility:</b> Public
          </span>
          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label className="file" htmlFor="file">
            Upload Image
          </label>
          <div className="buttons">
            <button>Save as draft</button>
            <button onClick={handleClick}>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "art"}
              name="cat"
              value="art"
              id="art"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="art">ART</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "science"}
              name="cat"
              value="science"
              id="science"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="science">SCIENCE</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "technology"}
              name="cat"
              value="technology"
              id="technology"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="technology">TECHNOLOGY</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "cinema"}
              name="cat"
              value="cinema"
              id="cinema"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="cinema">CINEMA</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "design"}
              name="cat"
              value="design"
              id="design"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="design">DESIGN</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "food"}
              name="cat"
              value="food"
              id="food"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="food">FOOD</label>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Write;
