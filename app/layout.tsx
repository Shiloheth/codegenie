import './globals.css'


export const metadata = {
  title: 'CodeGenie',
  description: 'Javascript Playground',
}

export default function RootLayout({children,}: {children: React.ReactNode }) {
  return (
    <html lang="en" >
      <body>
      {children}
      <script
          dangerouslySetInnerHTML={{
            __html: `if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
              document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.add('light')
          }`
          
            }}
          ></script>
      
      </body>
    </html>
  )
}

const customScript = `
console.log("Our custom script runs!");
`