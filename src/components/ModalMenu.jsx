import { useState } from "react";
import { Box } from "@mui/material";
import { FaLinkedin, FaGithub, FaWhatsapp} from "react-icons/fa";
// import { UserContext } from "../context/UserContext.jsx";
// import { modeLigth, modeDark } from "../helper/mode";
// import { FaMoon } from "react-icons/fa";
// import { FaSun } from "react-icons/fa";
import { BsPinAngle } from "react-icons/bs";
import { PiBrainThin } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { PiMapPinLine } from "react-icons/pi";
import { MdClose } from "react-icons/md";





export const ModalMenu = ({ openModal, handleClose }) => {
    const [ count, setCount ] = useState(100);
    const [ heart, setHeart ] = useState(false);
    // const { ligthMode, setLigthMode } = useContext(UserContext);
    const [isHover, setIsHover] = useState(false);
    const [isHoverLinks, setIsHoverLinks] = useState(false);
    

    const handleClickLiked = () => {
        if(heart !== true){
            setCount(count + 1)
            // const like = document.querySelector('.likeds .svgHeart');
            // like.style.color = "rgb(93, 0, 180)";
            setHeart(true)
        } else {
            setCount(count - 1)
            // const like = document.querySelector('.likeds .svgHeart');
            // ligthMode ? like.style.fill = "rgb(2, 10, 31)" : like.style.fill = "white";
            setHeart(false);
        };
    }
    // const getLigthMode = () => {
    //     setLigthMode(true)
    //     modeLigth()
    // }
    // const getDarkMode = () => {
    //     setLigthMode(false)
    //     modeDark()
    // }
    const handleMouseEnter = () =>{
        setIsHover(true);
    }
    const handleMouseLeave = () => {
        setIsHover(false);
    }
    const handleMouseEnterLinks = () =>{
        setIsHoverLinks(true);
    }
    const handleMouseLeaveLinks = () => {
        setIsHoverLinks(false);
    }
    return (
        <section className={`modalAboutme ${openModal ? 'show' : ''}`} onClick={handleClose}>
            <Box className="modalAboutme-content" onClick={(e) => e.stopPropagation()}>
                    <MdClose size={25} onClick={handleClose} />
                    <h1 className="ovo-regular">Neyeska Goidas </h1>
                {/* {ligthMode ? <FaMoon onClick={getDarkMode} className='moon'/> : <FaSun onClick={getLigthMode} className='sun'/>} */}
                <div className="liked-img2">
                    <img className='imgMe2' 
                        src='/img/i.jpg'
                        alt="" 
                        width='135px' 
                        height='150px' 
                        title='Neyeska Goidas' 
                        style={{border: "10px solid white", marginBottom:'15px'}}
                    />
                    <Box 
                        className="likeds2 ovo-regular"
                        onMouseEnter={handleMouseEnter} 
                        onMouseLeave={handleMouseLeave}
                        onClick={handleClickLiked}
                    >
                        <CiHeart 
                            className='svgHeart2'
                            size={30} 
                            style={{ color: isHover ?  '' : "white"}}
                            color="#020A1F"
                        />

                        <p className="ovo-regular" 
                            style={{
                                fontSize: '20px', 
                                color: isHover ?  '#020A1F' : 'white',
                                margin: '0px'
                            }}
                        >
                                {count} Like
                        </p>
                    </Box>
                </div>
                <main className='descriptionPrime2'>
                    <Box sx={{display: 'flex', width: '100%', justifyContent: 'center', margin: '15px 0px 0px 0px'}}>
                        <h5 style={{margin: '0 5px 0 0'}}>Hi, tell me Neye </h5>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={"25px"} height={"25px"}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                        </svg>
                    </Box>
                    <Box sx={{display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center'}}>
                        <p style={{margin: '0 0 0 5px'}}><PiBrainThin size={25}/> Develop Web Fullstack</p>
                        <a
                            style={{margin: '0 0 0 5px', textAlign: "center", padding: '0'}}
                            href="https://desafiosdev.s3.amazonaws.com/uploads/certification/image/31361/certificacion-aprobacion-de-carrera-nuevo-proyecto-final-g43-14335(3).png"><BsPinAngle size={20}/> Title</a>
                        <p style={{margin: '0 0 0 5px', textAlign: 'center'}} className="pUbi"><PiMapPinLine size={20}/>  Chile</p>
                    </Box>
                </main>  
                <Box sx={{ className: 'NavLinks2', display: 'flex', flexDirection: 'column', justifyItems: 'center', gap: '10px', width:'100%', marginTop: '15px'}}

                >
                    <a href="https://github.com/NeyeskaMedina" 
                        //  onMouseEnter={handleMouseEnterLinks}
                        //  onMouseLeave={handleMouseLeaveLinks}
                        style={{ 
                            display: 'flex', 
                            textAlign: 'center', 
                            justifyContent: 'space-around', 
                            alignSelf: 'center',
                            alignItems: 'center', 
                            backgroundColor: "white", 
                            padding: '5px',
                            color: "rgba(27, 33, 49, 0.497)",
                            width: '60%',
                            fontSize: 'larger'
                        }}
                    >
                        <FaGithub style={{color: isHoverLinks ? "rgb(2, 10, 31)" : "rgba(27, 33, 49, 0.497)", fontSize: "2em"}}/> GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/neyeska-medina" 
                        style={{ 
                            display: 'flex', 
                            textAlign: 'center', 
                            justifyContent: 'space-around', 
                            alignSelf: 'center',
                            alignItems: 'center', 
                            backgroundColor: "white", 
                            padding: '5px',
                            color: "rgba(27, 33, 49, 0.497)",
                            width: '60%',
                            fontSize: 'larger'
                        }}
                    >
                        <FaLinkedin style={{color: "rgba(27, 33, 49, 0.497)", fontSize: "2em"}}/>
                        Linkedin
                    </a>
                    <a href="https://wa.me/56962066078" 
                        style={{ 
                            display: 'flex', 
                            textAlign: 'center', 
                            justifyContent: 'space-around', 
                            alignSelf: 'center',
                            alignItems: 'center', 
                            backgroundColor: "white", 
                            padding: '5px',
                            color: 'rgba(27, 33, 49, 0.497)',
                            width: '60%',
                            fontSize: 'larger'
                        }}
                    >
                        <FaWhatsapp style={{color: "rgba(27, 33, 49, 0.497)", fontSize: "2em"}}/>
                        {/* <i class="fa-brands fa-whatsapp fa-xl"></i> */}
                        Whatsapp
                    </a>
                </Box>
            </Box>
        </section>
    )
}
export default ModalMenu