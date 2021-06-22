import { Link } from 'react-router-dom';

import { Container, Banner, Main, Content, Form } from './styles'

import illustrationImg from '../../assets/images/illustration.svg';
import logoImg from '../../assets/images/logo.svg'
import { Button } from '../../components/Button';

import { useAuth } from '../../hooks/useAuth';

export function NewRoom() {

  const { user } = useAuth();

  console.log(user);

  return (
    <Container>
      <Banner>
        <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas"/>
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo real</p>
      </Banner>
      <Main>
        <Content>
          <img src={logoImg} alt="Letmeask"></img>
          <h2>Criar uma nova sala</h2>
          <Form>
            <input
              type="text"
              placeholder="Nome da sala"
            />
              <Button type="submit">
                Criar sala
              </Button>
          </Form>
          <p>
            Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link>
          </p>
        </Content>
      </Main>
    </Container>
  )
}
