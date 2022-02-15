import React, { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const initialDb = [
  {
    id: 1,
    name: "React",
    url: "https://es.reactjs.org/",
  },
  {
    id: 2,
    name: "Angular",
    url: "https://angular.io/",
  },
  {
    id: 3,
    name: "Vue",
    url: "https://vuejs.org/",
  },
  {
    id: 4,
    name: "Svelte",
    url: "https://svelte.dev/",
  },
  {
    id: 5,
    name: "Polymer",
    url: "https://polymer-library.polymer-project.org/",
  },
];

const CrudApp = () => {
  const [db, setDb] = useState(initialDb);
  return (
    <div>
      <h2>CRUD App</h2>
      <CrudForm />
      <CrudTable data={db} />
    </div>
  );
};

export default CrudApp;
