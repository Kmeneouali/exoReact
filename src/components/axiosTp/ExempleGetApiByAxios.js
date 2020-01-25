import React, { useState, useEffect } from "react";
import Axios from "axios";

function ExempleGetApiByAxios(props) {
  const [data, setData] = useState(null);
  const getData = async () => {
    Axios.get("https://airbnb-api.now.sh/api/home")
      .then(response => {
        console.log(response.data);
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <React.Fragment>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
        <h1 className="h2">
          <span role="img" aria-label="Apollo">
            🚀
          </span>{" "}
          {props.title}
        </h1>
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th>Title</th>
              <th>description</th>
              <th>Price</th>
              <th>Photo1</th>
              <th>Rating Value</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.featured &&
              data.featured.map((featured, index) => {
                return (
                  <tr key={index}>
                    <td>{featured.title}</td>
                    <td>{featured.description} </td>
                    <td>{featured.price}</td>
                    <td>
                      <img
                        src={featured.photos[0]}
                        style={{ width: "100px" }}
                      />
                    </td>
                    <td>{featured.ratingValue}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}

export default ExempleGetApiByAxios;
