import styled from "styled-components";
import Common from "../../styles/Common";

// SearchBar

export const SearchBarWrapper = styled.div`
  display: flex;
  gap: 15px;
  padding: 0 30px;
  padding-right: 0;
  box-shadow: ${Common.boxShadow};
  border-radius: ${Common.borderRadius};
  background: ${({ theme }) => theme.elements};
`;

export const SearchInput = styled.input`
  padding: 15px;
  flex-grow: 1;
  border: none;
  border-radius: ${Common.borderRadius};
  background: ${({ theme }) => theme.elements};
  color: ${({ theme }) => theme.textColor};
`;

export const SearchIconMuted = styled.svg`
  fill: ${({ theme }) => theme.inputColor};
  margin-top: 15px;
`;

// FilterSelect

export const RegionSelectorWrapper = styled.div`
  position: relative;
  width: fit-content;
  margin-top: 3rem;
`;

export const SelectArrow = styled.svg`
  position: absolute;
  left: calc(100% - 30px);
  top: 50%;
  transform: translate(0, -50%);
`;

export const RegionSelector = styled.select`
  color: ${({ theme }) => theme.textColor};
  -webkit-appearance: none;
  -moz-appearance: none;
  padding: 15px 30px;
  padding-right: 45px;
  border-right: 30px solid transparent;
  border: none;
  box-shadow: ${Common.boxShadow};
  background: ${({ theme }) => theme.elements};
  border-radius: ${Common.borderRadius};
  //margin-top: 3rem;
`;
