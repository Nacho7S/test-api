import React, { useEffect, useState } from 'react'

export const Products = () => {

  const [characters, setCharacters] = useState([])

  async function ambilDataApi() {
    const response = await fetch("https://api-blue-archive.vercel.app/api/characters");
    const dataJson = await response.json();
    setCharacters(dataJson?.data)
    console.log(dataJson?.data);
  }

  useEffect(() => {
    ambilDataApi()
  }, [])

  return (
    <>
      <div>Products</div>
      {/* <p>{ JSON.stringify(characters) }</p> */}
      {characters.map((el, index) => (
        <>
        <p>{el.name}</p>
        <img src={el.photoUrl}/>
        </>
        ))}
    </>
  )
}
