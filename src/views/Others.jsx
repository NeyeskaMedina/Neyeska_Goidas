import { FaArrowCircleDown } from "react-icons/fa";
import { Box } from "@mui/material";
import "../css/others.css"

export const Others = () => {
    return (
    <>
    <section id="others" className="student ovo-regular" style={{gridArea: "ren", textAlign: 'center'}}>
{/* STUDENTS */}
    <Box sx={{display: 'flex', flexDirection: 'column'}}>
        <Box sx={{display: 'flex', alignItems: 'center'}}>
            <button 
                className="btn btn-primary d-flex align-items-center justify-content-center gap-1 me-2" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#collapseExample" 
                aria-expanded="false" 
                aria-controls="collapseExample"
            >
                <h1>Studies</h1>
            </button>
            <Box sx={{
                display: 'flex',
                alignSelf: 'end',
                height: '50%',
                width: '40vw',
                margin: '0 10px 0 10px',
                borderTop: '2px solid white'
                
            }}>
            </Box>
        </Box>
        <Box sx={{display: 'flex', flexDirection: 'column'}} className="collapse" id="collapseExample">
            <img 
                className="ice"
                src="/img/ice.png" 
                alt=""
                width="200px"
                height="200px"
                title="Instituto de Capacitacion Empresarial ICE"
                style={{borderRadius: '5px', alignSelf:'center'}}
            />
            <a href="https://www.ice-aprendices.com/">Business Training Institute (ICE)</a>
            <p>H.T in Business Administration</p>
            <p>Year 2015</p> 
        </Box>
        <Box sx={{display: 'flex', flexDirection: 'column'}} className="collapse" id="collapseExample">
            <img 
                className="simonBolivar"
                src="/img/liceoSimonBolivar.jpg" 
                alt=""
                width="200px"
                height="200px"
                title="UEN Simon Bolivar"
                style={{borderRadius: '5px', alignSelf:'center'}}
            />
                <a href="http://uensimonbolivar2016.blogspot.com/">U.E.N Simón Bolivar</a>
                <p>Bachelor in sciences and humanities</p>
                <p>Year 2012</p>
        </Box>
    </Box>

{/* JOBS */}
<Box sx={{display: 'flex', flexDirection: 'column'}}>
        <Box sx={{display: 'flex', alignItems: 'center'}}>
            <button 
                className="btn btn-primary d-flex align-items-center justify-content-center gap-1 me-2" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#collapseExample1" 
                aria-expanded="false" 
                aria-controls="collapseExample1"
            >
                <h1>Jobs</h1>
            </button>
            <Box sx={{
                display: 'flex',
                alignSelf: 'end',
                height: '50%',
                width: '40vw',
                margin: '0 10px 0 10px',
                borderTop: '2px solid white'
                
            }}>
            </Box>
        </Box>
        <Box className="collapse" id="collapseExample1" sx={{display: 'flex', flexDirection: 'column'}}>
            <img 
                className="america"
                src="/img/america.png"
                alt=""
                width="200px"
                height="200px"
                title="Sociedad America Limitada"
                style={{borderRadius: '5px', alignSelf:'center'}}
            />
            <a href="https://www.aridoscalama.cl/">America Limited Company</a>
            <p>Administrator</p>
            <p>Mar 2020 / Jan 2023</p>
        </Box>
        <Box className="collapse" id="collapseExample1" sx={{display: 'flex', flexDirection: 'column'}} >
            <img 
                className="avessoc"
                src="/img/avessoc.png" 
                alt=""
                width="200px"
                height="200px"
                title="AVESSOC"
                style={{borderRadius: '5px', alignSelf:'center'}}
            />
                <a href="https://avessoc.org.ve/">Avessoc</a>
                <p>Administrative Assistant</p>
                <p>Jun 2015 / Nov 2017</p>
        </Box>
        <Box sx={{display: 'flex', flexDirection: 'column'}} className="collapse" id="collapseExample1">
            <img 
                className="hss"
                src="/img/hss.png" 
                alt=""
                width="200px"
                height="200px"
                title="HSS Seguridad 09 CA"
                style={{borderRadius: '5px', alignSelf:'center'}}
            />
                <a href="https://noticiasx7.negocio.site/">HSS Security 09</a>
                <p>Manager Assistant</p>
                <p>Apr 2012 / May 2015</p>
        </Box>
</Box>

{/* COURSE */}
<Box sx={{display: 'flex', flexDirection: 'column'}}>
        <Box sx={{display: 'flex', alignItems: 'center'}}>
            <button 
                className="btn btn-primary d-flex align-items-center justify-content-center gap-1 me-2" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#collapseExample2"
                aria-expanded="false" 
                aria-controls="collapseExample2"
            >
                <h1>Courses</h1>
            </button>
            <Box sx={{
                display: 'flex',
                alignSelf: 'end',
                height: '50%',
                width: '40vw',
                margin: '0 10px 0 10px',
                borderTop: '2px solid white'
                
            }}>
            </Box>
        </Box>
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
            <img 
                className="desafioLatam"
                src="/img/desafioLatam.png" 
                alt=""
                width="200px"
                height="150px"
                title="Desafio Latam"
                style={{borderRadius: '5px', alignSelf:'center'}}
            />
                <a href="https://desafiolatam.com/?utm_term=desafio%20latam&utm_campaign=Brand&utm_source=adwords&utm_medium=ppc&hsa_acc=1239562006&hsa_cam=16998643182&hsa_grp=136655824715&hsa_ad=596057942540&hsa_src=g&hsa_tgt=kwd-340546658839&hsa_kw=desafio%20latam&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gad=1&gclid=CjwKCAjwjaWoBhAmEiwAXz8DBQbTq_G3ysWB0qJwSsQi6RWrXlFSW_oHawPV6hE1A42e0RKQT31diBoCWfUQAvD_BwE">Latam Challenge</a>
                <p>Fullstack Developer</p>
                <p>Apr 2023 / (Actual)</p>
        </Box>
        <Box sx={{display: 'flex', flexDirection: 'column'}} >
            <img 
                className="damercap"
                src="/img/damercap.jpg" 
                alt=""
                width="200px"
                height="200px"
                title="DAMERCAP"
                style={{borderRadius: '5px', alignSelf:'center'}}
            />
                <a href="https://damercap.cl/">Damercap</a>
                <p>Multiple machinery operator</p>
                <p>Feb 2022 / Aug 2022</p>
        </Box>
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
            <img 
                className="feyAlegria"
                src="/img/feyAlegria.png" 
                alt=""
                width="200px"
                height="200px"
                title="Fe y Alegria"
                style={{borderRadius: '5px', alignSelf:'center'}}
            />
                <a href="https://avessoc.org.ve/">Faith and Joy</a>
                <p>Computerized accounting</p>
                <p>Jan 2010 / Dec 2010</p>
        </Box>
</Box>
                            
</section>
</>
    
)
}
