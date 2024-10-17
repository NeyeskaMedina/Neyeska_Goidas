import '../css/knowledge.css';
import { Box } from "@mui/material";



export const Knowledge = () => {
  return (
    <>
    <section id="knowledge" className="knowledges ovo-regular" style={{gridArea: "ren", margin: '8vh 0px 10vh 0px'}}>
            <Box sx={{display: 'flex', alignItems: 'center', margin: '4vh 0 4vh 0', justifyContent: 'start'}}>
                <h3>Languages</h3>
                <Box sx={{width: '45%', height: '2px', backgroundColor: 'white' }}></Box>
            </Box>
            <div className="languages">
                <h5 style={{backgroundColor: "orange"}}> JavaScript</h5>
                <p>Desafio Latam /</p>
                <a href="https://desafiosdev.s3.amazonaws.com/uploads/certification/image/25637/aprobacion-modulos-cursos-b-learning-javascript-para-la-web-g43-14335.png"> <p>Certificate</p></a>
            </div>
            <div className="languages">
                <h5 style={{backgroundColor: "#005eff"}}> Html5</h5>
                <p>Desafio Latam /</p>
                <a href="https://desafiosdev.s3.amazonaws.com/uploads/certification/image/23698/aprobacion-modulos-cursos-b-learning-introduccion-al-desarrollo-web-g43-14335.png"> <p>Certificate</p></a>
            </div>
            <div className="languages">
                <h5 style={{backgroundColor: "#099006"}}> Css3</h5>
                <p>Desafio Latam /</p>
                <a href="https://desafiosdev.s3.amazonaws.com/uploads/certification/image/24405/aprobacion-modulos-cursos-b-learning-css-avanzado-g43-14335.png"> <p>Certificate</p></a>
            </div>
            <div className="languages">
                <h5 style={{backgroundColor: "#aa0000"}}> Java</h5>
                <p>Autodidact</p>
            </div>
            <div className="languages">
                <h5 style={{backgroundColor: "#00a2a5"}}> Visual Basic</h5>
                <p>Autodidact</p>
            </div>
            <Box sx={{display: 'flex', alignItems: 'center', margin: '4vh 0 4vh 0', justifyContent: 'start'}}>
                <h3>FrameWorks and Libraries</h3>
                <Box sx={{width: '45%', height: '2px', backgroundColor: 'white' }}></Box>
            </Box>
            <div className="languages">
                <h5 style={{backgroundColor: "#3c873a"}}>Nodejs</h5>
                <p>Desafio Latam /</p>
                <a href="https://desafiosdev.s3.amazonaws.com/uploads/certification/image/31376/aprobacion-modulos-cursos-b-learning-backend-con-node-y-express-g43-14335(3).png"> <p>Certificate</p></a>
            </div>
            <div className="languages">
                <h5 style={{backgroundColor: "#005aff"}}>React</h5>
                <p>Desafio Latam /</p>
                <a href="https://desafiosdev.s3.amazonaws.com/uploads/certification/image/26526/aprobacion-modulos-cursos-b-learning-react-i-g43-14335.png"> <p>Certificate</p></a>
            </div>
            <div className="languages">
                <h5 style={{backgroundColor: "#005aff"}}>React II</h5>
                <p>Desafio Latam /</p>
                <a href="https://desafiosdev.s3.amazonaws.com/uploads/certification/image/27298/aprobacion-modulos-cursos-b-learning-react-ii-g43-14335.png"> <p>Certificate</p></a>
            </div>
            <div className="languages">
                <h5 style={{backgroundColor: "#68237b"}}> Bootstrap</h5>
                <p>Desafio Latam /</p><p>Css / Version 5.3</p>
            </div>
            <div className="languages">
                <h5 style={{backgroundColor: "#150aaf"}}> Axios</h5>
                <p>Apis Library</p>
            </div>
            <div className="languages">
                <h5 style={{backgroundColor: "#ff0090"}}> Chart js</h5>
                <p>graphics Library</p>
            </div>
            <div className="languages">
                <h5 style={{backgroundColor: "#f9bd31"}}> Postman</h5>
                <p>Api Tool</p>
            </div>
            <Box sx={{display: 'flex', alignItems: 'center', margin: '4vh 0 4vh 0', justifyContent: 'start'}}>
                <h3>Terminal</h3>
                <Box sx={{width: '45%', height: '2px', backgroundColor: 'white' }}></Box>
            </Box>
            <div className="languages">
                <h5 style={{backgroundColor: "#0dd84d"}}> Git</h5>
                <p>Terminal</p>
            </div>
            <div className="languages" style={{marginBottom: '4vh'}}>
                <h5 style={{backgroundColor: "#000000"}}> GitHub</h5>
                <p>Version Control</p>
            </div>
    </section>
    </>
  )
}
export default Knowledge