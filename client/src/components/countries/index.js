import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

function Index() {
  const [countries, setBlogs] = useState([]);

  useEffect(() => {
    Axios.get("/api/countries")
      .then(result => setBlogs(result.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container">
      <header>
        <h1>All Countries</h1>
      </header>

      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Status</th>
              <th>Author</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {countries.map(country => (
              <tr key={country._id}>
                <td>
                  <Link to={`/api/countries/${country._id}`}>{country.title}</Link>
                </td>
                <td>{country.status}</td>
                <td>
                  {country.author && country.author.firstName}{" "}
                  {country.author && country.author.lastName}
                </td>
                <td>
                  <Link to={`/api/countries/${country._id}/edit`}>edit</Link>|
                  <Link to={`/api/countries/${country._id}/destroy`}>delete</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Index;
