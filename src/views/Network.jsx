import { FaInstagram, FaFacebookSquare, FaLinkedin, FaGithub, FaWhatsapp} from "react-icons/fa";
import "../css/network.css";

export const Network = () => {
    return (
    <>
    <section id="networks" className="networks" style={{gridArea: "ren"}}>
        <a href="https://www.instagram.com/neyeskagoidas/" style={{background: "linear-gradient(#f9ce34, #ee2a7b, #6228d7)"}}>
            <FaInstagram style={{color:"white", fontSize: "2em"}}/>
            Instagram
        </a>
        <a href="https://wa.me/56962066078" style={{backgroundColor: "#25D366"}}>
            <FaWhatsapp style={{color:"white", fontSize: "2em"}}/>
            {/* <i class="fa-brands fa-whatsapp fa-xl"></i> */}
            Whatsapp
        </a>
        <a href="" style={{backgroundColor: "#3b5998"}}>
            <FaFacebookSquare style={{color: "white", fontSize: "2em"}}/>
            Facebook
        </a>
        <a href="https://github.com/NeyeskaMedina" style={{backgroundColor: "#171515"}}>
            <FaGithub style={{color: "white", fontSize: "2em"}}/>
            {/* <i class="fa-brands fa-github fa-xl"></i> */}
            GitHub
        </a>
        <a href="https://www.linkedin.com/in/neyeska-medina" style={{backgroundColor: "#0e76a8"}}>
            <FaLinkedin style={{color: "white", fontSize: "2em"}}/>
            Linkedin
        </a>
        <a href="" style={{backgroundColor: "#db4a39"}}>
            {/* <i class="fa-solid fa-envelope fa-xl"></i> */}
            neyeska.go@gmail.com
        </a>
        </section>
    </>
    )
}
