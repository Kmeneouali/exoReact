import React, { Fragment, useState } from "react";
import "./../../css/todolist.css";
export default function ToDoList(props) {
  const [tache, setTache] = useState({ title: "", state: true });
  const [taches, setTaches] = useState([]);

  const handleTacheChange = event => {
    setTache(event.target.value);
  };
  const addTache = event => {
    event.preventDefault();
    const task = { title: tache, state: true };
    taches.push(task);
    setTaches(taches);
    setTache({ title: "", state: true });
  };

  const handleDeleteTache = tache => {
    const taches1 = [];
    for (let i = 0; i < taches.length; i++) {
      if (taches[i].title === tache.title) {
        taches[i].state = taches[i].state ? false : true;
      }
      taches1.push(taches[i]);
    }
    setTaches(taches1);
  };
  return (
    <Fragment>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
        <h1 className="h2">
          <span role="img" aria-label="task">
            🔖
          </span>
          {props.title}
        </h1>
      </div>
      <div>
        <ul>
          {taches &&
            taches.map((tache, index) => {
              return (
                <li key={index}>
                  <a
                    onClick={() => handleDeleteTache(tache)}
                    className="badge badge-light"
                  >
                    X
                  </a>
                  {tache.state ? tache.title : <del> {tache.title}</del>}
                </li>
              );
            })}
        </ul>
        <form className="form-inline" onSubmit={addTache}>
          <div className="form-group mx-sm-3 mb-2">
            <input
              type="text"
              className="form-control"
              value={tache.title}
              onChange={handleTacheChange}
            />
          </div>
          <p></p>
          <button className="btn btn-primary mb-2" type="submit">
            Ajouter une tache
          </button>
        </form>
      </div>
    </Fragment>
  );
}
