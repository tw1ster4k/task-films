import { cn } from "@bem-react/classname"
import "./Card.css"

interface Card {
    id: string;
    title: string;
    image: string;
    genres?: object;
    date: number;
    bestFunct: (id : string) => void
}

const Card = (Card: Card) => {
    const cnCard = cn("Card")
    const arr: string[] = [];

   function HandleClickButton(id : string) {
    Card.bestFunct(id)
   } 
    // @ts-ignore
       Card.genres.map((el) => arr.push(el.genre))
  return (
    <div className={cnCard()}>
        <div className={cnCard("Content")}>
            <img src={Card.image} alt="zzzz" className={cnCard("Image")} />
            <h4 className={cnCard("Title")}>{Card.title}</h4>
            <h6 className={cnCard("Genres")}>{arr.join(",")}</h6>
            <h6 className={cnCard("Date")}>{Card.date}</h6>
            <button id={Card.id} className={cnCard("Like")} onClick={() => HandleClickButton(Card.id) }>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 19.1625L8.975 18.2375C7.20833 16.6209 5.75 15.225 4.6 14.05C3.45 12.875 2.53333 11.825 1.85 10.9C1.16667 9.97502 0.6875 9.13752 0.4125 8.38752C0.1375 7.63752 0 6.87919 0 6.11252C0 4.61252 0.504167 3.35836 1.5125 2.35002C2.52083 1.34169 3.76667 0.837524 5.25 0.837524C6.2 0.837524 7.07917 1.06252 7.8875 1.51252C8.69583 1.96252 9.4 2.61252 10 3.46252C10.7 2.56252 11.4417 1.90002 12.225 1.47502C13.0083 1.05002 13.85 0.837524 14.75 0.837524C16.2333 0.837524 17.4792 1.34169 18.4875 2.35002C19.4958 3.35836 20 4.61252 20 6.11252C20 6.87919 19.8625 7.63752 19.5875 8.38752C19.3125 9.13752 18.8333 9.97502 18.15 10.9C17.4667 11.825 16.55 12.875 15.4 14.05C14.25 15.225 12.7917 16.6209 11.025 18.2375L10 19.1625ZM10 17.1875C11.6833 15.6375 13.0708 14.3084 14.1625 13.2C15.2542 12.0917 16.1208 11.1209 16.7625 10.2875C17.4042 9.45419 17.8542 8.71252 18.1125 8.06252C18.3708 7.41252 18.5 6.76252 18.5 6.11252C18.5 5.01252 18.15 4.10836 17.45 3.40002C16.75 2.69169 15.85 2.33752 14.75 2.33752C13.9 2.33752 13.1083 2.60002 12.375 3.12502C11.6417 3.65002 11.05 4.38752 10.6 5.33752H9.375C8.94167 4.40419 8.35833 3.67086 7.625 3.13752C6.89167 2.60419 6.1 2.33752 5.25 2.33752C4.15 2.33752 3.25 2.69169 2.55 3.40002C1.85 4.10836 1.5 5.01252 1.5 6.11252C1.5 6.76252 1.62917 7.41669 1.8875 8.07502C2.14583 8.73336 2.59583 9.48336 3.2375 10.325C3.87917 11.1667 4.75 12.1375 5.85 13.2375C6.95 14.3375 8.33333 15.6542 10 17.1875Z" fill="black"/>
                </svg>
            </button>
        </div>
    </div>
  )
}

export default Card