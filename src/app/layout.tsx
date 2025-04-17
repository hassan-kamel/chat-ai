import type { Metadata } from "next";
import { Noto_Sans, Noto_Sans_Mono } from "next/font/google";
import "./globals.css";

const NotoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

const NotoMono = Noto_Sans_Mono({
  variable: "--font-noto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chat AI – Next.js OpenAI Chatbot",
  description:
    "A fully responsive, feature-rich AI chat application built with Next.js. Includes real-time AI chat, code generation with syntax highlighting, user authentication, guest mode, OpenAI key management, chat history, and more. Designed for accessibility and seamless user experience.",
  keywords: [
    "AI Chat",
    "Next.js",
    "OpenAI",
    "Chatbot",
    "Code Generation",
    "Syntax Highlighting",
    "User Authentication",
    "Guest Mode",
    "Responsive Design",
    "Chat History",
  ],
  authors: [{ name: "Hassan Kamel" }],
  creator: "Hassan Kamel",
  openGraph: {
    title: "Chat AI – Next.js OpenAI Chatbot",
    description:
      "A modern, accessible AI chat app with code generation, authentication, guest mode, and more. Powered by Next.js and OpenAI.",
    url: "https://your-app-url.com",
    siteName: "Chat AI",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${NotoSans.variable} ${NotoMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
