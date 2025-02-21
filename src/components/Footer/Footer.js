import './Footer.css'
import { Link } from 'react-router-dom';

function Footer() {
    const currentYear = new Date().getFullYear();
    const footerLinks = [
        { text: "About Us", url: "/about" },
        { text: "Contact", url: "/contact" },
        { text: "Privacy Policy", url: "/privacy" }
    ];

    return (
        <div className="Footer">
            <p>&copy; Ceina Ellison { currentYear }</p>
            <ul className="footerLinks">
                {footerLinks.map((link) => (
                    <li key={link.text}>
                        <Link to={link.url}>{link.text}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default Footer;