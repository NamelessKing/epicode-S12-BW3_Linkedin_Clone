import TopNavbar from "./Navbar";
import Footer from "./Footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <TopNavbar />

      <main>{children}</main>

      <Footer />
    </>
  );
};

export default MainLayout;

