import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import LogOutButton from "../../components/Button/LogOutButton/LogOutButton";

function Profile() {
  const data = JSON.parse(Cookies.get("user"));

  return (
    <main>
      {
        data && 
        <p>Username: {data.username}</p>
        
      }
      <LogOutButton/>
    </main>
  );
}

export default Profile;
