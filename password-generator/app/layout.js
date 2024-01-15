import './globals.css'


export const metadata = {
  title: 'Password Generator',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-black'>{children}</body>
    </html>
  )
}
