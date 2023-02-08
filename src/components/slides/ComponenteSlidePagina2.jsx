import slider2 from "../../assets/imgs/Svg-1.svg"
import { Link } from "react-router-dom"

const ComponenteSlidePagina2 = () => {
    return (
        <div className="h-screen py-20 flex justify-between items-center flex-col w-96 mx-auto p-5">
            <div className="flex justify-center items-center flex-col">
                <img src={slider2} alt="slider1" />
                <p className="mt-8 text-center">Choose where you want to deliver
                    by indicating on the map</p>
            </div>
            <button className="bienvenida w-full py-3 rounded-lg">
                <Link to={"/SlidePagina3"}>Next</Link>
            </button>
        </div>
    )
}

export default ComponenteSlidePagina2
