import { useState } from "react";
import { BuyTicketForm, BuyTicketViewWrapper } from "./styles";

function BuyTicketView(props) {
    const [nCols, setNCols] = useState(3);
    const [nRows, setNRows] = useState(3);
    const [currentRow, setCurrentRow] = useState(0);
    const [currentCol, setCurrentCol] = useState(0);
    const boughtTickets = [
        {'ticketId':3,'col':1,'row':2},
        {'ticketId':1,'col':1,'row':1},
        {'ticketId':2,'col':2,'row':1}
    ]

    function chooseTicket(r,c) {

    }
    function range(n) {
        return Array.from(Array(5)).map((_, i) => i+1)
    }
    function makeButton(r,c) {
        console.log(r + " " + c);
        let found = boughtTickets.find((o) => o.row==r && o.col==c);
        if (found) {
            return <button>
                occ
            </button>
        }
        return (
            <button    
                type="button"            
                onClick={(e) => chooseTicket(r,c)}> 
                {r}, {c}
            </button>
        );
    }

    const getPlaces = () => {        
        return range(nRows).map((i) => { return (
            <div>
                {
                    range(nCols).map((j) => {
                        return makeButton(i,j);
                    })
                }
            </div>)
        });
    }


    return (
        <BuyTicketViewWrapper>
        <h2>Buy ticket</h2>
            <BuyTicketForm>
                {getPlaces()}
            </BuyTicketForm>
        </BuyTicketViewWrapper>
    )
}

export default BuyTicketView;