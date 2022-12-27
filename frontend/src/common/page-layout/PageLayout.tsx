import { NavBar } from "./components/NavBar";

interface IPageLayout {
  children: any;
}

export const PageLayout = ({ children }: IPageLayout) => {
  return (
    <div>
      <NavBar />
      <div>{children}</div>
    </div>
  );
};
