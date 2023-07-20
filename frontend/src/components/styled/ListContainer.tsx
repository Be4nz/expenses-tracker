import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const ListContainer = styled.div<{ cardCount: number }>`
  ${(props) => css`
    max-height: ${props.cardCount * 195}px;
  `}
  overflow-y: auto;

  /* Custom scrollbar styles */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: rgb(39, 38, 45);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
`;
