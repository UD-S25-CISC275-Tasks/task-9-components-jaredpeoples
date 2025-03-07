import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [value, setValue] = useState<number>(4);
    const [inProgress, setProgress] = useState<boolean>(false);

    function startAttempt() {
        setValue((prev) => prev - 1);
        setProgress(!inProgress);
    }

    function addAttempt() {
        setValue((prev) => prev + 1);
    }

    function stopAttempt() {
        setProgress(!inProgress);
    }

    return (
        <div>
            <div>
                {inProgress ? (
                    <Button onClick={stopAttempt}>Stop Quiz</Button>
                ) : (
                    <>
                        {" "}
                        {value > 0 && (
                            <Button onClick={startAttempt}>Start Quiz</Button>
                        )}
                        <Button onClick={addAttempt}>Mulligan</Button>{" "}
                    </>
                )}
            </div>
            <p>{value}</p>
        </div>
    );
}
