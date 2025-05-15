import { Link, NavLink } from "react-router-dom"

const Header = () => {
    return (
        <nav className="bg-warning py-3 mb-4">
            <div className="container d-flex justify-content-between align-items-center">
                <div>logo</div>
                <ul className="d-flex list-unstyled m-0 gap-2">
                    <li>
                        <NavLink to='/'>Home Page</NavLink>
                    </li>
                    <li><NavLink to='/movies'>Movies</NavLink></li>
                    <li><Link to='/movie/new' alt='Aggiungi un nuovo film'>Add new film</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header