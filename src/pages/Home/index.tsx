import { useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';

import illustrationImg from '../../assets/images/illustration.svg';
import googleIconImg from '../../assets/images/google-icon.svg';
import logoImg from '../../assets/images/logo.svg'

import { Button } from '../../components/Button';

import { Container, Banner, Main, Content, ButtonLogin, Divider, Form } from './styles';


export function Home() {

  const { user, signInWithGoogle } = useAuth();

  const history = useHistory();

  async function handleCreateRoom() {
    if(!user) {
      await signInWithGoogle();
    }

    history.push('/rooms/new');
  }

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
          <ButtonLogin onClick={handleCreateRoom}>
            <img src={googleIconImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </ButtonLogin>
          <Divider>Ou entre em uma sala</Divider>
          <Form>
            <input
              type="text"
              placeholder="Digite o código da sala"
            />
              <Button type="submit">
                Entrar na sala
              </Button>
          </Form>
        </Content>
      </Main>
    </Container>
  )
}
