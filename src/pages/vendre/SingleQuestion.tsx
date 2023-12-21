import  { useState } from "react";
import { BiMinus } from "react-icons/bi";
import { BsPlusLg } from "react-icons/bs";

export default function SingleQuestion({ question, answer }:{question:string, answer:string}) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <div  onClick={() => setShowAnswer(!showAnswer)}
       className="border-b border-gray-400 rounded-lg cursor-pointer transition-all duration-1000   bg-white">
        <article className="flex items-center justify-between p-4 transition-all duration-1000">
          <h2
            className="cursor-pointer" 
            onClick={() => setShowAnswer(!showAnswer)}
          >
            {question}
          </h2>
          <ul>
            {!showAnswer && (
              <li>
                <button onClick={() => setShowAnswer(true)}>
                  <BsPlusLg />
                </button>
              </li>
            )}
            {showAnswer && (
              <li>
                <button onClick={() => setShowAnswer(false)}>
                  <BiMinus />
                </button>
              </li>
            )}
          </ul>
        </article>

        <article
          className={`${showAnswer && "border-t border-gray-400 p-4 transition-all duration-1000"}`}
        >
          {showAnswer && <p>{answer}</p>}
        </article>
      </div>
    </>
  );
}