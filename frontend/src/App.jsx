import './App.css';
import Start from './components/Landing/Start';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import GetinPage from './components/Getin/GetinPage';
import Signup from './components/LOGIN_SIGNUP/Signup';
import Login from './components/LOGIN_SIGNUP/Login';
import RootLayout from './components/RootLayout';
import { HeaderProvider } from './components/HeaderContext';

function App () {

    return (
        // <>
        // <HeaderProvider>
        <BrowserRouter>
            

            <Routes>
                {/* <Route path='/' element = {<RootLayout/>}/> */}
                <Route path = '/' element={<Start/>}/>
                

                <Route element={<RootLayout/>}>

                    <Route path='/getinpage' element ={<GetinPage/>}/>
                    <Route path='/signup' element = {<Signup/>}/>
                    <Route path='/login' element = {<Login/>}/>
                </Route>
                
            </Routes>
        </BrowserRouter>
        
        // </HeaderProvider>

        
    )
}

export default App;