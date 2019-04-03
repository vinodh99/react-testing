import React from "react";
import renderer from "react-test-renderer";
import Single from "./Single";

describe("single snapshot", () => {
  test("app snapshot test", () => {
    const component = renderer.create(<Single />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
