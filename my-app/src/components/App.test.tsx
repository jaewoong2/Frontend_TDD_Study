/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { render, screen } from "@testing-library/react";
import App from "./App";

/**
 * render: 리액트 컴포넌트를 화면에 표시하기 위함
 * screen: 리액트 컴포넌트가 표시된 화면을 의미한다.
 *
 * 실제로는 화면에 나타나지 않으나,
 * render 함수는 메모리상에 돔을 만들고 screen이 해당 돔을 접근하여 확인을 한다
 *
 * getByText(text): 화면에서 text를 가지고 있는 돔 요소를 반환
 */
test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);

  // linkElement 가 돔에 실제로 표시 되었는지 확인한다
  expect(linkElement).toBeInTheDocument();
});

describe("<App />", () => {
  it("renders component correctly", () => {
    const { container } = render(<App />);
    const linkElement = screen.getByText(/learn react/i);

    // linkElement 가 돔에 실제로 표시 되었는지 확인한다
    expect(linkElement).toBeInTheDocument();

    expect(screen.getAllByAltText("logo")).toHaveLength(1);
    expect(screen.getAllByAltText("logo")[0]).toHaveAttribute(
      "src",
      "logo.svg"
    );

    // expect(screen.getAllByRole("link")).toHaveLength(1);
    // expect(screen.getAllByRole("link")[0]).toHaveAttribute("src", "logo.svg");

    expect(container.getElementsByTagName("p")).toHaveLength(1);
    expect(container.getElementsByTagName("p")[0]).toHaveTextContent(
      "Edit src/App.js and save to reload"
    );

    expect(container).toMatchSnapshot();
  });
});
