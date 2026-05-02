import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "毛茸茸宠物洗护 | 宠物洗澡美容护理",
  description: "毛茸茸宠物洗护店，提供猫犬洗澡、美容修剪、SPA 护理、祛味护理和预约接送服务。"
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
