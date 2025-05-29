export function Footer(){
    return(
        <div className="mt-20 pb-10 w-full grid grid-cols-[15%_25%_52%_8%]">
            <div className="flex flex-col gap-10">
                <img src="/Hero_header.png" alt="" width="100"/>
                <div>Home <span className="text-gray-500">/</span> About <span className="text-gray-500">/</span> Buy <span className="text-gray-500">/</span><br/>Our Customers <span className="text-gray-500">/</span><br/>Contacts</div>
            </div>
            <address className="not-italic flex flex-col gap-10">
                <p className="tracking-[3px] text-gray-500 text-sm">CONTACT<br/><a href="tel:1234567890" className="text-2xl text-white">+91 123-456-7890</a></p>

                <p className="tracking-[3px] text-gray-500 text-sm">EMAIL<br/><a href="mailto:eclypse@gmail.com" className="text-2xl text-white">eclypse@gmail.com</a></p>
            </address>
            <div className="col-start-4 flex flex-col justify-between">
                <button className="self-end">
                    <img src="/totop.png" alt="" />
                </button>
                <div className="text-sm text-gray-500">&copy; Eclypse 2025</div>
            </div>
        </div>
    )
}