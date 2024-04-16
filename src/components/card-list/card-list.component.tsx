import { Monster } from "../../App";

import Card from "../card/card.component";
import './card-list.styles.css'

type CardListProp = {
    monsters: Monster[]
}

const CardList = ({ monsters }: CardListProp) => {
        return (
            <div className="card-list">
                {monsters.map((monster) => {
                    return (
                     <Card monster={monster}/>
                    )
                })}
            </div>
        )
}

export default CardList;