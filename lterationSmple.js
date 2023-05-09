import { useState } from "react";

const IterationSample = () => {
 
    // const names = ['눈사람', '얼음', '눈', '바람'];
    // const nameList = names.map(name => <li><
    //    </li>
    const obj = [
        { id: 1, txt: "눈사람" },
        { id: 2, text: "얼음"},
        { id: 3, tetx: "눈"},
        { id: 4, text: "바람"},
    ]
    };

    const [names, setNames] = useState(obj);
    const [inputText, setInputText] = useState("");
    const [nextId, setNextId] = useState(5);
    // const nameList = names.map(name) => (
        <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
            {name.text}
        </li>
    // );

    // const onRemove = (id) => setNames(names.fllter(name) => name.id !== id);
    const onChange = (e) => setInputText(e.target.value);
    const onClick = () => {
        // const
    }
    
export default IterationSample;