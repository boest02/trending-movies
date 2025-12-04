import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import ImageLoader from "../../components/ImageLoader";
import { describe, it, expect, afterEach } from "vitest";

afterEach(() => {
  // force cleanup if needed
  cleanup();
});

describe("ImageLoader...", async () => {
  it("unit tests", async () => {
    render(<ImageLoader src="nothing" alt="test alt" />);

    // skeleton should be present since image is not loaded yet
    const element = await screen.findByTestId("skeleton-test");
    expect(element).toBeDefined();

    // get the img element
    const img = screen.getByRole("img");

    // initially it should have hidden-img class
    expect(img).toHaveClass("hidden-img");

    // simulate image load
    fireEvent.load(img);

    // after load, it should have fade-in class    
    expect(img).toHaveClass("fade-in");

    // skeleton should be gone after image load
    const failed = screen.queryByTestId("skeleton-test");
    expect(failed).toBeNull();
  });
});
