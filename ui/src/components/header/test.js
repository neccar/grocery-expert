import React from "react";
import renderer from "react-test-renderer";
import SearchAppBar from ".";

test("Renders header", () => {
  const component = renderer.create(<SearchAppBar />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
