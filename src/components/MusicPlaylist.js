import { gql, useQuery } from "@apollo/client";
import React from "react";

const GET_SONGS = gql`
  query Query($playlistId: Int!, $search: String) {
    getSongs(playlistId: $playlistId, search: $search) {
      _id
      artist
      duration
      photo
      title
      url
    }
  }
`;

const MusicPlaylist = ({ id, searchField }) => {
  const { loading, error, data } = useQuery(GET_SONGS, {
    variables: {
      playlistId: id,
      search: searchField === "" ? null : searchField,
    },
  });

  return (
    <ul className="flex flex-col items-center justify-center w-full ">
      {data?.getSongs.map((song, idx) => {
        return (
          <li
            className="flex items-center justify-between my-2 w-full hover:bg-gray-600 cursor-pointer p-3 rounded-lg duration-500"
            key={idx}
          >
            <div className="flex items-center space-x-5">
              <div className="w-12 h-12 rounded-full">
                <img
                  src={song.photo}
                  alt={song.title}
                  className="w-full h-full rounded-full object-contain"
                />
              </div>
              <div className="flex flex-col text-left text-white justify-center">
                <h3 className="text-lg">
                  {song.title.length > 25
                    ? song.title.substring(0, 25) + "..."
                    : song.title}
                </h3>
                <p className="text-sm text-gray-400">{song.artist}</p>
              </div>
            </div>
            <div className="text-white">
              {song.duration.toString().slice(0, 1) +
                ":" +
                song.duration.toString().slice(1)}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default MusicPlaylist;
