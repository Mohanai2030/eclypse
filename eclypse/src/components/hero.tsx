import { useState } from "react"


export default function Hero(){
    const [hover, setHover] = useState(false);

    return (
        <div className="mt-[10%] mb-[10%]">
            <div className="flex justify-between">
                <img src="/Hero_header.png" alt="" />
                <div className=" self-end"><p>&copy;2025</p></div>
            </div>
            <div className="mt-10 mb-[13%] overflow-hidden w-100 h-[500px] border-whit borde rounded-2xl relative">
                <video autoPlay loop muted className="rounded-xl mt-[-15%]"> 
                    <source src="/hero.mp4" type="video/mp4"/>
                </video>
                <div className="absolute top-[87%] right-[1%] text-4xl ">
                    A silhoutte worth remembering
                </div>
            </div>
            <div className="text-5xl w-[74%] leading-[1.25] mb-20">
                <h1>
                    Rooted in a philosophy of quiet luxury, our garments are designed to speak softly in cut, in movement, in presence.
                </h1>
            </div>
           <button
  className="relative flex items-center gap-2 border-white border-b-2 w-fit overflow-hidden"
  onMouseEnter={() => setHover(true)}
  onMouseLeave={() => setHover(false)}
>
  <div
    className={`text-3xl pb-1 duration-300 transition-all ${
      hover ? "bg-white text-black translate-x-4 -mx-2 px-6" : "px-2"
    }`}
  >
    Learn more about eclypse
  </div>
  <img
    src="/arrow-right.png"
    alt=""
    className={`h-6 w-6 transition-opacity duration-300 ${
      hover ? "opacity-0" : "opacity-100"
    }`}
  />
</button>
        </div>
        
    )
}