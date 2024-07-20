import React from "react";
import { useState } from "react";
import Square from "./Square";





const Board = () => {
    const [state, Setstate] = useState(Array(9).fill(null));
    const [isXTurn, SetisXTurn] = useState(true);

    const CheckWinner = () => {

        const WinnerLogic = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
        ];

        for (let logic of WinnerLogic) {
            const [a, b, c] = logic;
            if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
                return state[a];
            }

        }

        return false;


    }



    const HandleClick = (index) => {
        const newState = state;


        if (state[index] != null) {
            return;
        }

        newState[index] = isXTurn ? "X" : "O";
        SetisXTurn(!isXTurn);
        Setstate(newState);

    }


    const Winner = CheckWinner();


    console.log(Winner);
    return (
        <div className="Container">
            {
                Winner ? (<> {Winner} is Winner</>) : (<>
                    <div className="board-row">
                        <Square onClick={() => HandleClick(0)} value={state[0]} />
                        <Square onClick={() => HandleClick(1)} value={state[1]} />
                        <Square onClick={() => HandleClick(2)} value={state[2]} />
                    </div>
                    <div className="board-row">
                        <Square onClick={() => HandleClick(3)} value={state[3]} />
                        <Square onClick={() => HandleClick(4)} value={state[4]} />
                        <Square onClick={() => HandleClick(5)} value={state[5]} />
                    </div>
                    <div className="board-row">
                        <Square onClick={() => HandleClick(6)} value={state[6]} />
                        <Square onClick={() => HandleClick(7)} value={state[7]} />
                        <Square onClick={() => HandleClick(8)} value={state[8]} />
                    </div>
                </>
                )
            }

        </div>
    );
};

export default Board;