import { HeaderContainer } from './style'
import effect1 from '../../assets/effect1.svg'
import effect2 from '../../assets/effect2.svg'
import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <>
      <HeaderContainer>
        <img src={effect1} className="effect" alt="" />
        <img src={logo} alt="" />
        <img src={effect2} className="effect" alt="" />
      </HeaderContainer>
    </>
  )
}
