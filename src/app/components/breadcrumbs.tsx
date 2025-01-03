export default function Breadcrumbs() {
    return (
        <div className="flex items-center overflow-x-auto whitespace-nowrap">
            <a href="#" className="text-slate-900 dark:text-slate-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
            </a>

            <span className="mx-5 text-slate-800 dark:text-slate-900">
                /
            </span>

            <a href="#" className="text-slate-900 dark:text-slate-800 hover:underline">
                Account
            </a>

            <span className="mx-5 text-slate-800 dark:text-slate-900">
                /
            </span>

            <a href="#" className="text-slate-900 dark:text-slate-800 hover:underline">
                Profile
            </a>

            <span className="mx-5 text-slate-800 dark:text-slate-900">
                /
            </span>

            <a href="#" className="text-blue-900 dark:text-blue-400 hover:underline">
                Settings
            </a>
        </div>
    )
}
