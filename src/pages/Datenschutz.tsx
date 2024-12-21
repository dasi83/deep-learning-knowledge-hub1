const Datenschutz = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto prose animate-fade-in">
          <h1 className="text-3xl font-bold text-primary mb-6">Datenschutzerklärung</h1>

          <h2 className="text-xl font-semibold text-primary mt-6 mb-3">
            1. Datenschutz auf einen Blick
          </h2>
          <h3 className="text-lg font-semibold text-primary mt-4 mb-2">
            Allgemeine Hinweise
          </h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit
            Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
          </p>

          <h3 className="text-lg font-semibold text-primary mt-4 mb-2">
            Datenerfassung auf dieser Website
          </h3>
          <h4 className="text-base font-semibold text-primary mt-3 mb-2">
            Wer ist verantwortlich für die Datenerfassung auf dieser Website?
          </h4>
          <p>
            Die Datenverarbeitung auf dieser Website erfolgt durch den
            Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser
            Website entnehmen.
          </p>

          <h4 className="text-base font-semibold text-primary mt-3 mb-2">
            Wie erfassen wir Ihre Daten?
          </h4>
          <p>
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
            mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein
            Kontaktformular eingeben.
          </p>

          <h4 className="text-base font-semibold text-primary mt-3 mb-2">
            Wofür nutzen wir Ihre Daten?
          </h4>
          <p>
            Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der
            Website zu gewährleisten. Andere Daten können zur Analyse Ihres
            Nutzerverhaltens verwendet werden.
          </p>

          <h4 className="text-base font-semibold text-primary mt-3 mb-2">
            Welche Rechte haben Sie bezüglich Ihrer Daten?
          </h4>
          <p>
            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft,
            Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu
            erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung
            dieser Daten zu verlangen.
          </p>

          <h2 className="text-xl font-semibold text-primary mt-6 mb-3">
            2. Cookies und Webanalyse
          </h2>
          <h3 className="text-lg font-semibold text-primary mt-4 mb-2">Cookies</h3>
          <p>
            Diese Website verwendet Cookies. Cookies sind Textdateien, die auf Ihrem
            Rechner abgelegt werden und die Ihr Browser speichert. Die meisten der
            von uns verwendeten Cookies sind so genannte "Session-Cookies". Sie
            werden nach Ende Ihres Besuchs automatisch gelöscht.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Datenschutz;