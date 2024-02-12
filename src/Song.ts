export class Song {
	private _artist: string;
	private _genre: string;
	private _name: string;
	private _lengthInSecondsInSeconds: number;

	constructor(artist: string, genre: string, name: string, lengthInSeconds: number) {
		this._artist = artist;
		this._genre = genre;
		this._name = name;
		this._lengthInSecondsInSeconds = lengthInSeconds;
	}

	public get artist(): string {
		return this._artist;
	}

	public get genre(): string {
		return this._genre;
	}

	public get name(): string {
		return this._name;
	}

	public get lengthInSeconds(): number {
		return this._lengthInSecondsInSeconds;
	}
}
