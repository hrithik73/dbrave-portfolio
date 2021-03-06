import React from "react"
import Image from "next/image"
import { FaPlay } from "react-icons/fa"

const RecentSongCard = ({ item }) => {
  return (
    <div className="w-full justify-center sm:w-1/2 md:w-1/3 flex flex-col p-3">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col">
        <div className="bg-cover lg:h-full lg:w-full h-48 w-48">
          <Image
            src={item.imgURL}
            alt="song-bg"
            height="100%"
            width="100%"
            objectFit="cover"
            layout="responsive"
          />
        </div>
        <div className="p-4 flex-1 flex  flex-col">
          <div className="mb-4 text-grey-darker text-sm flex-1">
            <h3 className="mb-4 text-2xl">{item.title}</h3>
            <p>{item.artist}</p>
          </div>
          <button
            className="flex mx-3 px-3 py-2 w-full bg-red-600 shadow-red-600/50 text-white text-xs justify-center self-center font-bold uppercase rounded"
            onClick={() => {
              window.open(item.link)
            }}
          >
            Play
            <FaPlay className="ml-1 self-center" />
          </button>
        </div>
      </div>
    </div>
  )
}
export default RecentSongCard
