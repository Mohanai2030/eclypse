import { Link } from "react-router-dom";

export default function Header(){
    return (
        <div className="flex justify-between borde border-whit pt-4 pl-4 text-xl w-[100%]">
            <div className="">
                <Link to={'/'}>
                    <img src="../../public/logo.jpg" alt="" height="73px" width="58px"/>
                </Link>
            </div>
            <div className="flex gap-16 justify-center items-center">
                <div>About Us</div>
                <div>Waitlist</div>
                <Link to={'/cart'}><div>Cart</div></Link>
                <div><button className="bg-white rounded-xl text-black p-2 pl-7 pr-7 text-2xl">Buy</button></div>
            </div>
        </div>
    )
}