import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    // let rollOne = d6();
    // let rollTwo;

    // do {
    //     rollTwo = d6();
    // } while (rollOne === rollTwo);

    const [diceOne, setDiceOne] = useState<number>(1);
    const [diceTwo, setDiceTwo] = useState<number>(2);

    function rerollOne() {
        setDiceOne(d6());
    }

    function rerollTwo() {
        setDiceTwo(d6());
    }

    return (
        <div>
            <div>
                <Button onClick={rerollOne}>Roll Left</Button>
                <Button onClick={rerollTwo}>Roll Right</Button>
            </div>
            <span data-testid="left-die"> {diceOne} </span>
            <span data-testid="right-die"> {diceTwo} </span>
            {diceOne === 1 && diceTwo === 1 && <p>Lose</p>}
            {diceOne === diceTwo && diceTwo !== 1 && <p>Win</p>}
        </div>
    );
}
