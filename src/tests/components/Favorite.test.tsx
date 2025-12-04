import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import Favorite from "../../components/Favorite";
import { vi, describe, it, expect, afterEach } from "vitest";

const FAVORITE = '❤️';
const NOT_FAVORITE = '🤍'

afterEach(() => {
  // force cleanup if needed
  cleanup();
});

describe("Favorites...", async () => {
  it("renders Favorite button - true", async () => {
    render(<Favorite initial={true} onToggle={() => {}} />);

    const element = await screen.findByTestId("favorite-btn");
    expect(element).toBeDefined();

    // with correct emoji
    expect(element.textContent).toEqual(FAVORITE);
  });

  it("renders Favorite button - false", async () => {
    render(<Favorite initial={false} onToggle={() => {}} />);

    const element = await screen.findByTestId("favorite-btn");
    expect(element).toBeDefined();

    // with correct emoji
    expect(element.textContent).toEqual(NOT_FAVORITE);
  });

  it("renders Favorite button - no initial prop", async () => {
    render(<Favorite onToggle={() => {}} />);

    const element = await screen.findByTestId("favorite-btn");
    expect(element).toBeDefined();
  });

  it("calls the onToggle when clicked", async () => {
    // mock the callback function
    const onToggleMock = vi.fn();

    render(<Favorite initial={true} onToggle={onToggleMock} />);

    // make sure it's rendered
    const element = await screen.findByTestId("favorite-btn");
    expect(element).toBeDefined();

    // with correct emoji
    expect(element.textContent).toEqual(FAVORITE);    

    // simulate click of favorite button
    fireEvent.click(screen.getByRole("button"));

    // onToggle should be called
    expect(onToggleMock).toHaveBeenCalledTimes(1);

    // emoji should have changed
    expect(element.textContent).toEqual(NOT_FAVORITE);
  });
});
