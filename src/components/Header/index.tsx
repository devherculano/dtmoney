import logoImg from '../../assets/logo.svg';
import * as S from '../styles';

export function Header() {
  return (
    <S.Container>
      <S.Content>
      <img src={logoImg} alt="dtmoney" />
      <button type="button">
        Nova tansação
      </button>
      </S.Content>
    </S.Container>
  )
}