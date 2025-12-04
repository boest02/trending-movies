import { render, screen, cleanup} from "@testing-library/react";
import Loader from "../../components/Loader";
import { describe, it, expect, afterEach } from "vitest";

afterEach(() => {
  // force cleanup if needed
  cleanup()
});

describe("Loader...", async () => {
   
  it("renders the loader - with message", async () => {    

    render(<Loader message="Loading test message..." />);        

    const element = await screen.findByTestId('loading-test');
    expect(element).toBeDefined();

    expect(element.textContent).toContain("Loading test message...");

  }); 

  it("renders the loader - no message", async () => {    

    render(<Loader />);        

    const element = await screen.findByTestId('loading-test');
    expect(element).toBeDefined();

    expect(element.textContent).toContain("");

  }); 

});
