import './App.css';
import { useState, useEffect } from 'react';
import { cn } from '@bem-react/classname';
import Card from './Elements/Card/Card';
import data from "./data.json"

function App() {
  const cnApp = cn("App")
  const [genre, setGenre] = useState(0)
  

  const options = [
    {id:0,genre:'Все'},{id:1,genre:'драма'},{id:2,genre:'биография'},{id:3,genre:'история'},{id:4,genre:'фэнтези'},{id:5,genre:'приключения'},{id:6,genre:'боевик'},{id:7,genre:'мультфильм'},{id:8,genre:'комедия'},{id:9,genre:'триллер'},{id:10,genre:'детектив'},{id:11,genre:'фантастика'}
  ];

  const images: string[] = [];

  // @ts-ignore
  const imagesContext = require.context('./images', false, /\.(png|jpe?g|svg)$/);
  
  imagesContext.keys().map((key: string) => {
    images.push(imagesContext(key));
  });

   images.sort((a, b) => {
    const aNumber = parseInt(a.match(/\d+/)?.[0] || '0', 10);
    const bNumber = parseInt(b.match(/\d+/)?.[0] || '0', 10);
    return aNumber - bNumber;
  });



  return (
    <div className={cnApp()}>
      <div className={cnApp("Search")}>
        <h2 className={cnApp("Title")}>Популярные фильмы</h2>
        <div className={cnApp("Filter")}>
          <select className={cnApp("Dropdown")}>
            {options.map((option) => (
              <option key={option.id} value={option.genre}>
                {option.genre}
              </option>
            ))}
          </select>
          <input type="text" placeholder='Введите название' className={cnApp("Input")}/>
        </div>
      </div>
      <div className={cnApp("Content")}>
        {data.map((el,index)  =>
        // @ts-ignore
          <Card key={index} title={el.name} image={images[index]} genres={options.filter(({id}) => el.genre.includes(id))} date={el.year} />
        )}
      </div>
    </div>
  );
}

export default App;
