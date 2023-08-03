import React from 'react'
import "./SideBar.css";

function SideBar() {
  return (
    <div>
        <div class="sidebar">
        <a href="#news">Profile</a>
          <ul> 
            <li>Main</li>
              <a href="#">category</a>
              <a href="#">Best selling</a>
              <a href="#">Inventory</a>
              
            <li>Settings</li>
              <a href="#">Help</a>
              <a href="#">Admin</a>
              <a href="#">Log out</a>
            </ul>
        </div>
    </div>
  )
}

export default SideBar