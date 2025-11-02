import Image from "next/image";
import ButtonBlack from "@/components/ButtonBlack/ButtonBlack";


export default function Home() {
    return (
        <>
            <section className="  flex flex-col items-center">
                <div className=" text-black flex flex-wrap  gap-5 justify-center">
                    <div className=" w-[400px] flex flex-col gap-5">
                        <div className="">
                            <h1 className="text-6xl font-extrabold">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                        </div>
                        <div className=" text-[12px]">
                            <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                        </div>
                        <div>
                            <ButtonBlack content="Shop New"/>
                        </div>
                        <div className="flex gap-5">
                            <div className="p-2">
                                <h2 className="font-medium text-3xl">200+</h2>
                                <p>International Brands</p>
                            </div>
                            <div className="border-l border-r border-gray-400 p-2">
                                <h2 className="font-medium text-3xl">2,000+</h2>
                                <p>High-Quality Products</p>
                            </div>
                            <div className="p-2">
                                <h2 className="font-medium text-3xl">30,000+</h2>
                                <p>Happy Customers</p>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <img src="/images/photo_home.png" alt="" className="w-[400px]"/>
                    </div>
                </div>
                <div className="h-[15vh] bg-black w-full text-white ">
                    <div>
                        
                    </div>
                </div>
            </section>
        </>
    );
}
