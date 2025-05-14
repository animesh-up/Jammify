import React from 'react'
import Navbar from './Navbar'
import { albumsData, songsData } from '../../spotify-assets/assets/assets'
import AlbumItem from './AlbumItem'

const DisplayHome = () => {
  return (
    <>
        <Navbar/>
        <div className="my-5 font-bold text-[2xl]">
            <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
            <div className="flex overflow-auto">
                {albumsData.map((item,index) => (<AlbumItem key={index} image={item.image} name={item.name} desc={item.desc} id={item.id}/>))}
            </div>
        </div>
        <div className="my-5 font-bold text-[2xl]">
            <h1 className='my-5 font-bold text-2xl'>Today's biggest hits</h1>
            <div className="flex overflow-auto">
                {songsData.map((item,index) => (<AlbumItem key={index} image={item.image} name={item.name} desc={item.desc} id={item.id}/>))}
            </div>
        </div>
    </>
  )
}

export default DisplayHome