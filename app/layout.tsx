import type { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: {
    default: 'Feat beaver grill | Asian restaurant',
    template: '%s | Asian restaurant',
  },
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <div className="mx-auto">
            <header className="max-w-7xl bg-blue-300">Feat beaver grill</header>
            {children}
            <footer className="max-w-7xl bg-black-300">
              <h6>Keep in touch</h6>
            </footer>
          </div>
        </div>
        
        </body>
    </html>
  )
}
