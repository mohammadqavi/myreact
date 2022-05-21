
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import Alert from './components/Alert';

function App() {
  
  return (
   <>
   
   {/* <Navbar title = "ReactWeb" aboutme = "About " changehome = "Home"/> */}
   <Navbar title = "ReactWeb"  changehome = "Home"/>
   <Alert alert="Alert is automatically hide after enable the dark mode"/>
   <div className="container my-3" >
   <TextForm  heading = "Enter Your Dettails" />
     </div>
     
            {/* <About/> */}
   
   </>
   
  );
}

export default App;
