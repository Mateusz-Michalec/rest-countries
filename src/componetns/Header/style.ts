import styled from "styled-components";
import Common from "../../styles/Common";

export const FixedTopHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: ${Common.boxShadow};
  padding: 20px 15px;
  background: ${({ theme }) => theme.elements};

  h1 {
    font-size: 16px;
  }
`;

export const ThemeToggler = styled.div`
  display: flex;
  gap: 0.5rem;
  font-weight: 600;

  svg {
    fill: ${({ theme }) => theme.textColor};
  }
`;
