import '../css/projects.css';
import { Box } from "@mui/material";

export const Projects = () => {
    return (
    <>
    <section id="projects" className="projects" style={{gridArea: "ren", alignItems: 'center', paddingBottom: '10vh'}}>
        <h1 className='ovo-regular'
            style={{
                padding: "1vw",
                width: "85%",
                textAlign: "center"
            }}
        >
            My Projects
        </h1>
        <Box className="card_projects">
            <Box className="box_projects">
                    <h2 className='ovo-regular' style={{paddingBottom: '2vh', paddingTop: '2vh'}}>Farmacia SyG</h2>
                    <p className='ovo-regular' style={{fontSize: '24px', width: '70%'}}>Page created for client with backend and Rest API queries.</p>
                <a className='ovo-regular' 
                    href='https://farmaciasyg.cl'
                    style={{
                        width: '200px', 
                        padding: '1vh', 
                        marginTop: '5vh',
                        marginBottom: '15px', 
                        border: '1px solid white', 
                        borderRadius: '10px', 
                        fontSize: '22px',
                        cursor: 'pointer',
                        textDecoration: 'none'
                    }}
                >web site
                </a>
            </Box>
            <img 
                style={{alignSelf: 'center'}}
                src="/img/farmaciasyg.png" 
                alt=""
                width="45%"
                height="400px"
            />
        </Box>
        <Box className="card_projects">
            <Box className="box_projects">
                    <h2 className='ovo-regular' style={{paddingBottom: '2vh', paddingTop: '2vh'}}>Pizzas Mamma-mia</h2>
                    <p className='ovo-regular' style={{fontSize: '24px', width: '70%'}}>Pizza page with shopping cart, created in React.js</p>
                <a className='ovo-regular' 
                    href='https://pizzeria-mamma-mia-cl.netlify.app/'
                    style={{
                        width: '200px', 
                        padding: '1vh', 
                        marginTop: '5vh',
                        marginBottom: '15px', 
                        border: '1px solid white', 
                        borderRadius: '10px', 
                        fontSize: '22px',
                        cursor: 'pointer',
                        textDecoration: 'none'
                    }}
                >web site
                </a>
            </Box>
            <img 
                style={{alignSelf: 'center'}}
                src="/img/mamma-mia.png" 
                alt=""
                width="45%"
                height="400px"
            />
        </Box>
        <Box className="card_projects">
            <Box className="box_projects">
                    <h2 className='ovo-regular' style={{paddingBottom: '2vh', paddingTop: '2vh'}}>Pharmacies on duty</h2>
                    <p className='ovo-regular' style={{fontSize: '24px', width: '70%'}}>APIS consultation page on on-call pharmacies in Chile, created in React.js</p>
                <a className='ovo-regular' 
                    href='https://farmacias-de-turno.netlify.app/'
                    style={{
                        width: '200px', 
                        padding: '1vh', 
                        marginTop: '5vh',
                        marginBottom: '15px', 
                        border: '1px solid white', 
                        borderRadius: '10px', 
                        fontSize: '22px',
                        cursor: 'pointer',
                        textDecoration: 'none'
                    }}
                >web site
                </a>
            </Box>
            <img 
                style={{alignSelf: 'center'}}
                src="/img/farmaciaDeTurno.png" 
                alt=""
                width="45%"
                height="400px"
            />
        </Box>
        <Box className="card_projects">
            <Box className="box_projects">
                    <h2 className='ovo-regular' style={{paddingBottom: '2vh', paddingTop: '2vh'}}>National currency</h2>
                    <p className='ovo-regular' style={{fontSize: '24px', width: '70%'}}>Page to exchange currency using national API mindicador.cl, with JS, CSS3 and HTML5</p>
                <a className='ovo-regular' 
                    href='https://neyeskamedina.github.io/conversorDeMoneda/'
                    style={{
                        width: '200px', 
                        padding: '1vh', 
                        marginTop: '5vh',
                        marginBottom: '15px', 
                        border: '1px solid white', 
                        borderRadius: '10px', 
                        fontSize: '22px',
                        cursor: 'pointer',
                        textDecoration: 'none'
                    }}
                >web site
                </a>
            </Box>
            <img 
                style={{alignSelf: 'center'}}
                src="/img/currencyConvert.png" 
                alt=""
                width="45%"
                height="400px"
            />
        </Box>
        <Box className="card_projects">
            <Box className="box_projects">
                    <h2 className='ovo-regular' style={{paddingBottom: '2vh', paddingTop: '2vh'}}>To do list page</h2>
                    <p className='ovo-regular' style={{fontSize: '24px', width: '70%'}}>Page to create a to-do list and organize your day, designed with Javascript, html5 and css3.</p>
                <a className='ovo-regular' 
                    href='https://neyeskamedina.github.io/toDoList_JS/'
                    style={{
                        width: '200px', 
                        padding: '1vh', 
                        marginTop: '5vh',
                        marginBottom: '15px', 
                        border: '1px solid white', 
                        borderRadius: '10px', 
                        fontSize: '22px',
                        cursor: 'pointer',
                        textDecoration: 'none'
                    }}
                >web site
                </a>
            </Box>
            <img 
                style={{alignSelf: 'center'}}
                src="/img/toDoList.png" 
                alt=""
                width="45%"
                height="400px"
            />
        </Box>
        <Box className="card_projects">
            <Box className="box_projects">
                    <h2 className='ovo-regular' style={{paddingBottom: '2vh', paddingTop: '2vh'}}>Messaging page project</h2>
                    <p className='ovo-regular' style={{fontSize: '24px', width: '70%'}}>HTML5 and CCS challenge</p>
                <a className='ovo-regular' 
                    href='https://github.com/NeyeskaMedina/sistema-mensajeria.git'
                    style={{
                        width: '200px', 
                        padding: '1vh', 
                        marginTop: '5vh',
                        marginBottom: '15px', 
                        border: '1px solid white', 
                        borderRadius: '10px', 
                        fontSize: '22px',
                        cursor: 'pointer',
                        textDecoration: 'none'
                    }}
                >web site
                </a>
            </Box>
            <img 
                style={{alignSelf: 'center'}}
                src="/img/messagingPage.png" 
                alt=""
                width="45%"
                height="400px"
            />
        </Box>
        <Box className="card_projects" sx={{alignItems: 'center'}}>
            <Box className="box_projects">
                    <h2 className='ovo-regular' style={{paddingBottom: '2vh', paddingTop: '2vh'}}>Real state page project</h2>
                    <p className='ovo-regular' style={{fontSize: '24px', width: '70%'}}>Real estate page with JS rendering code in html.</p>
                <a className='ovo-regular' 
                    href='https://neyeskamedina.github.io/inmobiliaria_js/'
                    style={{
                        width: '200px', 
                        padding: '1vh', 
                        marginTop: '5vh',
                        marginBottom: '15px',
                        border: '1px solid white', 
                        borderRadius: '10px', 
                        fontSize: '22px',
                        cursor: 'pointer',
                        textDecoration: 'none'
                    }}
                >web site
                </a>
            </Box>
            <img 
                style={{alignSelf: 'center'}}
                src="/img/realState.png" 
                alt=""
                width="45%"
                height="400px"
            />
        </Box>
        </section>
    </>
    )
}
