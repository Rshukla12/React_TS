import { useState } from "react";

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
            <input type="text" value={text} onChange={onChange} />
            <button onClick={handleAdd} >Add</button>
        </div>
    );

};

export default TodoInput;