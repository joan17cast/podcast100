import Header from "@/components/layout/header";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col">
      <Header />
      {children}
    </div>
  );
}

export default Layout;
