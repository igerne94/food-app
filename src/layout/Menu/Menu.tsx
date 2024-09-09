import { Link, Outlet } from "react-router-dom";

export function Layout() {
    return <>
        <div>
            <Link to='/'>Menu</Link>
            <Link to='/cart'>Cart</Link>
        </div>
        <div>
            <Outlet />
        </div>
    </>
}