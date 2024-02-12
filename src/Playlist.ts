import { walkUpBindingElementsAndPatterns } from "typescript";
import { Song } from "./Song";

export class Playlist {
	private _name: string;
	private _owner: string;
	private _isPublic: boolean;
	private _numberOfSongs: number;
	private _songs: Song[];

	constructor(name: string, owner: string, isPublic: boolean, numberOfSongs: number, songs: Song[]) {
		this._name = name;
		this._owner = owner;
		this._isPublic = isPublic;
		this._numberOfSongs = numberOfSongs;
		this._songs = songs;
	}

	public get name(): string {
		return this._name;
	}

	public get owner(): string {
		return this._owner;
	}

	public get isPublic(): boolean {
		return this._isPublic;
	}

	public get numberOfSongs(): number {
		return this._numberOfSongs;
	}

	public get songs(): Song[] {
		return this._songs;
	}

	public set songs(songs: Song[]){
		this._songs = songs;
	}

	public get lengthInSeconds(): number {
		return this.songs.reduce((acc: number, current: Song): number => {
			return acc + current.lengthInSeconds
		}, 0.0)
	}

	public addSong(song: Song): void {
		this._songs.push(song)
	}

	public switchPublicity(): void {
		this._isPublic = !this._isPublic
	}

	public changeName(newName: string): void {
		this._name = newName
	}
}
