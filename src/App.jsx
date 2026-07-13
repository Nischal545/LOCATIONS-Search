// import './App.css';
import Start from './components/Landing/Start';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginPage';
 
function App () {

    return (
        // <>

        <BrowserRouter>
            

            <Routes>
                <Route path='/' element = {<Start/>}/>
                <Route path='/loginpage' element ={<LoginPage/>}/>
            </Routes>
        </BrowserRouter>
        
        

        
    )
}

export default App;