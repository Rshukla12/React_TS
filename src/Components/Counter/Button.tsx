import React from "react";

interface IBtnProps {
    onClick: (num: number)=>void;
    num: number;
}

const Button = ({ onClick, num }: IBtnProps) => {

    const handleSub: React.MouseEventHandler<HTMLButtonElement> = (e): void => {
        onClick( num - 1  );
    }

    const handleAdd: React.MouseEventHandler<HTMLButtonElement> = (e): void => {
        onClick( num + 1  );
    }

    return (
        <div style={{display: "flex", margin: "auto"}}>
            <button onClick={handleSub}> Reduce </button>
            <button onClick={handleAdd}> Add </button>
        </div>
    )
};

export default Button;