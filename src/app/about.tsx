export default function About(){
    return(
        <div className="about h-[90vh] font-[Ruberoid]">
            <div className="head flex ms-12 mt-12">
                <div className="button bg-[--light] w-[12rem] rounded-3xl py-3 text-lg"> 
                    <p className="ms-12">About Us</p>
                </div>
                <div className="class flex ms-auto me-8">
                    <div className="left bg-white size-8 rounded-full me-8">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="var(--foreground)" className="size-4 mt-[0.5rem] ms-auto me-auto">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </div>
                    <span className="text-[2rem] font-bold text-black">01<span className="font-light">/</span><span className="text-gray-500 font-semibold">08</span></span>
                    <div className="right ml-6 bg-white size-8 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="var(--foreground)" className="size-4 mt-[0.5rem] ms-auto me-auto">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        
    );
}