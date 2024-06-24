/**
 * Footer component
 * @author - Faizal
 * @date - 19th June 2024
 */
// STYLE IMPORT
import './styles.css';

const Footer = () => {
    // CURRENT YEAR
    const currentYear = new Date().getFullYear();
    
    return (
        <footer>Copyright © {currentYear} Teleskop Inc.</footer>
    )
};

export default Footer;