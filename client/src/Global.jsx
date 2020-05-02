/* eslint-disable import/prefer-default-export */
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => (theme.url ? `url(${theme.url})` : theme.body)};
    color: ${({ theme }) => theme.text};
    font-family: ${({ theme }) => theme.font};
    text-shadow: ${({ theme }) => theme.textShadow};
  }
  .chat-room {
    font-family: ${({ theme }) => theme.font};

  }

  .message-container {
    border-color: ${({ theme }) => theme.borderColor};
    font-family: ${({ theme }) => theme.chatFont};
    border-style: ${({ theme }) => theme.borderStyle};
  }
  .sidebar-container {
    background: ${({ theme }) => (theme.sidebarUrl ? `url(${theme.sidebarUrl})` : theme.body)};
    background-color: ${({ theme }) => theme.sidebarColor};
    border-color: ${({ theme }) => theme.borderColor};
    border-style: ${({ theme }) => theme.borderStyle};
  }
  .details {
    background-color: ${({ theme }) => theme.detailsColor};
    border-color: ${({ theme }) => theme.borderColor};
    border-style: ${({ theme }) => theme.borderStyle};
  }
  .guest-list {
    background-color: ${({ theme }) => theme.guestListColor};
  }
  .btn.btn-primary.form-control.send-button {
    background-color: ${({ theme }) => theme.buttonColor};
    font-family: ${({ theme }) => theme.font};
    color: ${({ theme }) => theme.text};
  }
  .btn.btn-primary {
    background-color: ${({ theme }) => theme.buttonColor};
    font-family: ${({ theme }) => theme.font};
    color: ${({ theme }) => theme.text};
    font-weight: ${({ theme }) => theme.fontWeight};
  }
  `;
