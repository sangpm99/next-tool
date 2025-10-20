import type { ReactNode } from "react";

import type { MenuProps } from "antd";
import { Layout, Menu, theme } from "antd";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

interface Props {
  children: ReactNode;
}

export default function DefaultLayout({ children }: Props) {
  return (
    <>
      <Header></Header>
      <main className="layout-spacing">
        <Sidebar></Sidebar>
        <div>{children}</div>
      </main>
      <Footer></Footer>
    </>
  );
}
