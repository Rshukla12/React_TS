import { ITodoItemProps } from "./Todo"

interface Props {
    data: ITodoItemProps;
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