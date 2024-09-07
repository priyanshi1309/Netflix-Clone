import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer';

const TitleCards = ({title, category}) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MWFhOTI2YmY0MGJhNjg3MjhjNWNhY2VkYjQyYzBjZCIsIm5iZiI6MTcyNTQ2Nzk5Ni4xOTc0NjEsInN1YiI6IjY2ZDg4YzJiYTE1NWU5ZmMwODBlZTliYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.I9GAGlxd34PZ-CSOv3tsJOIEesMgaxCxqEReWUPjBy8'
    }
  };
  


const handelWheel = (event) => {
  event.preventDefault();
  cardsRef.current.scrollLeft += event.deltaX;
}
useEffect(()=>{

  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(response => response.json())
  .then(response => setApiData(response.results))
  .catch(err => console.error(err));

  cardsRef.current.addEventListener('wheel', handelWheel);
},[])
  return (
    <div className='title-cards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index)=>{
          return(
          <>
          <Link  to={`/player/${card.id}`} className="card" key={index} >
            <img src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
                alt="movie-img" />
            <p>{card.original_title}</p>
          </Link>
          </>
          )
        })}
      </div>
    </div>
  )
}

export default TitleCards