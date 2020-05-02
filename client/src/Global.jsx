/* eslint-disable import/prefer-default-export */
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) =>
      theme.url ? `url(${theme.url})` : theme.body};
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
  }

  .sidebar {
  font-family: ${({ theme }) => theme.font};
  /* text-shadow: 1px 1px black; */
  flex: 3;
}

.sidebar-container {
    background-color: ${({ theme }) => theme.sideBarColor};

}

.details {
  color: #262322;
  background-color: #FFCF99;
  overflow: auto;
}

.guest-list {
  color: #262322;
  background-color: #FFCF99;

}
  `;
