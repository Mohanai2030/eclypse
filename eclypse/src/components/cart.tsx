
import axios from "axios"
import { useState, type ChangeEvent } from "react"
import toast,{Toaster} from "react-hot-toast"

export default function Cart(){
    let [address,setAddress] = useState({
        'firstName':"",
        'lastName':"",
        'address':"",
        'aptno':"",
        'state':"",
        'zip':""
    })


    let [saved,setSaved] = useState(false)
    let [ordered,setOrdered] = useState(false)

    function handleCancelClearButton(){
        if(saved){
            setSaved(false)
        }else{
            setAddress({
                'firstName':"",
                'lastName':"",
                'address':"",
                'aptno':"",
                'state':"",
                'zip':""
            })
        }
    }

    function placeOrder(){
        let order = {
            'quantity':quantity,
            'address':address,
            'item_name':'Silhoutte No.1 Vermilion',
            'total':quantity*7999+200
        }
        axios.post('http://localhost:3000/order',{'order':order})
        .then((res)=>{if(res.data=='Order placed successfully'){setOrdered(true);toast.success('Order was Placed Successfully')}})
        .catch((err)=>{toast.error(err.message)})
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setAddress((prev) => ({ ...prev, [name]: value }));
    };
    let [quantity,setQuantity] = useState(0)

    
    return(
        <div className="min-h-[90vh] p-5 mt-10 bg-white w-full rounded-xl text-black">
            <p>Shopping Cart</p>
            <Toaster/>
            <div className="flex w-full text-[18px] gap-[3%]">
                    <div className="border-gray-500 w-[50%] border rounded-xl p-8">
                    <div></div>
                    <div className="flex justify-center mb-5">
                        <div className="rounded-xl border-l-2 border-t-2 border-b-2 border-2 p-2">Address</div>
                        {/* <button className="rounded-r-xl border-2 p-2">Choose a saved Address</button> */}
                    </div>
                    <div className="flex flex-col gap-8">
                        <div className="flex w-full justify-between">
                            <div className="w-[45%]">
                                <label htmlFor="firstName">First Name:</label>
                                <input type="text" id="firstName" name="firstName" className="block w-full border-gray-500 border-2 h-[9vh] rounded-xl p-2" value={address.firstName} onChange={(e)=>{handleChange(e)}} disabled={saved}/>
                            </div>
                            <div className="w-[45%]">
                                <label htmlFor="lastName">Last Name:</label>
                                <input type="text" id="lastName" name="lastName" className="block w-full border-gray-500 border-2 rounded-xl p-2 h-[9vh]" value={address.lastName} onChange={(e)=>{handleChange(e)}} disabled={saved}/>
                            </div>
                        </div> 
                        <div>
                            <label htmlFor="address">Street Address:</label>
                            <input type="text" id="address" name="address" className="block w-full border-gray-500 border-2 rounded-xl p-2 h-[9vh]" value={address.address} onChange={(e)=>{handleChange(e)}} disabled={saved}/>
                        </div>      
                        <div className="flex w-full justify-between">
                            <div className="w-[30%]">
                                <label htmlFor="aptno">Apt No:</label>
                                <input type="number" id="aptno" name="aptno" className="block w-full border-gray-500 border-2 rounded-xl h-[9vh] p-2" value={address.aptno} onChange={(e)=>{handleChange(e)}} disabled={saved}/>
                            </div>
                            <div className="w-[30%]">
                                <label htmlFor="state">State:</label>
                                <input type="text" id="state" name="state" className="block w-full border-gray-500 border-2 rounded-xl p-2 h-[9vh]" value={address.state} onChange={(e)=>{handleChange(e)}} disabled={saved}/>
                            </div>
                            <div className="w-[30%]">
                                <label htmlFor="zip">Zip:</label>
                                <input type="text" id="zip" name="zip" className="block w-full border-gray-500 border-2 rounded-xl p-2 h-[9vh]" value={address.zip} onChange={(e)=>{handleChange(e)}} disabled={saved}/>
                            </div>
                        </div>
                        <div className="flex w-full justify-between">
                            <button className="w-[30%] h-[9vh] border-gray-500 border rounded-xl px-8 py-2" onClick={handleCancelClearButton}>{saved?"Unsave":"Clear All"}</button>
                            <button className="w-[65%] h-[9vh] text-white bg-black rounded-xl px-8 py-2" onClick={()=>{setSaved(true)}}>Save this address</button>
                        </div>                 
                    </div> 
            </div>
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
                                <td className="text-center">{quantity>0?200:''}</td>
                            </tr>
                            <tr>
                                <td>Before Tax:</td>
                                <td></td>
                                <td></td>
                                <td className="text-center">{quantity>0?Math.round(0.8*(200+7999*quantity)):''}</td>
                            </tr>
                            <tr>
                                <td>Tax Collected:</td>
                                <td></td>
                                <td></td>
                                <td className="text-center">{quantity>0?Math.round(0.2*(200+7999*quantity)):''}</td>
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
                                <td className="text-center">{quantity>0?200+(7999*quantity):''}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <div className="flex w-full justify-center items-center">
                    <button className="w-[80%] text-white bg-black py-3 px-12 rounded-xl" onClick={placeOrder}>
                        Place Order
                    </button>
                </div>
            </div>
            </div>
        </div>
    )
}