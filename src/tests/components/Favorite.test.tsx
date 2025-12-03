import { render, screen, cleanup} from "@testing-library/react";
// import { MemoryRouter } from "react-router-dom";
import Favorite from "../../components/Favorite";
import { describe, it, expect, afterEach } from "vitest";

afterEach(() => {
  // optional: force cleanup if needed
  cleanup()
});

describe("Favorites...", async () => {
   
  it("renders Favorite button - true", async () => {    

    render(
      <Favorite
        initial={true}
        onToggle={() => {}}
      />
    );    

    const element = await screen.findByTestId('favorite-btn');
    expect(element).toBeDefined();

    expect(element.textContent).toEqual("❤️");

  }); 

  it("renders Favorite button - false", async () => {    

    render(
      <Favorite
        initial={false}
        onToggle={() => {}}
      />
    );    

    const element = await screen.findByTestId('favorite-btn');
    expect(element).toBeDefined();

    expect(element.textContent).toEqual("🤍");

  });

});
