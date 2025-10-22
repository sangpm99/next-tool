"use client";

import React, { type ReactNode } from "react";
import { useState, useEffect } from "react";

import type { MenuProps } from "antd";
import { Layout, Menu, theme, Typography } from "antd";

import Logo from "../components/Logo";

const {
  Header: AntdHeader,
  Content: AntdContent,
  Footer: AntdFooter,
  Sider: AntdSider,
} = Layout;
const { Title } = Typography;

interface Props {
  children: ReactNode;
}

const siderStyle: React.CSSProperties = {
  overflow: "auto",
  height: "100vh",
  position: "sticky",
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  background: "#fff",
};

const items: MenuProps["items"] = [
  {
    key: "products",
    icon: <i className="ri-shirt-line !text-[18px]"></i>,
    label: "Sản phẩm",
  },
  {
    key: "product-categories",
    icon: <i className="ri-inbox-2-line !text-[18px]"></i>,
    label: "Danh mục",
  },
];

export default function DefaultLayout({ children }: Props) {
  const [defaultSelectedKeys, setDefaultSelectedKeys] = useState<string[]>([
    "products",
  ]);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const onNavigateToHome = () => {
    window.location.href = "/";
  };

  const onNavigate: MenuProps["onClick"] = (e) => {
    window.location.href = `/${e.key}`;
  };

  useEffect(() => {
    setDefaultSelectedKeys([window.location.pathname.split("/")[1]]);
  }, []);

  return (
    <>
      <Layout hasSider>
        <AntdSider style={siderStyle}>
          <div
            className="px-7 py-2 flex items-center gap-2 cursor-pointer"
            onClick={onNavigateToHome}
          >
            <Logo></Logo>
            <Title level={4} className="!mb-0 text-primary">
              Tool
            </Title>
          </div>
          <Menu
            mode="inline"
            onClick={onNavigate}
            selectedKeys={defaultSelectedKeys}
            items={items}
            className="main-menu"
          />
        </AntdSider>
        <Layout>
          <AntdHeader style={{ padding: 0, background: colorBgContainer }}>
            <div className="flex justify-end items-center p-5 gap-5 text-caption">
              <i className="ri-window-line !text-xl"></i>
              <i className="ri-translate-2 !text-xl"></i>
              <i className="ri-notification-line !text-xl"></i>
              <i className="ri-user-line !text-xl"></i>
            </div>
          </AntdHeader>
          <AntdContent style={{ margin: "24px 16px 0", overflow: "initial" }}>
            {children}
          </AntdContent>
          <AntdFooter style={{ textAlign: "center" }}>
            Created by 2H ©{new Date().getFullYear()}
          </AntdFooter>
        </Layout>
      </Layout>
    </>
  );
}
