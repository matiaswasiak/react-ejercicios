import React, { useState, useEffec } from "react";

const initialForm = {
  name: "",
  url: "",
  id: null,
};

const CrudForm = () => {
  const [form, setForm] = useState({ initialForm });
  const handleChange = (e) => {};
  const handleSubmit = (e) => {};
  const handleReset = (e) => {};

  return (
    <div>
      <h3>Agregar</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          onChange={handleChange}
          value={form.name}
        />
        <input
          type="text"
          name="url"
          placeholder="Url"
          onChange={handleChange}
          value={form.url}
        />
        <input type="submit" value="Enviar" />
        <input type="reset" value="Limpiar" onClick={handleReset} />
      </form>
    </div>
  );
};

export default CrudForm;
