import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const routeNameMap: { [key: string]: string } = {
    products: 'Products',
    about: 'About Us',
    contact: 'Contact Us'
};

const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(x => x);

    const formatName = (name: string) => {
        if (/^\d+$/.test(name)) {
            return `Item ${name}`;
        }
        return routeNameMap[name.toLowerCase()] ||
            name.charAt(0).toUpperCase() + name.slice(1);
    };

    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumbs">
                <nav className="navbar">
                    <div className="nav-brand">
                        <Link to="/">Lab4</Link>
                    </div>
                    <ul className="nav-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
                {pathnames.map((name, index) => {
                    const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const isLast = index === pathnames.length - 1;
                    const displayName = formatName(name);

                    return (
                        <li key={routeTo}>
                            {isLast ? (
                                <span>{displayName}</span>
                            ) : (
                                <Link to={routeTo}>{displayName}</Link>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;