import React, { useState } from "react";
import { Button } from "react-bootstrap";
// import { dhValue, setDhValue } from "./DoubleHalfState";

interface ButtonValueProps {
    setDhValue: (newValue: number) => void;
    dhValue: number;
}

function Doubler({ setDhValue, dhValue }: ButtonValueProps): React.JSX.Element {
    return (
        <div>
            <Button
                onClick={() => {
                    setDhValue(dhValue * 2);
                }}
            >
                Double
            </Button>
            <Button
                onClick={() => {
                    setDhValue(dhValue * 0.5);
                }}
            >
                Half
            </Button>
        </div>
    );
}

export function DoubleHalf(): React.JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
                <Doubler setDhValue={setDhValue} dhValue={dhValue}></Doubler>
            </div>
        </div>
    );
}

// function Doubler(): React.JSX.Element {
//     return (
//         <Button
//             onClick={() => {
//                 setDhValue(2 * dhValue);
//             }}
//         >
//             Double
//         </Button>
//     );
// }

// function Halver(): React.JSX.Element {
//     return (
//         <Button
//             onClick={() => {
//                 setDhValue(0.5 * dhValue);
//             }}
//         >
//             Halve
//         </Button>
//     );
// }

// export function DoubleHalf(): React.JSX.Element {

//     return (
//         <div>
//             <h3>Double Half</h3>
//             <div>
//                 The current value is: <span>{dhValue}</span>
//             </div>
//             <Doubler></Doubler>
//             <Halver></Halver>
//         </div>
//     );
// }
