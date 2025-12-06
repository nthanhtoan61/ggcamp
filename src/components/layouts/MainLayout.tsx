import { Header } from "./Header";
import { Footer } from "./Footer";
import { TopBar } from "./TopBar";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="tm-page">
      <TopBar />
      <Header />
      {children}
      <Footer />
    </div>
  );
};
