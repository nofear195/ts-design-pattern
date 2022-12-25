import {
  ApplyRequest,
  CommonManager,
  Majordomo,
  GeneralManager,
} from "./chainOfResponsibility";

test("personal leave apply", () => {
  const pm = new CommonManager("pm manager");
  const gl = new Majordomo("majordom");
  const gm = new GeneralManager("general manager");

  pm.setSuperior(gl);
  gl.setSuperior(gm);

  const request = new ApplyRequest();
  request.setRequestType("leave");
  request.setRequestContent("apply for personal leave");

  request.setRequestCount(2);
  expect(pm.apply(request)).toBe(
    "2 days of leave apply for personal leave approved"
  );

  request.setRequestCount(4);
  expect(pm.apply(request)).toBe(
    "apply for personal leave is approved by majordom"
  );

  request.setRequestCount(14);
  expect(pm.apply(request)).toBe("Everything is approved by general manager");

  request.setRequestType("increase salary");
  request.setRequestCount(100);
  expect(pm.apply(request)).toBe("accept");

  request.setRequestCount(10000);
  expect(pm.apply(request)).toBe("reject");
});
