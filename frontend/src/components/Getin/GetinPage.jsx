// import LocationWord from "../LocationWord"
// import './style.css'
// import Start from "../Landing/start";
// import { Link } from "react-router-dom";
// import Button from "../Button";


// function GetinPage() {
//     return (
//         <>
//             <div className="getin-container">
//                 <div className="getin" style = {{
//                     display: 'flex',
//                     justifyContent: 'flex-end',
//                     width: '100%'
//                 }}>
//                     {/* <h2 className="titleName">{<LocationWord/>}</h2> */}
//                     {/* <div className="buttons" style ={{
//                         display: 'flex',
//                         gap: '10px'
//                     }}> */}

//                         {/* <Link to = '/signup'>
//                             <Button id='signup' index = {0}>SIGNUP</Button>
//                         </Link>

//                         <Link to = '/login'>
//                             <Button id='login' index={1}>LOGIN</Button>
//                         </Link> */}
                        

                        
//                     {/* </div> */}
                    
//                 </div>
//             </div>
            
//         </>
//     )
// }

// export default GetinPage;

// components/LOGIN_SIGNUP/Signup.jsx

// import './style.css';

// function GetinPage() {
//     return (
//         <div className="getin-container" style={{ textAlign: 'center', marginTop: '40px' }}>
//             <div className="getin">
//                 <h1 style={{ color: '#4b5563' }}>Please Select an Option in the Header Above</h1>
//                 <p style={{ color: '#9ca3af' }}>Choose Signup or Login to access your account workspace.</p>
//             </div>
//         </div>
//     );
// }

// export default GetinPage;


import './style.css';

function GetinPage() {
    return (
        <div className="getin-container" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            marginTop: '80px',
            textAlign: 'center'
        }}>
            <div className="getin" style={{ padding: '20px', background: '#fff', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                <h1 style={{ fontSize: '32px', color: '#111827', marginBottom: '10px' }}>Welcome to the App Workspace</h1>
                <p style={{ color: '#4b5563', fontSize: '18px', maxWidth: '500px' }}>
                    The navigation layout is successfully configured. Please click **Signup** or **Login** up in the header menu to load your working panel.
                </p>
            </div>
        </div>
    );
}

export default GetinPage;
