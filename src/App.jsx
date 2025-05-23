import React, { useContext } from 'react'
import Sidebar from '../src/components/Sidebar'
import Player from '../src/components/Player'
import { Route, Routes } from 'react-router-dom'
import Display from '../src/components/Display'
import { PlayerContext } from '../src/context/PlayerContext'


const App = () => {
  const {audioRef,track}=useContext(PlayerContext);
  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <Sidebar/>
        <Display/>
      </div>
      <Player/>
      <audio ref={audioRef} src={track.file} preload="auto"></audio>
    </div>
  )
}

export default App