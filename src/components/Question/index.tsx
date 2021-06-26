import { ReactNode } from 'react';
import {
  Container,
  UserInfo,
  UserInfoContent,
} from './styles';

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  }
  isAnswered?: boolean;
  isHighlighted?: boolean;
  children?: ReactNode;
}

export function Question({
  content,
  children,
  author,
  isHighlighted = false,
  isAnswered = false,
}: QuestionProps) {

  return (
    <Container isHighlighted={isHighlighted && !isAnswered} isAnswered={isAnswered}>
      <p>{content}</p>
      <UserInfo>
        <UserInfoContent isHighlighted={isHighlighted && !isAnswered}>
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </UserInfoContent>
        <div>
          {children}
        </div>
      </UserInfo>
    </Container>
  )
}
