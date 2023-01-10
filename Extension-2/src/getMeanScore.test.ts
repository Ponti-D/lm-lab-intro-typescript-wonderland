import {getMeanScore} from "../src/getMeanScore";

describe("getMeanScore", () => {
    test("returns the mean score from an array of scores", () => {
      expect(getMeanScore([8, 9, 7])).toBe(8);
      expect(getMeanScore([88, 86, 93])).toBe(89);
    });
  
    test("returns the mean to 2 decimal places", () => {
      expect(getMeanScore([24, 44, 56, 11, 12, 17, 34])).toBe(28.29);
    });
  });