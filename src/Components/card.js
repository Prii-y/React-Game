import React, { useState } from 'react';
import Image from './Image';
import './index.css';
const Card = () => {
    const[photos, setPhotos] = useState([
      
        {id:1 , img:"https://cdn.pixabay.com/photo/2018/08/31/13/34/nfl-3644686__480.png", status:""},
        {id:1 , img:"https://cdn.pixabay.com/photo/2018/08/31/13/34/nfl-3644686__480.png", status:""},
        {id:2 , img:"https://cdn.pixabay.com/photo/2017/08/10/17/42/brand-2625450__480.png", status:""},
        {id:2 , img:"https://cdn.pixabay.com/photo/2017/08/10/17/42/brand-2625450__480.png", status:""},
        {id:3 , img:"https://cdn.pixabay.com/photo/2016/05/27/18/20/dane-1420383__480.png", status:""},
        {id:3 , img:"https://cdn.pixabay.com/photo/2016/05/27/18/20/dane-1420383__480.png", status:""},
        {id:4 , img:"https://cdn.pixabay.com/photo/2017/08/10/14/02/visa-2623015__480.png", status:""},
        {id:4 , img:"https://cdn.pixabay.com/photo/2017/08/10/14/02/visa-2623015__480.png", status:""},
      
    ].sort(()=>Math.random() - 0.5))

const[prev,setPrev] = useState(-1)

function check(current){
    if(photos[current].id === photos[prev].id){
        photos[current].status = "correct"
        photos[prev].status = "correct"
        setPhotos([...photos])
        setPrev(-1)
    }else{
        photos[current].status = "wrong"
        photos[prev].status = "wrong"
        setPhotos([...photos])
        setTimeout(()=>{
            photos[current].status = ""
            photos[prev].status = ""
            setPhotos([...photos])
            setPrev(-1)
        }, 1000)   
    }
}

function handleClick(id){
    // alert(id)
    if(prev === -1){
        photos[id].status = "active"
        setPhotos([...photos])
        setPrev(id)
    }else{
        check(id)
    }
}


  return (
    <div className="container">
    {photos.map((item,index) => (
<Image key={index} item={item} id={index} handleClick={handleClick}/>
    ))}
    </div>
  )
}

export default Card
