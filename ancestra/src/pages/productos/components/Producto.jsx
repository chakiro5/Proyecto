const Producto = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-6 text-center">
          <div className="img-product">
            <img src={props.img} alt="" className="img-circle" />
          </div>
          <h3>{props.nombre}</h3>
          <h3>{props.diseñador}</h3>
          <h5>{props.comunidad}</h5>
          <h3>{props.vendedor}</h3>
          <h3>{props.contacto_vendedor}</h3>
          <h3>{props.precio}</h3>
          <h3>{props.descripcion}</h3>
          <p>{props.children}</p>
        </div>
      </div>
    </div>
  );
};

export default Producto;
