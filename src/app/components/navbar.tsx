

export default function NavBar() {
    return (
        <div className="navbar bg-gradient-to-r from-stone-100 to-orange-500">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">SukaRental</a>

            </div>
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="1.5em" viewBox="0 0 15 15"><path fill="currentColor" d="M7.5 0A5.5 5.5 0 0 0 2 5.5V10H1v1h13v-1h-1V5.5A5.5 5.5 0 0 0 7.5 0M5 12.5V12h5v.5a2.5 2.5 0 0 1-5 0"></path></svg>
                            <span className="badge badge-sm indicator-item">8</span>
                        </div>
                    </div>
                    <div
                        tabIndex={0}
                        className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-96 shadow">
                        <div className="card-body">
                            <div className="flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                                <div className="w-2 bg-gray-800 dark:bg-gray-900"></div>

                                <div className="flex items-center px-2 py-3">
                                    <img className="object-cover w-10 h-10 rounded-full" alt="User avatar" src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200" />

                                    <div className="mx-3">
                                        <p className="text-gray-600 dark:text-gray-200">new order from <a className="cursor-pointer text-blue-500 dark:text-blue-300 hover:text-blue-400 hover:underline">Sara</a>.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}