import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

describe("Greet", () => {
  test("挨拶メッセージが正常にレンダリングされる", () => {
    render(<Greet />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });

  describe("Nested", () => {
    test("挨拶と名前を一緒に名前をレンダングする", () => {
      render(<Greet name="hoda" />);
      const textElement = screen.getByText(/hello hoda/i);
      expect(textElement).toBeInTheDocument();
    });
  });
});
