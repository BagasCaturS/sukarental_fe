
export default function Sidebar() {
    return (
        <aside className="flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
            {/* <a href="#">
                <img className="w-auto h-7" src="https://merakiui.com/images/logo.svg" alt=""/>
            </a> */}

            <div className="flex flex-col justify-between flex-1 mt-6">
                <nav className="-mx-3 space-y-6 ">
                    <div className="space-y-3 ">
                        <label className="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">analytics</label>

                        <a className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15"><path fill="currentColor" d="m7.5.5l.325-.38a.5.5 0 0 0-.65 0zm-7 6l-.325-.38L0 6.27v.23zm5 8v.5a.5.5 0 0 0 .5-.5zm4 0H9a.5.5 0 0 0 .5.5zm5-8h.5v-.23l-.175-.15zM1.5 15h4v-1h-4zm13.325-8.88l-7-6l-.65.76l7 6zm-7.65-6l-7 6l.65.76l7-6zM6 14.5v-3H5v3zm3-3v3h1v-3zm.5 3.5h4v-1h-4zm5.5-1.5v-7h-1v7zm-15-7v7h1v-7zM7.5 10A1.5 1.5 0 0 1 9 11.5h1A2.5 2.5 0 0 0 7.5 9zm0-1A2.5 2.5 0 0 0 5 11.5h1A1.5 1.5 0 0 1 7.5 10zm6 6a1.5 1.5 0 0 0 1.5-1.5h-1a.5.5 0 0 1-.5.5zm-12-1a.5.5 0 0 1-.5-.5H0A1.5 1.5 0 0 0 1.5 15z"></path></svg>

                            <span className="mx-2 text-sm font-medium">Dashboard</span>
                        </a>

                        <a className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15"><path fill="currentColor" d="M.5 14.5H0v.5h.5zm6-9l.4-.3a.5.5 0 0 0-.816.023zm3 4l-.4.3a.5.5 0 0 0 .807-.01zM0 0v14.5h1V0zm.5 15H15v-1H.5zm2.416-3.223l4-6l-.832-.554l-4 6zM6.1 5.8l3 4l.8-.6l-3-4zm3.807 3.99l5-7l-.814-.58l-5 7z"></path></svg>

                            <span className="mx-2 text-sm font-medium">Performance</span>
                        </a>
                    </div>

                    <div className="space-y-3 ">
                        <label className="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">content</label>

                        <a className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="/pages/orders">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15"><path fill="currentColor" d="M4.5 6.995H4v1h.5zm6 1h.5v-1h-.5zm-6 1.998H4v1h.5zm6 1.007h.5v-1h-.5zm-6-7.003H4v1h.5zM8.5 5H9V4h-.5zm2-4.5l.354-.354L10.707 0H10.5zm3 3h.5v-.207l-.146-.147zm-9 4.495h6v-1h-6zm0 2.998l6 .007v-1l-6-.007zm0-5.996L8.5 5V4l-4-.003zm8 9.003h-10v1h10zM2 13.5v-12H1v12zM2.5 1h8V0h-8zM13 3.5v10h1v-10zM10.146.854l3 3l.708-.708l-3-3zM2.5 14a.5.5 0 0 1-.5-.5H1A1.5 1.5 0 0 0 2.5 15zm10 1a1.5 1.5 0 0 0 1.5-1.5h-1a.5.5 0 0 1-.5.5zM2 1.5a.5.5 0 0 1 .5-.5V0A1.5 1.5 0 0 0 1 1.5z"></path></svg>

                            <span className="mx-2 text-sm font-medium">Orders</span>
                        </a>

                        <a className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="/pages/vehiclestable">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15"><path fill="currentColor" d="M14.5 6.497h.5v-.139l-.071-.119zm-14 0l-.429-.258L0 6.36v.138zm2.126-3.541l-.429-.258zm9.748 0l.429-.258zM3.5 11.5V11H3v.5zm8 0h.5V11h-.5zM14 6.497V12.5h1V6.497zM.929 6.754l2.126-3.54l-.858-.516L.071 6.24zM5.198 2h4.604V1H5.198zm6.747 1.213l2.126 3.541l.858-.515l-2.126-3.54zM2.5 13h-1v1h1zm.5-1.5v1h1v-1zM13.5 13h-1v1h1zm-1.5-.5v-1h-1v1zm-.5-1.5h-8v1h8zM1 12.5V6.497H0V12.5zm11.5.5a.5.5 0 0 1-.5-.5h-1a1.5 1.5 0 0 0 1.5 1.5zm-10 1A1.5 1.5 0 0 0 4 12.5H3a.5.5 0 0 1-.5.5zm-1-1a.5.5 0 0 1-.5-.5H0A1.5 1.5 0 0 0 1.5 14zM9.802 2a2.5 2.5 0 0 1 2.143 1.213l.858-.515A3.5 3.5 0 0 0 9.802 1zM3.055 3.213A2.5 2.5 0 0 1 5.198 2V1a3.5 3.5 0 0 0-3 1.698zM14 12.5a.5.5 0 0 1-.5.5v1a1.5 1.5 0 0 0 1.5-1.5zM2 10h3V9H2zm11-1h-3v1h3zM3 7h9V6H3z"></path></svg>

                            <span className="mx-2 text-sm font-medium">Vehicles Table</span>
                        </a>

                        <a className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="/pages/userstable">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15"><path fill="currentColor" d="M10.5 14.49v.5h.5v-.5zm-10 0H0v.5h.5zm14 .01v.5h.5v-.5zM8 3.498a2.5 2.5 0 0 1-2.5 2.498v1C7.433 6.996 9 5.43 9 3.498zM5.5 5.996A2.5 2.5 0 0 1 3 3.498H2a3.5 3.5 0 0 0 3.5 3.498zM3 3.498A2.5 2.5 0 0 1 5.5 1V0A3.5 3.5 0 0 0 2 3.498zM5.5 1A2.5 2.5 0 0 1 8 3.498h1A3.5 3.5 0 0 0 5.5 0zm5 12.99H.5v1h10zm-9.5.5v-1.996H0v1.997zm2.5-4.496h4v-1h-4zm6.5 2.5v1.997h1v-1.997zm-2.5-2.5a2.5 2.5 0 0 1 2.5 2.5h1a3.5 3.5 0 0 0-3.5-3.5zm-6.5 2.5a2.5 2.5 0 0 1 2.5-2.5v-1a3.5 3.5 0 0 0-3.5 3.5zM14 13v1.5h1V13zm.5 1H12v1h2.5zM12 11a2 2 0 0 1 2 2h1a3 3 0 0 0-3-3zm-.5-3A1.5 1.5 0 0 1 10 6.5H9A2.5 2.5 0 0 0 11.5 9zM13 6.5A1.5 1.5 0 0 1 11.5 8v1A2.5 2.5 0 0 0 14 6.5zM11.5 5A1.5 1.5 0 0 1 13 6.5h1A2.5 2.5 0 0 0 11.5 4zm0-1A2.5 2.5 0 0 0 9 6.5h1A1.5 1.5 0 0 1 11.5 5z"></path></svg>
                            <span className="mx-2 text-sm font-medium">Users Table</span>
                        </a>
                        <a className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="/pages/payment">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15"><path fill="none" stroke="currentColor" d="M.5 5.5h14M2 9.5h6m2 0h3M.5 3.5v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-12a1 1 0 0 0-1 1Z"></path></svg>
                            <span className="mx-2 text-sm font-medium">Payment Table</span>
                        </a>
                    </div>

                    <div className="space-y-3 ">
                        <label className="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">Customization</label>

                        <a className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="/pages/profile">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15"><path fill="currentColor" d="M3 13v.5h1V13zm8 0v.5h1V13zm-7 0v-.5H3v.5zm2.5-3h2V9h-2zm4.5 2.5v.5h1v-.5zM8.5 10a2.5 2.5 0 0 1 2.5 2.5h1A3.5 3.5 0 0 0 8.5 9zM4 12.5A2.5 2.5 0 0 1 6.5 10V9A3.5 3.5 0 0 0 3 12.5zM7.5 3A2.5 2.5 0 0 0 5 5.5h1A1.5 1.5 0 0 1 7.5 4zM10 5.5A2.5 2.5 0 0 0 7.5 3v1A1.5 1.5 0 0 1 9 5.5zM7.5 8A2.5 2.5 0 0 0 10 5.5H9A1.5 1.5 0 0 1 7.5 7zm0-1A1.5 1.5 0 0 1 6 5.5H5A2.5 2.5 0 0 0 7.5 8zm0 7A6.5 6.5 0 0 1 1 7.5H0A7.5 7.5 0 0 0 7.5 15zM14 7.5A6.5 6.5 0 0 1 7.5 14v1A7.5 7.5 0 0 0 15 7.5zM7.5 1A6.5 6.5 0 0 1 14 7.5h1A7.5 7.5 0 0 0 7.5 0zm0-1A7.5 7.5 0 0 0 0 7.5h1A6.5 6.5 0 0 1 7.5 1z"></path></svg>

                            <span className="mx-2 text-sm font-medium">Profile</span>
                        </a>

                        <a className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="/pages/settings">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15"><g fill="none" fillRule="evenodd" stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" clipRule="evenodd"><path d="m5.944.5l-.086.437l-.329 1.598a5.5 5.5 0 0 0-1.434.823L2.487 2.82l-.432-.133l-.224.385L.724 4.923L.5 5.31l.328.287l1.244 1.058c-.045.277-.103.55-.103.841s.058.565.103.842L.828 9.395L.5 9.682l.224.386l1.107 1.85l.224.387l.432-.135l1.608-.537c.431.338.908.622 1.434.823l.329 1.598l.086.437h3.111l.087-.437l.328-1.598a5.5 5.5 0 0 0 1.434-.823l1.608.537l.432.135l.225-.386l1.106-1.851l.225-.386l-.329-.287l-1.244-1.058c.046-.277.103-.55.103-.842c0-.29-.057-.564-.103-.841l1.244-1.058l.329-.287l-.225-.386l-1.106-1.85l-.225-.386l-.432.134l-1.608.537a5.5 5.5 0 0 0-1.434-.823L9.142.937L9.055.5z"></path><path d="M9.5 7.495a2 2 0 0 1-4 0a2 2 0 0 1 4 0Z"></path></g></svg>

                            <span className="mx-2 text-sm font-medium">Setting</span>
                        </a>
                    </div>
                </nav>
            </div>
        </aside>
    );
}