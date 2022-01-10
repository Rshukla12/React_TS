import { Button, Modal, Paper } from "@mui/material";
import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

export interface ITodoItemProps {
    id: number,
    title: string,
    status: boolean
};

const Todo = () => {
    const [todos, setTodos] = useState<ITodoItemProps[]>([]);
    const [active, setActive] = useState<ITodoItemProps>({
        id: 0,
        title: "",
        status: false
    });
    const [open, setOpen] = useState<boolean>(false);

    const handleAdd = ( text: string ) => {
        const payload = {
            id: todos.length+1,
            title: text,
            status: false
        };

        setTodos([ ...todos, payload ]);
    };

    const handleToggle = ( id: number ) => {
        setTodos(prev => prev.map( item => item.id === id ? {...item, status: !item.status} : item ));
    };

    const handleDelete = ( id: number ) => {
        setTodos(prev => prev.filter( item => item.id !== id  ));
        setOpen(false);
    };

    const handleClick = ( id: number ) => {
        setOpen(true);
        setActive( todos.filter( item => item.id === id  )[0] );
    };

    return (
        <>
            <div>
                <h1>Todo</h1>
                <div>
                    <TodoInput onSubmit={handleAdd} />
                    {
                        todos.map( item => (
                            <div key={item.id} onClick={()=>handleClick(item.id)}>
                                <TodoItem data={item} />
                            </div>
                        ) )
                    }
                </div>
            </div>
            <Modal open={open} onClose={() => setOpen(false)} >
                <Paper>
                    <h2>{active?.title}</h2>
                    <Button onClick={()=>handleToggle(active.id)} variant="contained">{active?.status ? "Mark Incomplete" : "Mark completed"}</Button>
                    <Button onClick={()=>handleDelete(active.id)} variant="contained" color="secondary" >Delete</Button>
                </Paper>
            </Modal>
        </>
    )
};

export default Todo;