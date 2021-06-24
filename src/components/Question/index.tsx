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
  children?: ReactNode;
}

export function Question({content, children, author}: QuestionProps) {
  return (
    <Container>
      <p>{content}</p>
      <UserInfo>
        <UserInfoContent>
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
