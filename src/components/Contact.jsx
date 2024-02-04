const Contact = () => {
    return (
        <div className=" py-8 lg:py-16 w-full">
            <div className="container mx-auto">
                <p className="text-[#e94452] uppercase tracking-[0.8rem] text-sm font-semibold mb-4 text-center">
                    Need a solution?
                </p>
                <p className="text-gray-700 mb-8 text-center p-2 font-bold text-3xl lg:text-4xl tracking-wider">
                    Contact Us
                </p>

                <div className="max-w-lg lg:my-0 lg:mx-auto bg-slate-300 rounded-md p-8">
                    <form className="w-full">
                        {/* -------------name---------- */}
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="name" type="text" placeholder="We would love to connect with you!" />
                            </div>
                        </div>
                        {/* -------------email---------- */}
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="Enter your Email" />
                            </div>
                        </div>
                        {/* -------------phone---------- */}
                        <div className="flex flex-wrap -mx-3 mb-2">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="contactNumber">
                                    Contact Number
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="contactNumber" type="tel" placeholder="Enter your contact number" />
                            </div>
                        </div>
                        {/* -------------dropdown---------- */}
                        
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
