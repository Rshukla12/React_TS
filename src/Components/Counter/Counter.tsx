import React from "react";
import Button from "./Button";

const Counter = () => {
    const [value, setValue] = React.useState<number>(0);

    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <h1>Counter</h1>
            <h2>{value}</h2>
            <Button onClick={setValue} num={value} />
        </div>
    )
};

export default Counter;