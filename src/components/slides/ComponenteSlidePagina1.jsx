import slider1 from "../../assets/imgs/Svg.svg"
import { Link } from "react-router-dom"

const ComponenteSlidePagina1 = () => {
  return (
    <div className="h-screen py-20 flex justify-between items-center flex-col w-96 mx-auto p-5">
      <div className="flex justify-center items-center flex-col">
        <img src={slider1} alt="slider1" />
        <p className="mt-8 text-center">Choose what to eat choosing from <br />
          a variety of restaurants from the list</p>
      </div>
      <button className="bienvenida w-full py-3 rounded-lg">
        <Link to={"/SlidePagina2"}>Next</Link>
      </button>
    </div>
  )
}

export default ComponenteSlidePagina1
