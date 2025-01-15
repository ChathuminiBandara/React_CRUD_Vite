import { Link } from "react-router";
import "../assets/Navigation.css";

export function Navigation() {
    return (
        <>
            <header className="bg-blue-700 shadow-lg">
                <nav className="px-4 py-3">
                    <div className="flex text-white space-x-8">
                        <Link className="custom-link hover:text-teal-400" to="/">Home</Link>
                        <Link className="custom-link hover:text-teal-400" to="/add">Add Customer</Link>
                        <Link className="custom-link hover:text-teal-400" to="/update">Update Customer</Link>
                        <Link className="custom-link hover:text-teal-400" to="/delete">Delete Customer</Link>
                    </div>
                </nav>
            </header>
        </>
    );
}
