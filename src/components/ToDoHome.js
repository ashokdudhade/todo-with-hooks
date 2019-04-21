import React from 'react';
import { Tabs, Badge } from 'antd';
import styled from 'styled-components';
import AddToDo from './AddToDo';
import ToDoItems from './ToDoItems';
import { useToDoList } from '../hooks/useToDoList';
const { TabPane } = Tabs;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
`;

const TodoContainer = styled.div`
`;

const TabTitle = styled.span`
    padding-right: 0.75rem;
`;


const BadgeCircle = styled.span`
    box-sizing: border-box;
    border-radius: 10px;
    min-width: 20px;
    height: 20px;
    line-height: 20px;
    white-space: nowrap;
    text-align: center;
`;

const AllItemsBadge = styled(BadgeCircle)`
    background-color: #fff;
    color: #999;
    box-shadow: 0 0 0 1px #d9d9d9 inset ;
`

const CompletedItemBadge = styled(BadgeCircle)`
    background-color: #52c41a;
`

const ToDoHome = () => {
    const { todoItems, openToDoItems, completeToDoItems } = useToDoList();
    

    return (
        <Container>
            <AddToDo />
            <TodoContainer>
                <Tabs defaultActiveKey="1" size={"large"}>
                    <TabPane tab={
                        <Badge count={openToDoItems.length} overflowCount={99}><TabTitle>Open</TabTitle></Badge>
                    } key="1">
                        <ToDoItems todoItems={openToDoItems} />

                    </TabPane>
                    <TabPane tab={<Badge count={completeToDoItems.length && <CompletedItemBadge>{completeToDoItems.length}</CompletedItemBadge>} overflowCount={99}>
                        <TabTitle>Completed</TabTitle></Badge>} key="2">
                        <ToDoItems todoItems={completeToDoItems} />

                    </TabPane>
                    <TabPane tab={<Badge count={todoItems.length && <AllItemsBadge>{todoItems.length}</AllItemsBadge>} overflowCount={99}><TabTitle>All</TabTitle></Badge>} key="3">
                        <ToDoItems todoItems={todoItems} />
                    </TabPane>
                </Tabs>

            </TodoContainer>
        </Container>
    );
}

export default ToDoHome;
