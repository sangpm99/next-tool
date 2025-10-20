"use client";

import { App as AntdApp } from "antd";
import type { ReactNode } from "react";
import "@ant-design/v5-patch-for-react-19";

import { StyleProvider } from "@ant-design/cssinjs";
import { ConfigProvider } from "antd";

export default function AppProviders({
  children,
}: {
  children: ReactNode;
  lang: string;
}) {
  return (
    <AntdApp>
      <StyleProvider hashPriority="high">
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#CA0808",
              fontFamily: "var(--font-open), sans-serif",
            },
            components: {
              Rate: {
                starColor: "#FFC069",
                starSize: 14,
              },
            },
          }}
        >
          {children}
        </ConfigProvider>
      </StyleProvider>
    </AntdApp>
  );
}
