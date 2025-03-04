import { Metadata } from "next";
import { zenKurenaido, yomogi, kaiseiDecol } from "@/lib/fonts";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Graphic Record Sharing",
  description: "グラフィックレコーディング風HTMLインフォグラフィックを投稿・共有できるプラットフォーム",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${zenKurenaido.variable} ${yomogi.variable} ${kaiseiDecol.variable}`}>
      <body className="font-sans min-h-screen flex flex-col">
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
