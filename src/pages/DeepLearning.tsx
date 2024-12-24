import { ArrowLeft, Brain, Network, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const DeepLearning = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link to="/">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" /> Zurück zur Hauptseite
          </Button>
        </Link>
        <h1 className="text-4xl font-bold text-primary mb-4">
          Deep Learning - Die Zukunft der KI
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Entdecken Sie die faszinierende Welt des Deep Learnings
        </p>
      </div>

      <div className="grid gap-8">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <Brain className="h-8 w-8 text-secondary" />
              <div>
                <CardTitle className="text-2xl">Was ist Deep Learning?</CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475"
              alt="Deep Learning Illustration"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-600">
              Deep Learning ist ein Teilbereich des maschinellen Lernens, der auf künstlichen neuronalen Netzen mit mehreren Schichten basiert. Diese Technologie ermöglicht es Computern, aus Erfahrungen zu lernen und komplexe Muster in Daten zu erkennen.
            </p>
            <h3 className="text-lg font-semibold mt-4">Kernkonzepte:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Mehrschichtige neuronale Netze (Deep Neural Networks)</li>
              <li>Automatische Merkmalsextraktion</li>
              <li>Hierarchische Repräsentation von Daten</li>
              <li>End-to-End Learning</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <Layers className="h-8 w-8 text-secondary" />
              <div>
                <CardTitle className="text-2xl">Anwendungsbereiche</CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <img
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
              alt="Deep Learning Applications"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Bildverarbeitung</h3>
                <p className="text-gray-600">
                  Erkennung und Klassifizierung von Objekten, Gesichtern und Szenen in Bildern
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Sprachverarbeitung</h3>
                <p className="text-gray-600">
                  Spracherkennung, Übersetzung und natürliche Sprachverarbeitung
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Medizinische Diagnostik</h3>
                <p className="text-gray-600">
                  Analyse von medizinischen Bildern und Krankheitsdiagnose
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Autonomes Fahren</h3>
                <p className="text-gray-600">
                  Umgebungserkennung und Entscheidungsfindung für selbstfahrende Autos
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DeepLearning;