import NavigationBar from "@components/nav"
import Footer from "@components/footer"

export const metadata = {
  title: 'Bolt clone',
  description: 'A clone of the Bolt Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <body>
          <main className="app">
            <NavigationBar />
            {children}
            <Footer />
          </main>
        </body>
      </head>
    </html>
  )
}
