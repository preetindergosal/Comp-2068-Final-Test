import React, { useState, useEffect } from "react";
import Axios from "axios";

function Show(props) {
  const [ country, setBlog] = useState([]);

  useEffect(() => {
    Axios.get(`/api/ countries/${props.match.params.id}`)
      .then(result => setBlog(result.data))
      .catch(err => console.error(err));
  }, [props]);

  return (
    <div className="container">
      <header>
        <h1>{ country.title}</h1>
      </header>

      <div>{ country.content}</div>
    </div>
  );
}

export default Show;
