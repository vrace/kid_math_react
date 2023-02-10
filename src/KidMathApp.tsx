import React, { useState } from 'react';
import './KidMathApp.css';

interface Quiz {
    op: string;
    a: number;
    b: number;
}

function createQuiz(maxDigits: number, hasAdd: boolean, hasSub: boolean): Quiz {
    let ops: string[] = [];
    
    if (hasSub) {
        ops.push("-");
    }
    if (hasAdd || ops.length === 0) {
        ops.push("+");
    }

    const operator = ops[Math.floor(Math.random() * ops.length)];
    const operand1 = Math.floor(Math.random() * maxDigits);
    const operand2 = Math.floor(Math.random() * (maxDigits - operand1));

    if (operator == "+") {
        return {
            op: "+",
            a: operand1,
            b: operand2
        };
    }
    else {
        return {
            op: "-",
            a: Math.max(operand1, operand2),
            b: Math.min(operand1, operand2)
        };
    }
}

function KidMathApp() {
    const [quizList, setQuizList] = useState<Quiz[]>([]);
    const [numQuiz, setNumQuiz] = useState(6);
    const [maxDigits, setMaxDigits] = useState(20);
    const [hasAdd, setHasAdd] = useState(true);
    const [hasSub, setHasSub] = useState(true);

    function createQuizList() {
        let data: Quiz[] = [];
        for (let i = 0; i < numQuiz; i++) {
            data.push(createQuiz(maxDigits, hasAdd, hasSub));
        }
        setQuizList(data);
    }

    return (
        <div className="App">
            <label>出题数量 <input value={numQuiz} onChange={(event) => setNumQuiz(Number(event.target.value))} /></label>
            <label>组合最大数字 <input value={maxDigits} onChange={(event) => setMaxDigits(Number(event.target.value))} /></label>
            <label><input type="checkbox" checked={hasAdd} onChange={() => setHasAdd(!hasAdd)}/>+</label>
            <label><input type="checkbox" checked={hasSub} onChange={() => setHasSub(!hasSub)}/>-</label>
            <button onClick={createQuizList}>出题</button>
            <hr/>
            {
                quizList.map((quiz, index) =>
                    <div key={`quiz${index}`}>
                        <label>{`${quiz.a} ${quiz.op} ${quiz.b} = `}</label>
                    </div>
                )
            }
        </div>
    );
}

export default KidMathApp;
