import { cn } from "@bem-react/classname"
import "./Card.css"

interface Card {
    title: string;
    image: string;
    genres: object;
    date: number
}

const Card = (Card: Card) => {
    const cnCard = cn("Card")
    const arr: string[] = [];
    // @ts-ignore
       Card.genres.map((el) => arr.push(el.genre))
  return (
    <div className={cnCard()}>
        <div className={cnCard("Content")}>
            <img src={Card.image} alt="zzzz" className={cnCard("Image")} />
            <h4 className={cnCard("Title")}>{Card.title}</h4>
            <h6 className={cnCard("Genres")}>{arr.join(",")}</h6>
            <h6 className={cnCard("Date")}>{Card.date}</h6>
        </div>
    </div>
  )
}

export default Card