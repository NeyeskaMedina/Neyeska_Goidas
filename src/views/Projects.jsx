import '../css/projects.css';
import { FaExternalLinkAlt } from 'react-icons/fa';

export const Projects = () => {
    return (
    <>
    <section id="projects" className="projects" style={{gridArea: "ren"}}>
    <div className="card-projects">
                <a className="a-projects" href="https://pizzeria-mamma-mia-cl.netlify.app/">Netlify
                    <FaExternalLinkAlt />
                </a>
                <img 
                    src="/img/mamma-mia.png" 
                    alt=""
                    width="96%"
                    height="75%"
                />
                <footer className="foo-projects">
                    <h3>Pizzas Mamma-mia</h3>
                    <p>Pizza page with shopping cart, created in React.js</p>
                </footer>
            </div>
            <div className="card-projects">
                <a className="a-projects" href="https://farmacias-de-turno.netlify.app/">Netlify
                    <FaExternalLinkAlt />
                </a>
                <img 
                    src="/img/farmaciaDeTurno.png" 
                    alt=""
                    width="96%"
                    height="75%"
                />
                <footer className="foo-projects">
                    <h3>Pharmacies on duty</h3>
                    <p>APIS consultation page on on-call pharmacies in Chile, created in React.js</p>
                </footer>
            </div>
            <div className="card-projects">
                <a className="a-projects" href="https://neyeskamedina.github.io/conversorDeMoneda/">gitHub Pages
                    <FaExternalLinkAlt />
                </a>
                <img 
                    src="/img/currencyConvert.png" 
                    alt=""
                    width="96%"
                    height="75%"
                />
                <footer className="foo-projects">
                    <h3>National currency</h3>
                    <p>Page to exchange currency using national API mindicador.cl, with JS, CSS3 and HTML5</p>
                </footer>
            </div>
            <div className="card-projects">
                <a className="a-projects" href="https://neyeskamedina.github.io/toDoList_JS/">gitHub Pages
                    <FaExternalLinkAlt />
                </a>
                <img 
                    src="/img/toDoList.png" 
                    alt=""
                    width="96%"
                    height="75%"
                />
                <footer className="foo-projects">
                    <h3>To do list page</h3>
                    <p>Page to create a to-do list and organize your day, designed with Javascript, html5 and css3.</p>
                </footer>
            </div>
            <div className="card-projects">
                <a className="a-projects" href="https://github.com/NeyeskaMedina/sistema-mensajeria.git">gitHub
                <FaExternalLinkAlt />
                </a>
                <img 
                    src="/img/messagingPage.png" 
                    alt=""
                    width="96%"
                    height="80%"
                />
                <footer className="foo-projects">
                    <h3>Messaging page project</h3>
                    <p>HTML5 and CCS challenge</p>
                </footer>
            </div>
            <div className="card-projects">
                <a className="a-projects" href=" https://neyeskamedina.github.io/inmobiliaria_js/">gitHub Pages
                <FaExternalLinkAlt />
                </a>
                <img 
                    src="/img/realState.png" 
                    alt=""
                    width="96%"
                    height="80%"
                />
                <footer className="foo-projects">
                    <h3>Real state page project</h3>
                    <p>Real estate page with JS rendering code in html.</p>
                </footer>
            </div> 
        </section>
    </>
    )
}
