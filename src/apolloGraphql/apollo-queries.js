import { gql } from "@apollo/client";

export const GET_SONGS = gql`
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
