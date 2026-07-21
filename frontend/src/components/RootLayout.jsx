import { Outlet, Link, useLocation } from "react-router-dom";
import LocationWord from "./LocationWord";
import Button from "./Button";
// import { useHeader } from "./HeaderContext";

export default function RootLayout() {

    const location = useLocation();
    return (
        <div style = {{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh'
        }}>

            {/* universeral header */}

            <header style = {{
                minHeight: '70px',
                padding: '15px 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent:'space-between',
                borderBottom: '1px solid #e5e73b',
                backgroundColor: '#ffffff'
            }}>

                <Link to="/" style = {{
                    textDecoration: 'none'
                }}>
                    <LocationWord/>
                </Link>

                {location.pathname === '/getinpage' && (
                    <div style = {{
                        display: 'flex',
                        gap: '10px'
                    }}>
                        <Link to = '/signup'>
                            <Button id = 'signup' index= {0}>SIGNUP</Button>
                            {/* <Button id = 'login' index= {1}>LOGIN</Button> */}
                        </Link>

                        <Link to = '/login'>
                            {/* <Button id = 'signup' index= {0}>SIGNUP</Button> */}
                            <Button id = 'login' index= {1}>LOGIN</Button>
                        </Link>
                        
                    </div>
                )}

                {/* <div style = {{display: 'flex', gap: '10px'}}>
                    {headerActions}
                </div> */}
            </header>

            {/* MAIN CONTENT HERE */}

            <main style ={{
                flex: 1,
                padding: '30px 24px',
                backgroundColor: '#f9fafb',
                
            }}>

                {/* CURRENT PAGE ELEMENTS STAY HERE */}
                <Outlet/>
            </main>


            {/* FOOTER SIDE */}

            <footer stlye = {{
                minHeight: '50px',
                padding: '15px 24px',
                textAlign: 'center',
                fontSize: '14px',
                color: '#6b7280',
                borderTop: '1px solid #e5e7eb',
                backgroundColor: '#ffffff'
            }}>

                C {new Date().getFullYear()} MyApp. All rights reserved.
            </footer>
        </div>
    )
}