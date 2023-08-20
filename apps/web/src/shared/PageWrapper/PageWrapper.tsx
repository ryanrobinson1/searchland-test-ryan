import React from "react";
import { Navigation } from "ui";

interface PageWrapperProps {
  children: React.ReactNode;
}

export const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <>
      <Navigation
        routes={[
          {
            name: "Home",
            href: "/",
          },
          {
            name: "List Users",
            href: "/users",
          },
          {
            name: "Create User",
            href: "/users/create",
          },
          {
            name: "Modify User",
            href: "/users/1234",
          },
        ]}
      />
      <div className="bg-neutral-50">
        <div className="max-w-screen-lg	m-auto">{children}</div>
      </div>
    </>
  );
};
