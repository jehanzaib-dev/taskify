import "./globals.css";


export const metadata = {
  title: "Taskify",
  description: "Your Task Manager",
  icons:{
  icon:"/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
       <div className="flex flex-col min-h-screen">
        {children}
        </div>
      </body>
    </html>
  );
}
