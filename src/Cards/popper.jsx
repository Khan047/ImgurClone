import React from "react";
import Popup from "reactjs-popup";
import "./card-style.css"
const Popper = () => (
  <Popup trigger={
  
  
  <a href="#" className="Button1">{<img src="https://s.imgur.com/desktop-assets/desktop-assets/icon-new-post.13ab64f9f36ad8f25ae3544b350e2ae1.svg"></img>} New Post</a>
  
  
  } modal
  closeOnDocumentClick position="right center">
    <div><input type="file"/></div>
  </Popup>
);
export default Popper;