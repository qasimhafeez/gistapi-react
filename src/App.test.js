import { render, screen, act } from "@testing-library/react";
import App from "./App";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        avatar_url: "https://avatars.githubusercontent.com/u/73064640?v=4",
        login: "ibnpaul",
      }),
  })
);

describe("App", () => {
  it("Get the gist by user", async () => {
    await act(async () => render(<App />));
    expect(screen.getByText("ibnpaul")).toBeInTheDocument();
  });
});
