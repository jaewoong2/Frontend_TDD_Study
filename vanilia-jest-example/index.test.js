const { sum, person, toggle, range } = require("./index");

/**
 *   describe:  여러 테스트를 한 그룹으로 묶고 설명을 붙임
 *   describe('explain text', callback for grouping tests)
 *
 *   it: 실제 테스트가 실행 되는 테스트 명세를 작성 할 때 사용
 *   describe('explain text', callback for test code)
 */
describe("test index.js file", () => {
  // toBe: 단순 값 비교
  it("sums 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });

  // toEqual: Object 를 비교하기 위한 Matcher
  it("makes a person", () => {
    expect(person("Kim", 20)).toEqual({ name: "Kim", age: 20 });
  });

  // toBeTruthy: True 값을 체크할 때 사용하는 Matcher
  // toBeFalsy: False 값을 체크할 때 사용하는 Matcher
  it("return Fales", () => {
    expect(toggle(true)).not.toBeTruthy();
    expect(toggle(true)).toBeFalsy();
  });

  // toContain: 배열에 value가 있는지 확인할 때 사용
  it("Has 2", () => {
    expect(range(1, 3)).toContain(2);
  });
});
