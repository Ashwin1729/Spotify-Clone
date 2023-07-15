import React from "react";

const songs = [
  {
    _id: "61b6f14dc2f7cafd968c31f0",
    title: "Starboy",
    photo:
      "https://images.genius.com/e95f361c27487088fd9dddf8c967bf89.500x500x1.jpg",
    duration: 320,
    url: "https://storage.googleapis.com/similar_sentences/Imagine%20Dragons%20-%20West%20Coast%20(Pendona.com).mp3",
    artist: "Weeknd",
  },
  {
    _id: "61b6f14dc2f7cafd968c31f4",
    title: "Adventure of a Lifetime ",
    photo: "https://i.scdn.co/image/ab67616d0000b273f864bcdcc245f06831d17ae0",
    duration: 290,
    url: "https://storage.googleapis.com/similar_sentences/Imagine%20Dragons%20-%20West%20Coast%20(Pendona.com).mp3",
    artist: "Coldplay",
  },
  {
    _id: "61b6f14dc2f7cafd968c31fc",
    title: "I Bet My Life",
    photo: "https://i.scdn.co/image/ab67616d0000b2736a6a889eef62af7b190ec713",
    duration: 379,
    url: "https://storage.googleapis.com/similar_sentences/Imagine%20Dragons%20-%20West%20Coast%20(Pendona.com).mp3",
    artist: "Imagine Dragons",
  },
  {
    _id: "61b6f14dc2f7cafd968c3204",
    title: "Ain't Gonna Grieve",
    photo:
      "https://media.newyorker.com/photos/59fb842e68eaa81ba8a061a2/1:1/w_3287,h_3287,c_limit/Fishman-Loving-Bob-Dylan-at-His-Lowest-Point-2.jpg",
    duration: 410,
    url: "https://storage.googleapis.com/similar_sentences/Imagine%20Dragons%20-%20West%20Coast%20(Pendona.com).mp3",
    artist: "Bob Dylan",
  },
  {
    _id: "61b6f14dc2f7cafd968c31f5",
    title: "Amazing Day ",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScCTDI-nskC5wUkwseWIlHnsWBYtpNguiD-IB68gU2p9nrVTIIehiD1QzUuYeN_ZKC_GI&usqp=CAU",
    duration: 450,
    url: "https://storage.googleapis.com/similar_sentences/Imagine%20Dragons%20-%20West%20Coast%20(Pendona.com).mp3",
    artist: "Coldplay",
  },
  {
    _id: "61b6f14dc2f7cafd968c31f9",
    title: "Shots",
    photo:
      "http://a10.gaanacdn.com/images/albums/96/1525196/crop_480x480_1525196.jpg",
    duration: 320,
    url: "https://storage.googleapis.com/similar_sentences/Imagine%20Dragons%20-%20West%20Coast%20(Pendona.com).mp3",
    artist: "Imagine Dragons",
  },
  {
    _id: "61b6f14dc2f7cafd968c31f1",
    title: "Til Kingdom Come ",
    photo: "https://i1.sndcdn.com/artworks-000084069767-om0uyb-t500x500.jpg",
    duration: 415,
    url: "https://storage.googleapis.com/similar_sentences/Imagine%20Dragons%20-%20West%20Coast%20(Pendona.com).mp3",
    artist: "Coldplay",
  },
  {
    _id: "61b6f14dc2f7cafd968c3205",
    title: "It's the Most Wonderful Time of the Year",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Joan_Baez_Bob_Dylan_crop.jpg/1200px-Joan_Baez_Bob_Dylan_crop.jpg",
    duration: 410,
    url: "https://storage.googleapis.com/similar_sentences/Imagine%20Dragons%20-%20West%20Coast%20(Pendona.com).mp3",
    artist: "Bob Dylan",
  },
  {
    _id: "61b6f14dc2f7cafd968c3208",
    title: "Hall of Fame",
    photo: "https://i.scdn.co/image/ab67616d0000b273dd8408b50f45c66139f44ce2",
    duration: 321,
    url: "https://storage.googleapis.com/similar_sentences/Imagine%20Dragons%20-%20West%20Coast%20(Pendona.com).mp3",
    artist: "The Script",
  },
  {
    _id: "61b6f14dc2f7cafd968c3201",
    title: "Amsterdam",
    photo:
      "https://upload.wikimedia.org/wikipedia/en/e/e0/Imagine_Dragons_-_%22Amsterdam%22_%28Promotional_single%29.jpg",
    duration: 280,
    url: "https://storage.googleapis.com/similar_sentences/Imagine%20Dragons%20-%20West%20Coast%20(Pendona.com).mp3",
    artist: "Imagine Dragons",
  },
  {
    _id: "61b6f14dc2f7cafd968c31fd",
    title: "It Comes Back to You",
    photo:
      "https://external-preview.redd.it/SEOiJhnBbwkfSbmAHFPh8UrvpyKcRLyVbdtf5DWNtGc.jpg?auto=webp&s=8f815af3594caa6f01ef25d3da2a8b4e1a4239a6",
    duration: 560,
    url: "https://storage.googleapis.com/similar_sentences/Imagine%20Dragons%20-%20West%20Coast%20(Pendona.com).mp3",
    artist: "Imagine Dragons",
  },
];

const MusicPlaylist = () => {
  return (
    <ul className="flex flex-col items-center justify-center w-full ">
      {songs.map((song, idx) => {
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
