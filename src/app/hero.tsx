import man from "./assets/img/right.png";
import one from "./assets/img/one.png";
import two from "./assets/img/two.png";
import three from "./assets/img/three.png";
import top from "./assets/img/front.png";
export default function Hero(){
    return(
        <div className="flex text-black">
            <div className="man h-[34rem] w-[14rem] border-2 border-white rounded-3xl ms-7 mt-14">
                    <div className="flame size-16 ms-[12rem] -mt-8 bg-[--foreground] rounded-full place-content-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className="ms-auto me-auto" viewBox="0 0 16 16" stroke="white" strokeWidth="1">
                                <path fillRule="evenodd" d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2"/>
                        </svg>
                     </div>
               <div className="img"><img src={man.src} alt="" className="man-img" /></div> 
            </div>

            <div className="descr ms-[6rem]">
                <h1 className="text-[8.5rem] leading-[7rem] mt-20 font-bold w-12 font-[Ruberoid] text-wrap">
                    Pulse Heart
                </h1>
                <p className="max-w-[24rem] leading-5 ms-3 mt-5 text-base font-[Ruberoid] text-gray-600 font-light tracking-wider">
                    Unleash the power of our <br />smartwatch activity tracker app and supercharge your fitness regimen 
                </p>

                <div className="buttons flex mt-12">
                    <div className="apple size-12 ml-28 bg-[--light] rounded-full place-content-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 ms-auto me-auto" fill="var(--foreground)" viewBox="0 0 16 16">
                            <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282"/>
                            <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282"/>
                        </svg>
                    </div>
                    <div className="windows size-12 ml-6 bg-[--light] rounded-full place-content-center">
                        <svg xmlns="http://www.w3.org/2000/svg"  fill="var(--foreground)" className="size-5 ms-auto me-auto" viewBox="0 0 16 16">
                                <path d="M6.555 1.375 0 2.237v5.45h6.555zM0 13.795l6.555.933V8.313H0zm7.278-5.4.026 6.378L16 16V8.395zM16 0 7.33 1.244v6.414H16z"/>
                        </svg>
                    </div>
                    <div className="huawei size-12 ml-6 bg-[--light] rounded-full place-content-center">
                        <svg fill="var(--foreground)" className="size-5 ms-auto me-auto" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><path d="M3.67 6.14S1.82 7.91 1.72 9.78v.35c.08 1.51 1.22 2.4 1.22 2.4 1.83 1.79 6.26 4.04 7.3 4.55 0 0 .06.03.1-.01l.02-.04v-.04C7.52 10.8 3.67 6.14 3.67 6.14zM9.65 18.6c-.02-.08-.1-.08-.1-.08l-7.38.26c.8 1.43 2.15 2.53 3.56 2.2.96-.25 3.16-1.78 3.88-2.3.06-.05.04-.09.04-.09zm.08-.78C6.49 15.63.21 12.28.21 12.28c-.15.46-.2.9-.21 1.3v.07c0 1.07.4 1.82.4 1.82.8 1.69 2.34 2.2 2.34 2.2.7.3 1.4.31 1.4.31.12.02 4.4 0 5.54 0 .05 0 .08-.05.08-.05v-.06c0-.03-.03-.05-.03-.05zM9.06 3.19a3.42 3.42 0 0 0-2.57 3.15v.41c.03.6.16 1.05.16 1.05.66 2.9 3.86 7.65 4.55 8.65.05.05.1.03.1.03a.1.1 0 0 0 .06-.1c1.06-10.6-1.11-13.42-1.11-13.42-.32.02-1.19.23-1.19.23zm8.299 2.27s-.49-1.8-2.44-2.28c0 0-.57-.14-1.17-.22 0 0-2.18 2.81-1.12 13.43.01.07.06.08.06.08.07.03.1-.03.1-.03.72-1.03 3.9-5.76 4.55-8.64 0 0 .36-1.4.02-2.34zm-2.92 13.07s-.07 0-.09.05c0 0-.01.07.03.1.7.51 2.85 2 3.88 2.3 0 0 .16.05.43.06h.14c.69-.02 1.9-.37 3-2.26l-7.4-.25zm7.83-8.41c.14-2.06-1.94-3.97-1.94-3.98 0 0-3.85 4.66-6.67 10.8 0 0-.03.08.02.13l.04.01h.06c1.06-.53 5.46-2.77 7.28-4.54 0 0 1.15-.93 1.21-2.42zm1.52 2.14s-6.28 3.37-9.52 5.55c0 0-.05.04-.03.11 0 0 .03.06.07.06 1.16 0 5.56 0 5.67-.02 0 0 .57-.02 1.27-.29 0 0 1.56-.5 2.37-2.27 0 0 .73-1.45.17-3.14z"/></svg>
                    </div>
                    <button className="try text-lg w-[10rem] ml-6 py-2 rounded-3xl bg-[--foreground] text-white">
                        Try Now
                    </button>
            </div>
                    <div className="feat flex gap-14 mt-12 ms-[6.8rem]">
                        <div className="users font-[Ruberoid]">
                            <div className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="var(--foreground)" className="size-4 mt-1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                                <p className="text-2xl">5.1mil</p>
                            </div>
                            <span className="text-gray-600 -ms-3">Happy User</span>
                        </div>

                        <div className="track font-[Ruberoid]">
                            <div className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="var(--foreground)" className="size-4 mt-1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                                <p className="text-2xl">800k</p>
                            </div>
                            <span className="text-gray-600 -ms-3">Sport Track</span>
                        </div>

                        <div className="type font-[Ruberoid]">
                            <div className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="var(--foreground)" className="size-4 mt-1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                                <p className="text-2xl">200</p>
                            </div>
                            <span className="text-gray-600 -ms-3">Sport Type</span>
                        </div>
                    </div>
            </div>
            <div className="right">
                <div className="three flex ms-[18rem] mt-16">
                    <div className="left bg-[#dfdfdf] size-8 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="var(--foreground)" className="size-4 mt-[0.5rem] ms-auto me-auto">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </div>
                    <img src={one.src} alt="" className=" size-16 -mt-3 ml-5 rounded-full border-2 border-white"/>
                        <div className="relative size-16 -mt-3 ml-5 rounded-full border-2 border-transparent">
                            <img src={two.src} alt="" className="rounded-full w-full h-full" />
                            <div className="absolute inset-0 rounded-full border-2 border-transparent" style={{ borderColor: 'var(--foreground)', clipPath: 'polygon(0 0, 40% 0, 100% 100%, 0 100%)' }}></div>
                        </div>
                    <img src={three.src} alt="" className=" size-16 -mt-3 ml-5 rounded-full border-2 border-white"/>

                    <div className="right ml-6 bg-[#dfdfdf] size-8 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="var(--foreground)" className="size-4 mt-[0.5rem] ms-auto me-auto">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </div>
                <div className="pulse -mt-24">
                    <div className="circle mt-44 size-[19rem] bg-gray-200 rounded-full ml-[20rem] shadow-2xl1"></div>
                            <img src={top.src} alt="" className="watch -mt-[24rem] ml-[17rem]"/>
                    </div>
               </div>

        
        </div>
    )
}