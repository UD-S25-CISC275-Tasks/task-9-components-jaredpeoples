import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [value, setValue] = useState<boolean>(false);

    function updateVisibility() {
        setValue(!value);
    }

    return (
        <div>
            <div>
                <Button onClick={updateVisibility}>
                    {" "}
                    {value ? "Hide Answer" : "Reveal Answer"}
                </Button>
            </div>
            <p>{value ? "42" : ""}</p>
        </div>
    );
}
