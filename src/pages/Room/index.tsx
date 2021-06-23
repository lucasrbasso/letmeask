import { FormEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import logoImg from '../../assets/images/logo.svg';
import { Button } from '../../components/Button';
import { RoomCode } from '../../components/RoomCode';
import { useAuth } from '../../hooks/useAuth';
import { database } from '../../services/firebase';

import {
  Container,
  Header,
  HeaderContent,
  Content,
  RoomTitle,
  Form,
  FormFooter,
  UserInfo,
} from './styles'

type RoomParams = {
  id: string;
}

type FirebaseQuestions = Record<string, {
  author: {
    nome: string;
    avatar: string;
  }
  content: string;
  isAnswered: string;
  isHighlighted: string;
}>

type Question = {
  id: string;
  author: {
    nome: string;
    avatar: string;
  }
  content: string;
  isAnswered: string;
  isHighlighted: string;
}

export function Room() {

  const { user } = useAuth();
  const [ newQuestion, setNewQuestion ] = useState('');
  const [ questions, setNewQuestions ] = useState<Question[]>([]);
  const [ title, setTitle ] = useState('');

  const params = useParams<RoomParams>();
  const roomId = params.id;

  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`);

    roomRef.on('value', room => {
      const databaseRoom = room.val();
      const firebaseQuestions: FirebaseQuestions = databaseRoom.questions ?? {};

      const parsedQuestions = Object.entries(firebaseQuestions).map(([key, value]) => {
        return {
          id: key,
          content: value.content,
          author: value.author,
          isHighlighted: value.isHighlighted,
          isAnswered: value.isAnswered,
        };
      })

      setTitle(databaseRoom.title);
      setNewQuestions(parsedQuestions);
    })
  }, [roomId]);

  async function handleSendQuestion(event: FormEvent) {

    event.preventDefault();

    if (newQuestion.trim() === '') {
      return;
    }

    if (!user) {
      throw new Error('You must be logged in');
    }

    const question = {
      content: newQuestion,
      author: {
        name: user.name,
        avatar: user.avatar,
      },
      isHighlighted: false,
      isAnswered: false,
    };

    await database.ref(`rooms/${roomId}/questions`).push(question);

    setNewQuestion('');
  }

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt=""/>
          <RoomCode code={roomId} />
        </HeaderContent>
      </Header>

      <Content>
        <RoomTitle>
          <h1>Sala {title}</h1>
          { questions.length > 0  && <span>{questions.length} pergunta(s)</span> }
        </RoomTitle>

        <Form onSubmit={handleSendQuestion}>
          <textarea
            placeholder="O que você quer perguntar?"
            onChange={event => setNewQuestion(event.target.value)}
            value={newQuestion}
          />
          <FormFooter>
            { user ? (
              <UserInfo>
                <img src={ user.avatar } alt="user.name"/>
                <span>{ user.name }</span>
              </UserInfo>
            ) : <span>Para enviar uma pergunta, <button>faça seu login.</button></span>}
            <Button disabled={!user} type="submit">Enviar pergunta</Button>
          </FormFooter>
        </Form>

        {JSON.stringify(questions)}
      </Content>
    </Container>
  )
}
