import LocationWord from "../LocationWord"
import './style.css'
import Start from "../Landing/start";


function LoginPage() {
    return (
        <>
            <div className="getin-container">
                <div className="getin">
                    <h2 className="titleName">{<LocationWord/>}</h2>
                    <div className="buttons">
                        <button id='signup'>SIGNUP</button>
                        <button id='login'>LOGIN</button>
                    </div>
                    
                </div>
            </div>
            
        </>
    )
}

export default LoginPage;