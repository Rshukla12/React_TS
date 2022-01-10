import { TodoItemProps } from "./Todo"

interface Props {
    data: TodoItemProps
}

const TodoItem = ({data}: Props) => {
    return (
        <div>
            <div>{data.title}</div>
            <div>{data.status ? "completed" : "incomplete"}</div>
        </div>
    );
};

export default TodoItem;