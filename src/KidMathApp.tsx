import React, { useState } from 'react';
import './KidMathApp.css';

interface Quiz {
    op: string;
    a: number;
    b: number;
}

function createQuiz(maxDigits: Number, hasAdd: Boolean, hasSub: Boolean): Quiz {
    return {
        op: '+',
        a: 1,
        b: 2
    };
}

function KidMathApp() {
    const [quizList, setQuizList] = useState<Quiz[]>([]);
    const [numQuiz, setNumQuiz] = useState(6);
    const [maxDigits, setMaxDigits] = useState(20);
    const [hasAdd, setHasAdd] = useState(true);
    const [hasSub, setHasSub] = useState(true);

    function createQuizList() {
        var data: Quiz[] = [];
        for (var i = 0; i < numQuiz; i++) {
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
