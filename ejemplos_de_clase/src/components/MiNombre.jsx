const MiNombre = (props) => {
  const variable_jsx = "Este es mi nombre: ";
  return (
    <h1>
      {variable_jsx} {props.nombre}
    </h1>
  );
};

export default MiNombre;
