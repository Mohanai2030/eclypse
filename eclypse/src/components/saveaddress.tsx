import { useState } from "react";

export function Saveaddress(){
    let [address,setAddress] = useState('save')

    function storageAvailable() {
        let storage;
        try {
            storage = window['localStorage'];
            const x = "__storage_test__";
            storage.setItem(x, x);
            storage.removeItem(x);
            return true;
        } catch (e) {
            return (
            e instanceof DOMException &&
            e.name === "QuotaExceededError" &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage &&
            storage.length !== 0
            );
        }
    }


    return(
            <form className="border-gray-500 w-[50%] border rounded-xl p-8">
                    <div className="flex justify-center mb-5">
                        <button className="rounded-l-xl border-l-2 border-t-2 border-b-2 p-2">Save New Address</button>
                        <button className="rounded-r-xl border-2 p-2" disabled={storageAvailable()}>Choose a saved Address</button>
                    </div>
                    {address=='save'
                    ?<div className="flex flex-col gap-8">
                        <div className="flex w-full justify-between">
                            <div className="w-[45%]">
                                <label htmlFor="firstName">First Name:</label>
                                <input type="text" id="firstName" name="firstName" className="block w-full border-gray-500 border-2 h-[9vh] rounded-xl p-2"/>
                            </div>
                            <div className="w-[45%]">
                                <label htmlFor="lastName">Last Name:</label>
                                <input type="text" id="lastName" name="lastName" className="block w-full border-gray-500 border-2 rounded-xl p-2 h-[9vh]"/>
                            </div>
                        </div> 
                        <div>
                            <label htmlFor="address">Street Address:</label>
                            <input type="text" id="address" name="address" className="block w-full border-gray-500 border-2 rounded-xl p-2 h-[9vh]"/>
                        </div>      
                        <div className="flex w-full justify-between">
                            <div className="w-[30%]">
                                <label htmlFor="aptno">Apt No:</label>
                                <input type="number" id="aptno" name="aptno" className="block w-full border-gray-500 border-2 rounded-xl h-[9vh] p-2"/>
                            </div>
                            <div className="w-[30%]">
                                <label htmlFor="state">State:</label>
                                <input type="text" id="state" name="state" className="block w-full border-gray-500 border-2 rounded-xl p-2 h-[9vh]"/>
                            </div>
                            <div className="w-[30%]">
                                <label htmlFor="zip">Zip:</label>
                                <input type="text" id="zip" name="zip" className="block w-full border-gray-500 border-2 rounded-xl p-2 h-[9vh]"/>
                            </div>
                        </div>
                        <div className="flex w-full justify-between">
                            <button className="w-[30%] h-[9vh] border-gray-500 border rounded-xl px-8 py-2">Cancel</button>
                            <button className="w-[65%] h-[9vh] text-white bg-black rounded-xl px-8 py-2">Save this address</button>
                        </div>                 
                    </div>
                    :address=='choose'
                    ?<div>

                    </div>:<></>}
                    
            </form>
 
    )
}