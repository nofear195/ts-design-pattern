abstract class Electronics {
  private power: boolean;

  constructor() {
    this.power = false;
  }

  powerOn(): void {
    this.power = true;
  }
  powerOff(): void {
    this.power = false;
  }

  isPowerOn(): boolean {
    return this.power;
  }

  showStatus(): string {
    return this.power ? "running" : "unopened";
  }
}

class PlayStation extends Electronics {
  private cd: string;

  putCd(cd: string) {
    this.cd = cd;
  }

  getCd(): string {
    return this.cd;
  }

  play(): string {
    return `${this.constructor.name} play ${this.cd}`;
  }

  showStatus(): string {
    return this.isPowerOn()
      ? `current cd is ${this.cd}`
      : "playstation unopened";
  }
}

class Stereo extends Electronics {
  private volumne: number;

  constructor() {
    super();
    this.volumne = 50;
  }

  setVolumne(volumne: number): void {
    this.volumne = volumne;
  }

  getVolumne(): number {
    return this.volumne;
  }

  showStatus(): string {
    return this.isPowerOn()
      ? `stereo volumne is ${this.volumne}`
      : "stereo unopened";
  }
}

class Television extends Electronics {
  private volumne: number;
  private source: string;
  private channel: number;

  constructor() {
    super();
    this.volumne = 50;
    this.source = "tvBox";
    this.channel = 9;
  }

  setVolumne(volumne: number): void {
    this.volumne = volumne;
  }

  getVolumne(): number {
    return this.volumne;
  }

  switchSource(source: string): void {
    this.source = source;
  }

  switchChannel(channel: number): void {
    this.channel = channel;
  }

  showStatus(): string {
    if (!this.isPowerOn()) return "tv unopened";
    if (this.source.includes("ktv")) return "ktv is running";
    return `tv is running on ${this.channel}`;
  }
}

class KTVSystem extends Electronics {
  private song: string;

  selectSong(song: string): void {
    this.song = song;
  }
  playSong(): string {
    return `${this.constructor.name} play ${this.song}`;
  }
}

// facade class

class RoomFacade {
  tv: Television;
  stereo: Stereo;
  ps: PlayStation;
  ktv: KTVSystem;
  constructor() {
    this.stereo = new Stereo();
    this.tv = new Television();
    this.ps = new PlayStation();
    this.ktv = new KTVSystem();
  }

  setAllVolumne(volumne: number): void {
    if (this.stereo.isPowerOn()) this.stereo.setVolumne(volumne);
    if (this.tv.isPowerOn()) this.tv.setVolumne(volumne);
  }

  getAllVolumne(): number[] {
    const result: number[] = [];
    if (this.stereo.isPowerOn()) result.push(this.stereo.getVolumne());
    if (this.tv.isPowerOn()) result.push(this.tv.getVolumne());
    return result;
  }

  turnOffAll(): void {
    this.stereo.powerOff();
    this.tv.powerOff();
    this.ps.powerOff();
    this.ktv.powerOff();
  }

  showAllStatus(): string[] {
    const status: string[] = [];
    status.push(this.stereo.showStatus());
    status.push(this.tv.showStatus());
    status.push(this.ps.showStatus());
    status.push(this.ktv.showStatus());
    return status;
  }

  // play movie through playStation

  readyToPlayMovie(cd: string): void {
    this.stereo.powerOn();
    this.tv.powerOn();
    this.setAllVolumne(50);
    this.tv.switchSource("ps");
    this.ps.powerOn();
    this.ps.putCd(cd);
  }

  playMovie(): string {
    return this.ps.isPowerOn() ? this.ps.play() : this.ps.showStatus();
  }
  getMovieCd(): string {
    return this.ps.getCd();
  }

  // watch tv

  watchTv(): void {
    this.tv.powerOn();
    this.tv.switchSource("tvBox");
  }

  switchChannel(channel: number): void {
    this.tv.switchChannel(channel);
  }

  // play ktv

  readyToPlayKTV(): void {
    this.stereo.powerOn();
    this.ktv.powerOn();
    this.tv.powerOn();
    this.setAllVolumne(30);
    this.tv.switchSource("ktv");
  }

  selectSong(song: string): void {
    if (this.ktv.isPowerOn()) this.ktv.selectSong(song);
  }

  playSong(): string {
    return this.ktv.isPowerOn() ? this.ktv.playSong() : this.ktv.showStatus();
  }

  tvStatus():string{
    return this.tv.showStatus();
  }
  ktvStatus():string{
    return this.ktv.showStatus();
  }

}

export default RoomFacade;
