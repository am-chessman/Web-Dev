import NavigationBar from "@components/nav";

export const metadata = {
  title: "Bolt Clone",
  description: "A clone of the bolt Wesbiste",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
      </head>
      <body className="">
        <main className="app">
          <NavigationBar />        
          {children}
        </main>
      </body>
    </html>
  );
}
