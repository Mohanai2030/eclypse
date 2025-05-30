export default function Convince(){
    return(
        <div className="mb-[18%] border-white border grid grid-cols-3 sm:grid-rows-[66vh_56vh] gap-y-8 gap-x-8 w-full ">
            <div className="col-start-1 col-end-3 overflow-hidden rounded-3xl">
                <video autoPlay loop muted>
                    <source src="/convincing.mp4" type="video/mp4"/>
                </video>
            </div>
            <div className="overflow-hidden rounded-3xl relative">
                <img src="/grid2.jpg" alt="" />
                <div className="absolute bg-black bg-opacity-50 inset-0 opacity-0 hover:opacity-100 duration-300 w-full h-full grid grid-rows-[60%_30%_10%]">
                    <div className="row-start-2 p-4 text-4xl text-bold ">Premium wool blend in signature vermilion</div>
                </div>
            </div>
            <div className="overflow-hidden rounded-3xl relative">
                <img src="/grid3.jpg" alt="" className="sm:h-[650px] w-auto translate-y-[-25%]"/>
                <div className="absolute bg-black bg-opacity-50 inset-0 opacity-0 hover:opacity-100 duration-300 w-full h-full grid grid-rows-[60%_30%_10%]">
                    <div className="row-start-2 p-4 text-4xl text-bold ">Discreet side pockets with clean finish</div>
                </div>
            </div>
            <div className="overflow-hidden rounded-3xl relative">
                <img src="/grid4.jpg" alt="" className="sm:h-auto sm:max-w-none sm:w-[580px] translate-x-[-15%]"/>
                <div className="absolute bg-black bg-opacity-50 inset-0 opacity-0 hover:opacity-100 duration-300 w-full h-full grid grid-rows-[60%_30%_10%]">
                    <div className="row-start-2 p-4 text-4xl text-bold ">Hand-cut and assembled in small batches</div>
                </div>
            </div>
            <div className="overflow-hidden rounded-3xl relative">
                <img src="/logo.jpg" alt="" />
                <div className="bg-black absolute inset-0 flex items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <img src="/Hero_header.png" alt="" />
                </div>
            </div>
        </div>
    )
}