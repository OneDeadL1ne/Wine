import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <div className="w-full  bg-[#EAE6CA9C]  grid grid-cols-3">
            <div className="flex justify-start">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        "text-[30px] flex items-center" + (isActive ? "" : "")
                    }
                >
                    <img src="/logo.png" alt="logo" height={70} width={70} />
                    <p>KD</p>
                </NavLink>
            </div>
            <div className="flex justify-center items-center gap-16">
                <NavLink
                    to="/catalog"
                    className={({ isActive }) =>
                        `text-[24px]  ${isActive ? "underline" : ""}`
                    }
                >
                    Каталог
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        `text-[24px] ${isActive ? "underline" : ""}`
                    }
                >
                    О нас
                </NavLink>
            </div>
        </div>
    );
}
