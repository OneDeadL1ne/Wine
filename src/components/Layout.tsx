import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
    return (
        <>
            <main
                className={"min-h-screen  bg-[#fcfcee] text-Jost duration-300"}
            >
                <div className="grid grid-rows-[65px_auto] ">
                    <header className="row-1 z-10 flex sticky top-0">
                        <Header />
                    </header>

                    <div className="items-center  flex place-items-center justify-center row-2 overflow-visible overflow-y-auto">
                        <Outlet />
                    </div>
                </div>
            </main>
        </>
    );
}
