export default function Shopping(){
    return(
        <div className="mb-16 flex flex-col w-full">
            <div className="text-5xl mb-[10%]">
                <h2>Silhoutte No.1 - Vermilion</h2>
            </div>
            <div className="flex border-white border-2 h-[120vh] w-[107%] translate-x-[-3.5%]">
                <div className="w-1/2 overflow-hidden">
                    <video autoPlay loop muted className="mt-[-35%]">
                        <source src="/shopping.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div className="w-1/2 bg-white text-black flex flex-col items-center gap-10 h-full py-14 px-10">
                    <div className="h-[10%]">
                        <p className="font-[600]">A tailored composition in motion. Cut from structured wool with a sculpted shoulder and softened hem, this piece captures presence without force. Worn here in the stillness of a city in motion.</p>
                    </div>
                    <div className="flex w-full gap-4 justify-center">
                        <div>
                            <img src="/shopping1.jpg" alt="" height="90px" width="180px"/>
                        </div>
                        <div>
                            <img src="/shopping2.jpg" alt="" height="90px" width="180px"/>
                        </div>
                        <div>
                            <img src="/shopping3.jpg" alt="" height="90px" width="180px"/>
                        </div>
                    </div>
                    <hr className="w-full border-t-[3.1px]"/>
                    <div className="w-full flex flex-col justify-around gap-5">
                        <div className="font-light text-gray-500"><span className="text-4xl font-semibold mr-3 text-black">₹ 7999</span> MRP incl. of all taxes</div>
                        <div>
                            <h3 className="text-2xl text-gray-500">Please select a size <span className="text-sm border-b-2 ml-5"> Size chart</span></h3>
                        </div>
                        
                        <div className="flex gap-10 ">
                            <div className="bg-gray-200 w-fit p-3 pl-7 pr-7 rounded">XS</div>
                            <div className="bg-gray-200 w-fit p-3 pl-7 pr-7 rounded">S</div>
                            <div className="bg-gray-200 w-fit p-3 pl-7 pr-7 rounded">M</div>
                            <div className="bg-gray-200 w-fit p-3 pl-7 pr-7 rounded">L</div>
                            <div className="bg-gray-200 w-fit p-3 pl-7 pr-7 rounded">XL</div>
                        </div>
                    </div>

                    <hr className="w-full border-t-[3.1px]"/>

                    <div className="flex w-full gap-[4%]">
                        <button className="w-[31%] p-2 border-2 border-gray-400 rounded-xl">Add to Cart</button>
                        <button className="w-[65%] p-2 rounded-xl bg-black text-white hover:bg-red-900">Buy</button>
                    </div>

                </div>
            </div>
            <div className="mt-20">
                <div className="inline-flex w-full justify-between items-center">
                    <span className="text-4xl">Size & Fit</span>
                    <img src="/downarrow.png" alt="" className="translate-y-12"/>
                </div>
                <hr className="border-gray-500 border-t w-full"/>
                <div className="inline-flex w-full justify-between items-center">
                    <span className="text-4xl">Delivery & Returns</span>
                    <img src="/downarrow.png" alt="" className="translate-y-12"/>
                </div>
                <hr className="border-gray-500 border-t w-full"/>
                <div className="inline-flex w-full justify-between items-center">
                    <span className="text-4xl">How was this made</span>
                    <img src="/downarrow.png" alt="" className="translate-y-12"/>
                </div>
                <hr className="border-gray-500 border-t w-full"/>
            </div>
        </div>
    )
}