const whatsappUrl = 'https://wa.me/918160934696';

export function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with JAY AMBE INDUSTRIES on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 md:hidden"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-8 w-8 fill-current"
      >
        <path d="M20.52 3.48A11.82 11.82 0 0 0 12.08 0C5.55 0 .24 5.31.24 11.84c0 2.09.55 4.13 1.59 5.93L.14 24l6.38-1.67a11.84 11.84 0 0 0 5.56 1.41h.01c6.52 0 11.83-5.31 11.83-11.84 0-3.16-1.23-6.13-3.4-8.42Zm-8.44 18.2h-.01a9.83 9.83 0 0 1-5.01-1.37l-.36-.21-3.79.99 1.01-3.69-.23-.38a9.84 9.84 0 0 1-1.5-5.18C2.19 6.41 6.62 1.98 12.08 1.98a9.8 9.8 0 0 1 6.98 2.9 9.82 9.82 0 0 1 2.89 6.99c0 5.46-4.43 9.89-9.87 9.89Zm5.42-7.4c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.69.15-.2.3-.79.97-.97 1.17-.18.2-.36.23-.66.08-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.51-1.79-1.69-2.09-.18-.3-.02-.46.13-.61.13-.13.3-.36.45-.54.15-.18.2-.3.3-.51.1-.2.05-.38-.03-.54-.08-.15-.69-1.66-.94-2.27-.25-.6-.5-.52-.69-.53h-.58c-.2 0-.53.08-.81.38-.28.3-1.06 1.04-1.06 2.54s1.09 2.95 1.24 3.15c.15.2 2.15 3.28 5.21 4.6.73.32 1.29.51 1.73.65.73.23 1.39.2 1.91.12.58-.09 1.77-.72 2.02-1.42.25-.69.25-1.28.18-1.4-.08-.13-.28-.2-.58-.35Z" />
      </svg>
    </a>
  );
}
