import { Suspense } from "react";
import NavigationBar from "./components/NavigationBar/NavigationBar";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <NavigationBar />
      <Suspense fallback={null}>{children}</Suspense>
    </>
  );
};

export default Layout;
