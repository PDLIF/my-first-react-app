import React, { useState } from "react";

const App = () => {
    const [person, setPerson] = useState({age: 100});

    function handleIncreaseAge() {
        setPerson(person => ({ ...person, age: person.age + 1 }));
        setPerson(person => ({ ...person, age: person.age + 1 }));
    }

    return (
        <>
            <h1>{person.age}</h1>
            <button onClick={handleIncreaseAge}>
                Click me
            </button>
        </>
    )
};

export default App;