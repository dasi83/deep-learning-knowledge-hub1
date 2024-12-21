import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-600">
            © {currentYear} ML/DL Hub. Alle Rechte vorbehalten.
          </div>
          <div className="flex gap-4">
            <Link
              to="/impressum"
              className="text-sm text-gray-600 hover:text-primary transition-colors"
            >
              Impressum
            </Link>
            <Link
              to="/datenschutz"
              className="text-sm text-gray-600 hover:text-primary transition-colors"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};