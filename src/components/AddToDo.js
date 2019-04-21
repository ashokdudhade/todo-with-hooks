import React from 'react';
import { Input, Icon, Button } from 'antd';
import styled from 'styled-components';
import { useAddToDo } from '../hooks/useAddToDo';

const TodoInputContainer = styled.div`
    display: flex;
`;

const ToDoInput = styled(Input)`
  height: 50px;
`;

const AddButton = styled(Button)`
  border: none;
  background: none;
  &:hover{
    background: none;
    border: none;
  }
  &:active{
    background: none;
    border: none;
  }
`;

const AddIcon = styled(Icon)`
  font-size: 50px;
`;

const AddToDo = () => {
  
  const {onAddToDo, text, onTextChange, handleKeyDown } = useAddToDo();
  
  return (
        <TodoInputContainer>
            <ToDoInput value={text} 
            onKeyDown={handleKeyDown}
            onChange={onTextChange} placeholder="Type your todo item"/>
            <AddButton onClick={onAddToDo}><AddIcon type="plus-square" theme="twoTone" /></AddButton>
        </TodoInputContainer>
  );
};

export default AddToDo;