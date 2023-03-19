import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
function Profile() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/profile/", {
        headers: {
          Authorization: `Token ${Cookies.get("token")}`,
        },
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
console.log(data)
  return (
    <div>
      <p>Username: {data.username}</p>
      <p>Email: {data.email}</p>
    </div>
  );
}

export default Profile;
