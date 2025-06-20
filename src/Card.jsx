import images from './images.png'
function Card(){
    return(
        <div>
             <h1>Lovely Professional University</h1>
            <img src={images} alt="" />
            <ul>
            <li>Lovely Professional University empowers dreams.</li>
            <li>A hub of innovation and excellence.</li>
            <li>Shaping future leaders with knowledge.</li>
            </ul>
            <button>Submit</button>
        </div>
    )
}
export default Card