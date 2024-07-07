import HeaderLogo from './HeaderLogo.svg'

export default function Header() {
  return (
    <header className="header">
      <div className="header__image">
        <img src={HeaderLogo} alt="Airplane" />
      </div>
    </header>
  )
}
