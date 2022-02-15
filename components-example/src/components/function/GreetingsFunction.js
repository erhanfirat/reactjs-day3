import { useRef, useEffect, useState } from "react";

const greetingsStyle = {
    backgroundColor: "#3691de",
    color: "#ffffff",
    padding: "15px"
};


const GreetingsFunction = (props) => {
    const inputRef = useRef();
    const [name, setName] = useState("Anonim");

    useEffect(() => {
        inputRef.current.focus();
    });

    return <div style={greetingsStyle}>
        <label htmlFor='userNameInput'>Your name: </label>
        <input id="userNameInput" type="text" ref={inputRef}
            value={name} onChange={(e) => setName(e.target.value)} />
        <h1>Merhaba {name}</h1>
    </div>
}

export default GreetingsFunction;