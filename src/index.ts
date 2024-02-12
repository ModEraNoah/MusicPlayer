import { MusicPlayer } from "./MusicPlayer"
import { Playlist } from "./Playlist"
import { Song } from "./Song"

console.log("Das ist ein TEst")

let s = new Song("art", "newGen", "songName", 1234)

let player = new MusicPlayer()

player.playSong(s)
player.stopCurrentSong()

const songs: Song[] = [
	new Song("art", "newGen", "songName", 1234),
	new Song("art", "newGen", "songName2", 1234),
	new Song("art", "newGen", "songName3", 1234),
	new Song("art", "newGen", "songName4", 1234),
	new Song("art", "newGen", "songName5", 1234),
]

const playlist = new Playlist("bl", "me", true, 123, songs)


player.playPlaylist(playlist, false)
