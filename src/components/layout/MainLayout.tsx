import { type ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      {/* 3-column layout placeholder */}
      <div>{children}</div>
    </div>
  );
};

export default MainLayout;
