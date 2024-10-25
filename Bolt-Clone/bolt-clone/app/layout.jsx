import "@styles/globals.css"
import NavigationBar from "@components/nav";
import Footer from "@components/footer";

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
      <body className="m-0 bg-white">
        <main className="app">
          <NavigationBar />        
          {children}
          {/* <Footer /> */}
        </main>
      </body>
    </html>
  );
}
