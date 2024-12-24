import { ArrowLeft, Network, Brain, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const NeuralNetworks = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link to="/">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" /> Zurück zur Hauptseite
          </Button>
        </Link>
        <h1 className="text-4xl font-bold text-primary mb-4">
          Neuronale Netze - Die Grundlage des Deep Learning
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Verstehen Sie die Funktionsweise künstlicher neuronaler Netze
        </p>
      </div>

      <div className="grid gap-8">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <Network className="h-8 w-8 text-secondary" />
              <div>
                <CardTitle className="text-2xl">Grundlagen neuronaler Netze</CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="Neural Network Structure"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-600">
              Künstliche neuronale Netze sind vom menschlichen Gehirn inspirierte Computermodelle. Sie bestehen aus miteinander verbundenen Neuronen, die in Schichten angeordnet sind und Informationen verarbeiten.
            </p>
            <h3 className="text-lg font-semibold mt-4">Aufbau eines neuronalen Netzes:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Eingabeschicht (Input Layer)</li>
              <li>Versteckte Schichten (Hidden Layers)</li>
              <li>Ausgabeschicht (Output Layer)</li>
              <li>Gewichtete Verbindungen zwischen Neuronen</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <Brain className="h-8 w-8 text-secondary" />
              <div>
                <CardTitle className="text-2xl">Lernprozess und Training</CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
              alt="Neural Network Training"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Feedforward-Propagierung</h3>
                <p className="text-gray-600">
                  Informationsfluss von der Eingabe- zur Ausgabeschicht
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Backpropagation</h3>
                <p className="text-gray-600">
                  Anpassung der Gewichte basierend auf Fehlerberechnung
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Aktivierungsfunktionen</h3>
                <p className="text-gray-600">
                  Mathematische Funktionen zur Signalverarbeitung
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Optimierungsalgorithmen</h3>
                <p className="text-gray-600">
                  Methoden zur Verbesserung der Netzwerkleistung
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NeuralNetworks;