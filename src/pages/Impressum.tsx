const Impressum = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto prose animate-fade-in">
          <h1 className="text-3xl font-bold text-primary mb-6">Impressum</h1>
          
          <h2 className="text-xl font-semibold text-primary mt-6 mb-3">
            Angaben gemäß § 5 TMG
          </h2>
          <p>
            Max Mustermann
            <br />
            Musterstraße 123
            <br />
            12345 Musterstadt
          </p>

          <h2 className="text-xl font-semibold text-primary mt-6 mb-3">Kontakt</h2>
          <p>
            Telefon: +49 (0) 123 44 55 66
            <br />
            E-Mail: mail@mustermann.de
          </p>

          <h2 className="text-xl font-semibold text-primary mt-6 mb-3">
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
          </h2>
          <p>
            Max Mustermann
            <br />
            Musterstraße 123
            <br />
            12345 Musterstadt
          </p>

          <h2 className="text-xl font-semibold text-primary mt-6 mb-3">
            Streitschlichtung
          </h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
            .<br />
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Impressum;