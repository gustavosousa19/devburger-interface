import { UserCircleIcon, ShoppingCartIcon } from '@phosphor-icons/react';

import {
  Container,
  HeaderLink,
  LinkContainer,
  Logout,
  Navigation,
  Options,
  Profile,
  Content,
} from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <Navigation>
          <div>
            <HeaderLink>Home</HeaderLink>
            <HeaderLink>Cardápio</HeaderLink>
          </div>
        </Navigation>
        <Options>
          <Profile>
            <UserCircleIcon color="#fff" size={24} />
            <div>
              <p>
                Olá, <span>Gustavo</span>
              </p>
              <Logout>Sair</Logout>
            </div>
          </Profile>
          <LinkContainer>
            <ShoppingCartIcon color="#fff" size={24} />
            <HeaderLink>Carrinho</HeaderLink>
          </LinkContainer>
        </Options>
      </Content>
    </Container>
  );
}
