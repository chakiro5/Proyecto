import Inicio from "./pages/inicio/Inicio";
import Productos from "./pages/productos/Productos";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./App.css";
function App() {
  return (
    <div className="App">
      <NavBar/>
        function App() {
          return (
            <>
            <Router>
              <Navbar />
              <Switch>
                <Route path='/Home' component={Home} />
                <Route path='/Productos' component={Productos} />
                <Route path='/Accesorios&Hamacas' component={Accesorios&Hamacas} />
                <Route path='/Login' component={Login} />
                <Route path='/Carrito' component={Carrito} />
              </Switch>
            </Router>
            </>
           );
        }
      <Inicio/>
      <Productos/>
      <Footer/>
    </div>
  );
}

export default App;
