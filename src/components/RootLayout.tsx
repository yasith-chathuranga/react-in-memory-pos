import React from "react";
import { Navigation } from "./Navigation.tsx";
import { Outlet } from "react-router";

export function RootLayout() {
  return (
    <>
      <Navigation></Navigation>
      <main className="p-4">
        <Outlet></Outlet>
      </main>
    </>
  );
}
