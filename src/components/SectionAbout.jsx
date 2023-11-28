import { FaHeart } from "react-icons/fa";



export const SectionAbout = () => {
    return (
        <section className="sectionPrime">
            <div className="liked-img">
                <img className='imgMe' title='Neyeska Goidas' style={{border: "1px solid rgb(2, 10, 31)"}} src="./public/img/i.jpg" alt="" width='190px' height='210px'/>
                <div className="likeds">
                    <FaHeart className="heart"/>
                    <p>Liked</p>
                </div>
            </div>
            <main className='descriptionPrime'>
                <h4>Hi, tell me Neye </h4>
                <p>I'm Develop Web Fullstack 🥇🚀</p>
            </main>        
        </section>
    )
}
export default SectionAbout