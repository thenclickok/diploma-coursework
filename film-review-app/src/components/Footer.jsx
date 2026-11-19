const Footer = () => {
    const currentYear = new Date().getFullYear();
  
    return (
    <footer className="footer"><p>&copy; {currentYear} Film Favourites. All rights reserved.</p></footer>
  )
};

export default Footer;