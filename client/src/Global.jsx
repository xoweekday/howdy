/* eslint-disable import/prefer-default-export */
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => (theme.url ? `url(${theme.url})` : theme.body)};
    color: ${({ theme }) => theme.text};
    font-family: ${({ theme }) => theme.font};
  }
  .chat-room {
    font-family: ${({ theme }) => theme.font};

  }

  .message-container {
    border-color: ${({ theme }) => theme.borderColor};
    font-family: ${({ theme }) => theme.chatFont};
    border-style: ${({ theme }) => theme.borderStyle};
    background: ${({ theme }) => theme.messageBG};
    color: ${({ theme }) => theme.messageText};
  }

  .form-control {
    background: ${({ theme }) => theme.messageBG};
    color: ${({ theme }) => theme.messageText};
  }

  .form-control:focus {
    background: ${({ theme }) => theme.messageBG};
    color: ${({ theme }) => theme.messageText};
    outline: none;
  }
  `;
