export default function Nav(){
    return(
        <div className="flex mt-8">
            <div className="flame size-10 ml-6 bg-[--foreground] rounded-full place-content-center">
                <svg fill="none" className="h-[1.5rem] w-[1.75rem] ms-auto me-auto" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m8.00006 15.3333c-1.0019-.0001-1.98066-.3011-2.80939-.8642-.82873-.563-1.46921-1.362-1.83838-2.2934s-.45001-1.9522-.23204-2.93015c.21797-.9779.7247-1.86776 1.45448-2.55422.89467-.842 3.092-2.358 2.75867-5.69133 4 2.66667 6 5.33333 2 9.3333.6667 0 1.6667 0 3.3333-1.64663.18.51533.3334 1.06933.3334 1.64663 0 1.3261-.5268 2.5979-1.4645 3.5356-.9377.9376-2.20945 1.4644-3.53554 1.4644z" fill="white"/></svg>
            </div>
        <div className="nav tracking-wider font-[Ruberoid] text-black ms-auto me-auto flex w-[56rem] border-2 border-white rounded-3xl py-2">
            <ul className="flex ms-[15rem] mt-1 me-auto">
                <li className="-ms-48 cursor-pointer me-12 text-lg list-none">Home</li>
                <li className="ms-32 cursor-pointer me-12 text-lg list-none">Features</li>
                <li className="ms-32 cursor-pointer me-12 text-lg list-none">Pricing</li>
                <li className="ms-32 cursor-pointer text-xl list-none">Blog</li>
            </ul>
        </div>
        <div className="bars size-10 mr-6 bg-[--foreground] rounded-full place-content-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="size-6 ms-auto me-auto" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
            </svg>
        </div>
        </div>
    )
}