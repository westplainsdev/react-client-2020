import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AppProvider from "./components/context/app-provider";
import AppRoutes from "./components/start-layout/routes";

function renderAppAt(path: string) {
  return render(
    <AppProvider>
      <MemoryRouter initialEntries={[path]}>
        <AppRoutes />
      </MemoryRouter>
    </AppProvider>
  );
}

describe("App", () => {
  it("renders the home page heading at /", () => {
    renderAppAt("/");
    expect(screen.getByRole("heading", { name: "Home" })).toBeInTheDocument();
  });

  it("renders the about page heading at /about", () => {
    renderAppAt("/about");
    expect(screen.getByRole("heading", { name: "About" })).toBeInTheDocument();
  });

  it("renders the data page heading at /data", () => {
    renderAppAt("/data");
    expect(
      screen.getByRole("heading", { name: "Data Example" })
    ).toBeInTheDocument();
  });

  it("renders the users page heading at /users", () => {
    renderAppAt("/users");
    expect(screen.getByRole("heading", { name: "Users" })).toBeInTheDocument();
  });

  it("renders the profile page heading at /profile", () => {
    renderAppAt("/profile");
    expect(
      screen.getByRole("heading", { name: "Profile" })
    ).toBeInTheDocument();
  });

  it("renders the settings page heading at /settings", () => {
    renderAppAt("/settings");
    expect(
      screen.getByRole("heading", { name: "Settings" })
    ).toBeInTheDocument();
  });

  it("renders the not-found page for an unknown route", () => {
    renderAppAt("/does-not-exist");
    expect(screen.getByText(/Page not found/i)).toBeInTheDocument();
  });
});
