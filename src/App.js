import { useState, useLayoutEffect } from "react";

const App = () => {
    const [count, setCount] = useState(0);
    const [flag, setFlag] = useState(false);

    function handleClick() {
        console.log("=== click ===");
        fetchSomething().then(() => {
            setCount((c) => c + 1); // Causes a re-render
            setFlag((f) => !f); // Causes a re-render
        });
    }

    return (
        <div>
            <button onClick={handleClick}>Next</button>
            <h1 style={{ color: flag ? "blue" : "black" }}>{count}</h1>
            <LogEvents />
        </div>
    );
};

function LogEvents(props) {
    useLayoutEffect(() => {
        console.log("Commit");
    });
    console.log("Render");
    return null;
}

function fetchSomething() {
    return new Promise((resolve) => setTimeout(resolve, 100));
}

export default App;
