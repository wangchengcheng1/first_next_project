// components/Layout.tsx
import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <>
    <header>Header Content</header>
    <main>{children}</main>
    <footer>Footer Content</footer>
  </>
);

export default Layout;
