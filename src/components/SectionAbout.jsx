import { useContext, useEffect, useState } from "react";
import { AiFillEnvironment } from "react-icons/ai";
import { UserContext } from "../context/UserContext";

export const SectionAbout = () => {
    const { ligthMode } = useContext(UserContext);
    const [ count, setCount ] = useState(100);
    const [ heart, setHeart ] = useState(false);
    const handleLike = () => {
        if(heart !== true){
            setCount(count + 1)
            const like = document.querySelector('.likeds .svgHeart');
            like.style.fill = "rgb(93, 0, 180)";
            setHeart(true)
        } else {
            setHeart(false);
            const like = document.querySelector('.likeds .svgHeart');
            ligthMode ? like.style.fill = "rgb(2, 10, 31)" : like.style.fill = "white";
            setCount(count - 1)
        };
    }
    return (
        <section className="sectionPrime">
            <div className="liked-img">
                <img className='imgMe' 
                    src='/img/i.jpg'
                    alt="" 
                    width='190px' 
                    height='210px' 
                    title='Neyeska Goidas' 
                    style={{border: "1px solid rgb(93, 0, 180)"}}
                />
                <div className="likeds">
                    <svg className="svgHeart" onClick={handleLike} fill="#ffffff" stroke="none" version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="25px" height="25px" viewBox="0 0 1280.000000 1189.000000"
                        preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,1189.000000) scale(0.100000,-0.100000)"
                    >
                    <path d="M2980 11763 c-848 -26 -1656 -457 -2177 -1163 -739 -1002 -839 -2418
                    -277 -3927 742 -1992 2563 -4072 5324 -6084 234 -171 529 -379 545 -385 18 -7
                    441 293 890 630 1976 1483 3442 3004 4339 4499 570 950 892 1837 993 2742 21
                    188 24 685 5 855 -52 462 -163 855 -343 1214 -166 330 -337 565 -602 823 -215
                    209 -424 359 -687 492 -449 228 -892 322 -1410 299 -991 -43 -1937 -632 -2597
                    -1618 -171 -255 -391 -672 -513 -972 -35 -87 -67 -155 -71 -150 -4 4 -35 77
                    -70 162 -82 201 -255 547 -362 727 -626 1046 -1484 1677 -2483 1828 -114 17
                    -375 32 -504 28z"/>
                    </g>
                    </svg>
                    <p>{count} Like</p>
                </div>
            </div>
            <main className='descriptionPrime'>
                <h4>Hi, tell me Neye 🚀</h4>
                <p>🥇I'm Develop Web Fullstack</p>
                <a href="https://desafiosdev.s3.amazonaws.com/uploads/certification/image/31361/certificacion-aprobacion-de-carrera-nuevo-proyecto-final-g43-14335(3).png" style={{textAlign: "center"}}>📌Title</a>
                <p className="pUbi"><AiFillEnvironment className="iconUbi"/> Chile</p>
            </main>        
        </section>
    )
}
export default SectionAbout