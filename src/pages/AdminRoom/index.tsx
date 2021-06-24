import { FormEvent, useState } from 'react';
import { database } from '../../services/firebase';
import { useHistory, useParams } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import deleteImage from '../../assets/images/delete.svg';

import { Button } from '../../components/Button';
import { Question } from '../../components/Question';
import { RoomCode } from '../../components/RoomCode';
import { useAuth } from '../../hooks/useAuth';
import { useRoom } from '../../hooks/useRoom';


import {
  Container,
  Header,
  HeaderContent,
  Content,
  RoomTitle,
  QuestionList,
  DeleteButton,
} from './styles'

type RoomParams = {
  id: string;
}

export function AdminRoom() {

  const { user } = useAuth();

  const history = useHistory();

  const params = useParams<RoomParams>();
  const roomId = params.id;

  const { questions, title } = useRoom(roomId);

  async function handleEndRoom() {
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date(),
    })

    history.push('/');
  }

  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm("Tem certeza que deseja excluir está pergunta?")) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove()
    }
  }

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt=""/>
          <div>
            <RoomCode code={roomId} />
            <Button onClick={handleEndRoom} isOutlined>Encerrar sala</Button>
          </div>

        </HeaderContent>
      </Header>

      <Content>
        <RoomTitle>
          <h1>Sala {title}</h1>
          { questions.length > 0  && <span>{questions.length} pergunta(s)</span> }
        </RoomTitle>
        <QuestionList>
          {questions.map((question) => (
            <Question
              key={question.id}
              content={question.content}
              author={question.author}
            >
              <DeleteButton
                type="button"
                onClick={() => handleDeleteQuestion(question.id)}
              >
                <img src={deleteImage} alt="Remover pergunta" />
              </DeleteButton>
            </Question>
          ))}
        </QuestionList>
      </Content>
    </Container>
  )
}
