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
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    data.id = Date.now();
    setDb([...db, data]);
  };
  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
  };
  const deleteData = (id) => {};
  return (
    <div>
      <h2>CRUD App</h2>
      <CrudForm
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      <CrudTable
        data={db}
        setDataToEdit={setDataToEdit}
        deleteData={deleteData}
      />
    </div>
  );
};

export default CrudApp;
