import React from 'react'
import FilterList from './FilterList'
import VideoList from './VideoList'

const MainContainer = () => {
  return (
    <div className='flex flex-col gap-4 w-11/12 md:w-10/12 mx-auto mb-8'>
        <FilterList />
        <VideoList />
    </div>
  )
}

export default MainContainer