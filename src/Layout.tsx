import { Suspense } from "react";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import CustomLoader from "./components/Loader/CustomLoader";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <NavigationBar />
      <Suspense fallback={<CustomLoader />}>{children}</Suspense>
    </>
  );
};

export default Layout;
