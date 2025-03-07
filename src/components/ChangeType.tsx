import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [value, setValue] = useState<QuestionType>("short_answer_question");

    function switchType() {
        if (value === "short_answer_question") {
            setValue("multiple_choice_question");
        } else {
            setValue("short_answer_question");
        }
    }
    return (
        <div>
            <div>
                <Button onClick={switchType}>Change Type</Button>
            </div>
            <p>
                {" "}
                {value === "short_answer_question"
                    ? "Short Answer"
                    : "Multiple Choice"}
            </p>
        </div>
    );
}
