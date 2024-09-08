import { Link } from "react-router-dom";

export function ErrorM() {
    return <>
        <div>
            <Link to='/'>Menu</Link>
            <Link to='/cart'>Cart</Link>
        </div>
        <p>Error! The page not found</p>
    </>
}