import { useState } from "react"

export default function OrderSummary(){
    let [quantity,setQuantity] = useState(0)
    return(
        <div className="bg-gray-200 w-1/2 rounded-xl p-8 w-[47%] flex flex-col gap-6">
            <p className="text-gray-500">By placing your order, you agree to our company <span className="text-black">Privacy policy</span> and <span className="text-black">Conditions of use</span>.</p>
            <hr className="border-t-2 w-full border-gray-400"/>

            <div>
                <h2 className="text-2xl mb-8">Order Summary</h2>
                <table className="border-separate border-spacing-3 ">
                    <thead>
                        <tr>
                            <th className="w-[60%]">Item Name</th>
                            <th className="w-[17%]">Price</th>
                            <th className="w-[5%]">Quantity</th>
                            <th className="w-[18%]">Total</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-500">
                        <tr >
                        <td className="">
                            Silhoutte No.1 Vermilion
                        </td>
                        <td className="text-center">
                            7999
                        </td>
                        <td className="">
                            <input type="number" value={quantity} onChange={(e)=>{setQuantity(Number(e.target.value))}} className="w-full rounded-xl text-center"/>
                        </td>
                        <td className="text-center">
                            {7999*quantity}
                        </td>
                        </tr>
                        <tr>
                            <td>Shipping and handling:</td>
                            <td></td>
                            <td></td>
                            <td className="text-center">200</td>
                        </tr>
                        <tr>
                            <td>Before Tax:</td>
                            <td></td>
                            <td></td>
                            <td className="text-center">6599</td>
                        </tr>
                        <tr>
                            <td>Tax Collected:</td>
                            <td></td>
                            <td></td>
                            <td className="text-center">1,400</td>
                        </tr>
                    </tbody>
                    <tr>
                        <td colSpan={4} className="pt-8">
                            <hr className="w-full border-gray-300" />
                        </td>
                    </tr>
                    
                    <tfoot>
                        <tr>
                            <td className="text-2xl">Order Total:</td>
                            <td></td>
                            <td></td>
                            <td className="text-center">{8199+(7999*quantity)}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <div className="flex w-full justify-center items-center">
                <button className="w-[80%] text-white bg-black py-3 px-12 rounded-xl">
                    Place Order
                </button>
            </div>
        </div>
    )
}