import '../css/knowledge.css';



export const Knowledge = () => {
  return (
    <>
    <section id="knowledge" className="knowledges" style={{gridArea: "ren"}}>
            <h3>Languages</h3>
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
                <a href=""> <p>Autodidact</p></a>
            </div>
            <div className="languages">
                <h5 style={{backgroundColor: "#00a2a5"}}> Visual Basic</h5>
                <a href=""> <p>Autodidact</p></a>
            </div>
            <h3 className="frames">FrameWorks and libraries</h3>
            <div className="languages">
                <h5 style={{backgroundColor: "#005aff"}}>React</h5>
                <p>Desafio Latam /</p>
                <a href="https://desafiosdev.s3.amazonaws.com/uploads/certification/image/26526/aprobacion-modulos-cursos-b-learning-react-i-g43-14335.png"> <p>Certificate</p></a>
            </div>
            <div className="languages">
                <h5 style={{backgroundColor: "#68237b"}}> Bootstrap</h5>
                <a href=""> <p>Css / Version 5.3</p></a>
            </div>
            <div className="languages">
                <h5 style={{backgroundColor: "#150aaf"}}> Axios</h5>
                <a href=""> <p>Apis Library</p></a>
            </div>
            <div className="languages">
                <h5 style={{backgroundColor: "#ff0090"}}> Chart js</h5>
                <a href=""> <p>graphics Library</p></a>
            </div>
            <div className="languages">
                <h5 style={{backgroundColor: "#f9bd31"}}> Postman</h5>
                <a href=""> <p>Api Tool</p></a>
            </div>
            <h3>Terminal</h3>
            <div className="languages">
                <h5 style={{backgroundColor: "#0dd84d"}}> Git</h5>
                <a href=""> <p>Terminal</p></a>
            </div>
            <div className="languages">
                <h5 style={{backgroundColor: "#000000"}}> GitHub</h5>
                <a href=""> <p>Version Control</p></a>
            </div>
    </section>
    </>
  )
}
export default Knowledge