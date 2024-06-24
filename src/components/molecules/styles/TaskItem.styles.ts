import styled, { keyframes, css } from "styled-components";

const slideInAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const TaskItemWrapper = styled.div<{ completed: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  animation: ${slideInAnimation} 0.3s ease forwards;

  ${(props) =>
    props.completed &&
    css`
      text-decoration: line-through;
      opacity: 0.6;
    `}

  &:hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  }
`;

export const TaskName = styled.span`
  flex: 1;
`;

export const RemoveIcon = styled.span`
  cursor: pointer;
  color: #f44336;
  transition: color 0.3s ease;

  &:hover {
    color: #d32f2f;
  }
`;
