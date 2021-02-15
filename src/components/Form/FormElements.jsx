import styled from "styled-components";

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 100vw;
  min-height: 40vh;
`;

export const FormTitle = styled.h2`
  text-align: center;
  font-size: 17px;
  margin-bottom: 1rem;
`;

export const WeatherForm = styled.form``;

export const FormInput = styled.input`
  padding: 8px 16px;
  border-radius: 4px;
  outline: 0;
`;

export const SubmitBtn = styled.input`
  background: ${({ primary }) => (primary ? "#f26a2e" : "#077bf1")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "16px 40px" : "10px 32px")};
  color: #fff;
  font-size: ${({ big }) => (big ? "20px" : "16px")};
  outline: 0;
  border: none;
  margin-left: 10px;
  min-width: 100px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s !important;
  border-radius: ${({ round }) => (round ? "50px" : "none")};
  &:hover {
    background: ${({ primary }) => (primary ? "#077bf1" : "#f26a2e")};
    transform: translateY(-2px);
  }
`;

export const ResWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  @media (max-width: 640px) {
    padding: 0rem;
  }
`;
