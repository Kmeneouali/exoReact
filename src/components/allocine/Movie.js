import React, { useState, useEffect } from "react";
import Axios from "axios";
export default function Movie(props) {
  const [data, setData] = useState(null);
  const getData = async api => {
    Axios.get(api)
      .then(response => {
        console.log(response.data);
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData(props.api);
  }, []);
  return (
    <div>
      <div className="row">
        {data &&
          data.results &&
          data.results.map((result, index) => {
            return (
              <div className="col-md-4">
                <div className="card mb-4 box-shadow">
                  <img
                    class="card-img-top"
                    src={
                      "https://image.tmdb.org/t/p/w370_and_h556_bestv2/" +
                      result.poster_path
                    }
                  />
                  <div class="card-body">
                    <h4 class="card-title">{result.title}</h4>

                    <p class="card-text">{result.overview}</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
