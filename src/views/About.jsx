import { Link } from "react-router-dom";
import '../css/about.css'

export const About = () => {
 

  return (
    <>
    <section 
      id="aboutme" className="aboutme" style={{ gridArea: "ren"}}>
      
        <h1 className='ovo-regular'
            style={{
                padding: "1vw",
                marginTop: "5vh",
                width: "85%",
                textAlign: "center"
            }}
        >About me
        </h1>
              <div className="containerAbout ovo-regular">
                <p className="p1">I'm a Business Administration technician, but my true passion is programming since I was 17 years old. 
                    As a self-taught person, 
                    I have learned several programming languages carried out projects to improve my daily life. 
                </p>
                <p className="p2">
                    I currently specialize in Fullstack Web Development and my main objective is to make significant contributions, 
                    whether in the development of innovative web applications, 
                    optimization of business processes or creation of solutions that have a positive impact on society. 
                    I am committed to continuous learning and excited to continue growing as a programming professional.
                </p>
                <h6 id="h5More"> <Link to="/others">More about me</Link></h6>
              </div>
    </section>
    </>
  )
}
