import { ArrowLeft, Brain, Network, Cpu } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Learning = () => {
  const sections = [
    {
      title: "Künstliche Intelligenz - Eine Einführung",
      description:
        "Künstliche Intelligenz (KI) ist ein Teilgebiet der Informatik, das sich mit der Automatisierung intelligenten Verhaltens befasst. KI-Systeme sind in der Lage, komplexe Probleme zu lösen, aus Erfahrungen zu lernen und sich an neue Situationen anzupassen.",
      icon: Brain,
      content: [
        "KI ist der Überbegriff für Systeme, die menschenähnliche Intelligenzleistungen erbringen können",
        "Moderne KI-Systeme basieren auf Machine Learning und Deep Learning",
        "Anwendungsgebiete reichen von Spracherkennung bis zur autonomen Fahrzeugsteuerung",
      ],
    },
    {
      title: "Machine Learning Grundlagen",
      description:
        "Machine Learning ist die Fähigkeit eines Systems, aus Erfahrungen zu lernen und sich zu verbessern, ohne explizit programmiert zu werden.",
      icon: Cpu,
      content: [
        "Supervised Learning: Training mit gekennzeichneten Daten",
        "Unsupervised Learning: Erkennen von Mustern in unbekannten Daten",
        "Reinforcement Learning: Lernen durch Belohnung und Bestrafung",
      ],
    },
    {
      title: "Deep Learning verstehen",
      description:
        "Deep Learning ist ein Teilbereich des Machine Learning, der auf künstlichen neuronalen Netzen basiert und besonders gut für komplexe Muster geeignet ist.",
      icon: Network,
      content: [
        "Neuronale Netze sind vom menschlichen Gehirn inspiriert",
        "Deep Learning ermöglicht das Erkennen komplexer Muster in Daten",
        "Anwendungen: Bilderkennung, Sprachverarbeitung, Übersetzung",
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link to="/">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" /> Zurück zur Hauptseite
          </Button>
        </Link>
        <h1 className="text-4xl font-bold text-primary mb-4">
          Lerne KI, Machine Learning und Deep Learning
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Ein Einstieg in die Welt der künstlichen Intelligenz
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1">
        {sections.map((section, index) => (
          <Card key={index} className="animate-fade-in">
            <CardHeader>
              <div className="flex items-center gap-4">
                <section.icon className="h-8 w-8 text-secondary" />
                <div>
                  <CardTitle className="text-2xl">{section.title}</CardTitle>
                  <CardDescription className="mt-2">
                    {section.description}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {section.content.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Learning;