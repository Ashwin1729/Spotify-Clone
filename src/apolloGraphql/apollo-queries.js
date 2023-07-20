import { gql } from "@apollo/client";

// GraphQl query for fetching music data.

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
