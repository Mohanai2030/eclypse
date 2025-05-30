export default function Review(){
    return(
        <div className="w-full mt-20 mb-20">
            <div className="tracking-[3px] mb-20">OUR CUSTOMERS</div>
            <div className="w-full grid grid-cols-[8%_52%_20%_8%_12%] grid-rows-2">
                
                <div className="text-4xl sm:text-9xl">"</div>
                <div className="flex flex-col gap-20 justify-center">
                    <p className="sm:text-5xl ">Understated, but unforgettable. It feels like it was made for me</p>
                </div>
                
                <div className="row-start-2 col-start-2 self-center text-xs sm:text-xl">
                    <div className="">Random Woman</div>
                    <p className="text-gray-500 not-italic">NY,USA</p>
                </div>

                <div className="col-start-4 flex justify-center items-center ">
                    <img src="/reviewarrow.png" alt="" />
                </div>

                <div className="col-start-5 overflow-hidden rounded-full h-full aspect-square w-full">
                    <img src="/customer1.jpg" alt="" className="w-[100]"/>
                </div>
                <div className="col-start-5 flex justify-center items-center">
                    <div className="overflow-hidden rounded-full h-[55%] aspect-square relative">
                        <img src="/customer2.jpg" alt="" className="max-w-none w-[240px] translate-x-[-34%]"/>
                        <div className="absolute inset-0 w-full h-full bg-black bg-opacity-50"></div>
                    </div>
                </div>
                <div className="col-start-5 flex justify-center ">
                    <div className="col-start-5 overflow-hidden rounded-full h-[55%] aspect-square relative">
                        <img src="/customer3.jpg" alt="" />
                        <div className="absolute inset-0 w-full h-full bg-black bg-opacity-50"></div>
                    </div>
                </div>
                
            </div>
            <hr className="border-gray-500"/>
        </div>
    )
}