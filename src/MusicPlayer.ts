import { Playlist } from "./Playlist";
import { Song } from "./Song";

export class MusicPlayer {

	public currentSong: Song | null = null;
	public currentPlaylist: Playlist | null = null;

	public playSong(song: Song): void {
		console.log("...playing", song.name, "from", song.artist)
		this.currentSong = song;
	}

	public stopCurrentSong(): void {
		if (this.currentSong) {
			console.log("...stop playing", this.currentSong.name)
			this.currentSong = null
		} else {
			console.log("...currently no song playing")
		}
	}

	public async playPlaylist(playlist: Playlist, toShuffle: boolean): Promise<void> {
		console.log("...playing playlist", playlist.name, "made by", playlist.owner)

		this.currentPlaylist = playlist;

		if (toShuffle) {
			this.currentPlaylist = this.shufflePlaylist(playlist)
		}

		for (let i = 0; i < this.currentPlaylist.songs.length; i++) {
			this.playSong(this.currentPlaylist.songs[i])
			await new Promise((resolve) => {
				setTimeout(() => { console.log("song is now over"), resolve(0)}, 5000)
			})
			this.stopCurrentSong()
		}
	}

	private shufflePlaylist(playlist: Playlist): Playlist {
		let shuffledSongs: Song[] = [];
		for (let i = 0; i < playlist.songs.length; i++) {
			const randSongIndex: number = Math.random() * playlist.songs.length;
			shuffledSongs[i] = playlist.songs[randSongIndex]
		}
		let shuffledPlaylist: Playlist;
		try {
			shuffledPlaylist = JSON.parse(JSON.stringify(playlist))
			shuffledPlaylist.songs = shuffledSongs;
		} catch (error) {
			console.error("error while parsing shuffled playlist:", error)
			shuffledPlaylist = playlist
		}
		return shuffledPlaylist;
	}
}
