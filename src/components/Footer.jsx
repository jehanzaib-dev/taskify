"use client";

export default function Footer() {
  return (
    <footer className="mt-12 py-6 border-t text-center text-sm text-gray-500 dark:text-gray-400
      ">
      <p>
        Made with ❤️ by <strong className="text-blue-600 dark:text-blue-400">Jehanzaib</strong>
      </p>
      <div className="mt-2 flex justify-center gap-4">
        <a
          href="mailto:jehanzaib.dev@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Gmail
        </a>
        <a
          href="https://linkedin.com/in/jehanzaib-arshad-a722b6369/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
