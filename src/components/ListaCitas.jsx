import React from "react";
import Citas from "./Citas";

const ListaCitas = ({ citas, borrarPaciente }) => {
  return (
    <div className="border p-4 my-5">
      <h3 className="text-center">Citas:</h3>
      <hr />
      <div className="d-flex justify-contet-around">
        <Citas
          citas={citas}
          borrarPaciente={borrarPaciente}
        ></Citas>
      </div>
    </div>
  );
};

export default ListaCitas;
