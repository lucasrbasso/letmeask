import { FormEvent, useState } from 'react';
import { database } from '../../services/firebase';
import { useHistory, useParams } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import deleteImage from '../../assets/images/delete.svg';
import checkImg from '../../assets/images/check.svg';
import answerImg from '../../assets/images/answer.svg';

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
  ButtonsContainer,
  FuncButton,
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

  async function handleCheckQuestionAsAnswered(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true,
    })
  }

  async function handleHighlightQuestion(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighlighted: true,
    })
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
              isAnswered={question.isAnswered}
              isHighlighted={question.isHighlighted}
            >
              <ButtonsContainer>
                {!question.isAnswered && (
                  <>
                    <FuncButton
                      type="button"
                      onClick={() => handleCheckQuestionAsAnswered(question.id)}
                    >
                    <img src={checkImg} alt="Marcar pergunta como respondida" />
                    </FuncButton>
                    <FuncButton
                      type="button"
                      onClick={() => handleHighlightQuestion(question.id)}
                    >
                      <img src={answerImg} alt="Dar destaque a pergunta" />
                    </FuncButton>
                  </>
                )}
                <FuncButton
                  type="button"
                  onClick={() => handleDeleteQuestion(question.id)}
                >
                  <img src={deleteImage} alt="Remover pergunta" />
                </FuncButton>
              </ButtonsContainer>
            </Question>
          ))}
        </QuestionList>
      </Content>
    </Container>
  )
}
