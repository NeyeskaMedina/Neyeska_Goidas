import { FaArrowCircleDown } from "react-icons/fa";
import "../css/others.css"

export const Others = () => {
    return (
    <>
    <section id="others" className="student" style={{gridArea: "ren"}}>
{/* STUDENTS */}
    <p className="d-inline-flex gap-1">
            <button 
                className="btn btn-primary d-flex align-items-center justify-content-center gap-1 me-2" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#collapseExample" 
                aria-expanded="false" 
                aria-controls="collapseExample"
            >
                <FaArrowCircleDown className="iBtn"/>
                <h3>Studies</h3>
            </button>
            <img className="ice"
                    src="/img/ice.png" 
                    alt=""
                    width="40px"
                    height="40px"
                    title="Instituto de Capacitacion Empresarial ICE"
            />
            <img className="simonBolivar"
                src="/img/liceoSimonBolivar.jpg" 
                alt=""
                width="40px"
                height="40px"
                title="UEN Simon Bolivar"
            />
    </p>
    <div className="collapse" id="collapseExample">
        <div className="section-info">
                <a href="https://www.ice-aprendices.com/">Business Training Institute (ICE)</a>
                <p>H.T in Business Administration</p>
                <p>Year 2015</p>
        </div>
        <div className="section-info">
                <a href="http://uensimonbolivar2016.blogspot.com/">U.E.N Simón Bolivar</a>
                <p>Bachelor in sciences and humanities</p>
                <p>Year 2012</p>
        </div>
    </div>

{/* JOBS */}
    <p className="d-inline-flex gap-1">
            <button 
                className="btn btn-primary d-flex align-items-center justify-content-center gap-1 me-2" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#collapseExample1" 
                aria-expanded="false" 
                aria-controls="collapseExample1"
            >
                <FaArrowCircleDown className="iBtn"/>
                <h3>Jobs</h3>
            </button>
            <img className="america"
                    src="/img/america.png"
                    alt=""
                    width="40px"
                    height="40px"
                    title="Sociedad America Limitada"
            />
            <img className="avessoc"
                    src="/img/avessoc.png" 
                    alt=""
                    width="40px"
                    height="40px"
                    title="AVESSOC"
            />
            <img className="hss"
                    src="/img/hss.png" 
                    alt=""
                    width="40px"
                    height="40px"
                    title="HSS Seguridad 09 CA"
            />
    </p>
    <div className="collapse" id="collapseExample1">
        <div className="section-info">
                <a href="https://www.aridoscalama.cl/">America Limited Company</a>
                <p>Administrator</p>
                <p>Mar 2020 / Jan 2023</p>
        </div>
        <div className="section-info">
                <a href="https://avessoc.org.ve/">Avessoc</a>
                <p>Administrative Assistant</p>
                <p>Jun 2015 / Nov 2017</p>
        </div>
        <div className="section-info">
                <a href="https://noticiasx7.negocio.site/">HSS Security 09</a>
                <p>Manager Assistant</p>
                <p>Apr 2012 / May 2015</p>
        </div>
    </div>
        
{/* COURSE */}
    <p className="d-inline-flex gap-1">
            <button 
                className="btn btn-primary d-flex align-items-center justify-content-center gap-1 me-2" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#collapseExample2"
                aria-expanded="false" 
                aria-controls="collapseExample2"
            >
                <FaArrowCircleDown className="iBtn"/>
                <h3>Courses</h3>
            </button>
            <img className="desafioLatam"
                        src="/img/desafioLatam.png" 
                        alt=""
                        width="50px"
                        height="40px"
                        title="Desafio Latam"
            />
            <img className="damercap"
                        src="/img/damercap.jpg" 
                        alt=""
                        width="40px"
                        height="40px"
                        title="DAMERCAP"
            />
            <img className="feyAlegria"
                        src="/img/feyAlegria.png" 
                        alt=""
                        width="40px"
                        height="40px"
                        title="Fe y Alegria"
            />
    </p>
    <div className="collapse" id="collapseExample2">
        <div className="section-info">
                <a href="https://desafiolatam.com/?utm_term=desafio%20latam&utm_campaign=Brand&utm_source=adwords&utm_medium=ppc&hsa_acc=1239562006&hsa_cam=16998643182&hsa_grp=136655824715&hsa_ad=596057942540&hsa_src=g&hsa_tgt=kwd-340546658839&hsa_kw=desafio%20latam&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gad=1&gclid=CjwKCAjwjaWoBhAmEiwAXz8DBQbTq_G3ysWB0qJwSsQi6RWrXlFSW_oHawPV6hE1A42e0RKQT31diBoCWfUQAvD_BwE">Latam Challenge</a>
                <p>Fullstack Developer</p>
                <p>Apr 2023 / (Actual)</p>
        </div>
        <div className="section-info">
                <a href="https://damercap.cl/">Damercap</a>
                <p>Multiple machinery operator</p>
                <p>Feb 2022 / Aug 2022</p>
        </div>
        <div className="section-info">
                <a href="https://avessoc.org.ve/">Faith and Joy</a>
                <p>Computerized accounting</p>
                <p>Jan 2010 / Dec 2010</p>
        </div>
    </div>
                            
        </section>
        </>
    )
}
