import RoomFacade from "./facade";

test("play movie", () => {
  const facade = new RoomFacade();

  let result = "";
  let resultList: string[] = [];
  let volumeList: number[] = [];
  result = facade.playMovie();
  expect(result).toBe("playstation unopened");

  facade.readyToPlayMovie("transformer");
  result = facade.getMovieCd();
  expect(result).toBe("transformer");
  result = facade.playMovie();
  expect(result).toBe("PlayStation play transformer");

  resultList = facade.showAllStatus();
  expect(resultList).toStrictEqual([
    "stereo volume is 50",
    "tv is running on 9",
    "current cd is transformer",
    "unopened",
  ]);

  volumeList = facade.getAllVolume();
  expect(volumeList).toStrictEqual([50, 50]);

  facade.turnOffAll();
  resultList = facade.showAllStatus();
  expect(resultList).toStrictEqual([
    "stereo unopened",
    "tv unopened",
    "playstation unopened",
    "unopened",
  ]);
});

test("watch tv", () => {
  const facade = new RoomFacade();
  facade.watchTv();
  facade.switchChannel(10);
  let resultList: string[] = [];
  resultList = facade.showAllStatus();
  expect(resultList).toStrictEqual([
    "stereo unopened",
    "tv is running on 10",
    "playstation unopened",
    "unopened",
  ]);
});

test("play ktv", () => {
  const facade = new RoomFacade();

  let result = "";

  result = facade.playSong();
  expect(result).toBe("unopened");

  facade.readyToPlayKTV();
  facade.selectSong("moon light");

  result = facade.playSong();
  expect(result).toBe("KTVSystem play moon light");

  result = facade.tvStatus();
  expect(result).toBe("ktv is running");

  result = facade.ktvStatus();
  expect(result).toBe("running");
});
