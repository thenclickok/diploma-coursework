import logo from '../assets/logo.jpg'

const Header = ({title, subtitle}) => {
  return (
    <header id="header">
      <img src={logo} alt="Logo" />
      <h1>{title}</h1>
      <h3><i>{subtitle}</i></h3>
    </header>
  )
}

export default Header
