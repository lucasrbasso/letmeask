import { Link, useHistory } from 'react-router-dom';

import { Container, Banner, Main, Content, Form } from './styles'

import illustrationImg from '../../assets/images/illustration.svg';
import { Button } from '../../components/Button';

import { useAuth } from '../../hooks/useAuth';
import { FormEvent, useState } from 'react';
import { database } from '../../services/firebase';
import { SwitchButton } from '../../components/Switch';
import { Logo } from '../../components/Logo';

export function NewRoom() {
  const [newRoom, setNewRoom] = useState('');

  const { user } = useAuth();

  const history = useHistory();

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();

    if (newRoom.trim() === '') {
      return;
    }

    const roomRef = database.ref('rooms');

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    })

    history.push(`/rooms/${firebaseRoom.key}`);
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
          <SwitchButton />
          <Logo />
          <h2>Criar uma nova sala</h2>
          <Form onSubmit={handleCreateRoom}>
            <input
              onChange={event => setNewRoom(event.target.value)}
              type="text"
              placeholder="Nome da sala"
              value={newRoom}
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
