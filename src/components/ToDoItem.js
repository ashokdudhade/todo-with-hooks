import React from 'react';
import { Checkbox } from 'antd';
import styled from 'styled-components';
import { useCompleteToDo } from '../hooks/useCompleteToDo';

const TodoInputContainer = styled.div`
    display: flex;
`;

const TodoCheckBox = styled(Checkbox)`
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    padding: 1rem 1rem 0.25rem 1rem;
    border-bottom: 1px solid #d3d3d3;;
    &:hover{
      background: #1890ff;
      color: #fff;
    }
    width: 100%;
`;


const TodoItem = ({item}) => {
  
  const { onItemStateChange } = useCompleteToDo(item);

  return (
        <TodoInputContainer>
            <TodoCheckBox checked={item.isComplete} onChange={onItemStateChange}>{item.text}</TodoCheckBox>
        </TodoInputContainer>
  );
};

export default TodoItem;