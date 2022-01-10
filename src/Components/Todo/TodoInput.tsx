import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";


interface Props {
    onSubmit: ( text: string ) => void
}

const TodoInput = ( props: Props ) => {
    const [text, setText] = useState<string | undefined>(undefined);

    const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const { value } = e.target;
        setText( value )
    }

    const handleAdd = () => {
        if ( text ) {
            props.onSubmit(text);
            setText('');
        }
    };

    return (
        <div>
            <TextField type="text" value={text} onChange={onChange} />
            <Button variant="contained" onClick={handleAdd} >Add</Button>
        </div>
    );

};

export default TodoInput;