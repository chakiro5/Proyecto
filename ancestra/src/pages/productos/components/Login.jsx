const Login = () => {
    return ( 
    <div className="container">
        <div className="login-form-container">
        <div id="close-login-btn" className="fas fa-times"></div>
        <form action="">
            <h3>INICIAR SESIÓN</h3>
            <span>Usuario:</span>
            <input type="email" name="" className="box" placeholder="Ingrese su correo*" id=""/>
            <span>Contraseña:</span>
            <input type="password" name="" className="box" placeholder="Ingrese su contraseña*" id=""/>
            <div className="checkbox">
                <input type="checkbox" name="" id="remember-me"/>
                <label for="remember-me"> Recordar contraseña.</label>
            </div>
            <input type="submit" value="ENVIAR" className="btn"/>
        </form>
    </div>
    </div> 
    );
}
 
export default Login;