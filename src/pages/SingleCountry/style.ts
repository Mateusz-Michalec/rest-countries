import styled from "styled-components";
import Common from "../../styles/Common";

export const BackButton = styled.button`
  box-shadow: ${Common.boxShadow};
  background-color: ${({ theme }) => theme.elements};
  color: ${({ theme }) => theme.textColor};
  display: flex;
  gap: 0.8rem;
  align-items: center;
  padding: 10px 20px;
`;

export const BorderButtonsWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

export const BorderButton = styled(BackButton)`
  width: 4rem;
`;

export const BigFlag = styled.img`
  width: 100%;
  margin: 3rem 0;
`;
