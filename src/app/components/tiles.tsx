import Breadcrumbs from "./breadcrumbs"


export default function Tiles() {
    return (
        <section className="w-full">
            <div className="flex justify-between mt-6 p-4 shadow-md bg-zinc-100">
                <p className="ml-2 text-slate-900">Dashboard</p>
                <Breadcrumbs></Breadcrumbs>
            </div>
            <section className="container w-full mx-auto grid grid-cols-4 gap-4 mt-6">
                <div className="max-w-full 44 max-h-fit bg-slate-100 flex flex-col p-4">
                    <div className="flex justify-between mb-2">
                        <div className="flex flex-col">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M1 .5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 .5.5v14a.5.5 0 0 1-.724.447L11.5 14.06l-1.776.888a.5.5 0 0 1-.448 0L7.5 14.06l-1.776.888a.5.5 0 0 1-.448 0L3.5 14.06l-1.776.888A.5.5 0 0 1 1 14.5zM4 5h2V4H4zm4 0h3V4H8zM6 8H4V7h2zm2 0h3V7H8zm3 3H8v-1h3z" clipRule="evenodd"></path></svg>
                            <p className="mt-2">Orders</p>
                        </div>
                        <div className="flex items-end justify-end">
                            <p>200</p>
                        </div>
                    </div>
                    <progress className="progress progress-primary flex justify-center items-center" value="40" max="200"></progress>
                </div>
                <div className="max-w-full max-h-fit bg-slate-500 flex flex-col p-4">
                    <div className="flex justify-between mb-2">
                        <div className="flex flex-col">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M1 .5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 .5.5v14a.5.5 0 0 1-.724.447L11.5 14.06l-1.776.888a.5.5 0 0 1-.448 0L7.5 14.06l-1.776.888a.5.5 0 0 1-.448 0L3.5 14.06l-1.776.888A.5.5 0 0 1 1 14.5zM4 5h2V4H4zm4 0h3V4H8zM6 8H4V7h2zm2 0h3V7H8zm3 3H8v-1h3z" clipRule="evenodd"></path></svg>
                            <p className="mt-2">Users</p>
                        </div>
                        <div className="flex items-end justify-end">
                            <p>200</p>
                        </div>
                    </div>
                    <progress className="progress progress-primary flex justify-center items-center" value="40" max="200"></progress>
                </div>
                <div className="max-w-full max-h-fit bg-slate-500 flex flex-col p-4">
                    <div className="flex justify-between mb-2">
                        <div className="flex flex-col">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M1 .5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 .5.5v14a.5.5 0 0 1-.724.447L11.5 14.06l-1.776.888a.5.5 0 0 1-.448 0L7.5 14.06l-1.776.888a.5.5 0 0 1-.448 0L3.5 14.06l-1.776.888A.5.5 0 0 1 1 14.5zM4 5h2V4H4zm4 0h3V4H8zM6 8H4V7h2zm2 0h3V7H8zm3 3H8v-1h3z" clipRule="evenodd"></path></svg>
                            <p className="mt-2">Vehicles</p>
                        </div>
                        <div className="flex items-end justify-end">
                            <p>200</p>
                        </div>
                    </div>
                    <progress className="progress progress-primary flex justify-center items-center" value="40" max="200"></progress>
                </div>
                <div className="max-w-full max-h-fit bg-slate-500 flex flex-col p-4">
                    <div className="flex justify-between mb-2">
                        <div className="flex flex-col">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M1 .5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 .5.5v14a.5.5 0 0 1-.724.447L11.5 14.06l-1.776.888a.5.5 0 0 1-.448 0L7.5 14.06l-1.776.888a.5.5 0 0 1-.448 0L3.5 14.06l-1.776.888A.5.5 0 0 1 1 14.5zM4 5h2V4H4zm4 0h3V4H8zM6 8H4V7h2zm2 0h3V7H8zm3 3H8v-1h3z" clipRule="evenodd"></path></svg>
                            <p className="mt-2">Orders</p>
                        </div>
                        <div className="flex items-end justify-end">
                            <p>200</p>
                        </div>
                    </div>
                    <progress className="progress progress-primary flex justify-center items-center" value="80" max="200"></progress>
                </div>
            </section>

        </section>

    )
}