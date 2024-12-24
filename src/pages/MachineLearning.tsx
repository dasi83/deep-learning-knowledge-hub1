import { ArrowLeft, Cpu, Database, ChartLine } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const MachineLearning = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link to="/">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" /> Zurück zur Hauptseite
          </Button>
        </Link>
        <h1 className="text-4xl font-bold text-primary mb-4">
          Machine Learning - Die Basis der künstlichen Intelligenz
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Entdecken Sie die Grundlagen des maschinellen Lernens
        </p>
      </div>

      <div className="grid gap-8">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <Cpu className="h-8 w-8 text-secondary" />
              <div>
                <CardTitle className="text-2xl">Lernmethoden im Machine Learning</CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <img
              src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
              alt="Machine Learning Methods"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Supervised Learning</h3>
                <p className="text-gray-600">
                  Training mit gekennzeichneten Daten, bei dem das System aus Beispielen lernt
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Unsupervised Learning</h3>
                <p className="text-gray-600">
                  Selbstständiges Erkennen von Mustern in unbekannten Daten
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Reinforcement Learning</h3>
                <p className="text-gray-600">
                  Lernen durch Interaktion mit der Umgebung und Feedback
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <Database className="h-8 w-8 text-secondary" />
              <div>
                <CardTitle className="text-2xl">Algorithmen und Anwendungen</CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
              alt="Machine Learning Applications"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-600">
              Machine Learning-Algorithmen finden in verschiedenen Bereichen Anwendung:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Empfehlungssysteme für Produkte und Inhalte</li>
              <li>Betrugserkennung im Finanzsektor</li>
              <li>Vorhersage von Kundenverhalten</li>
              <li>Bildklassifizierung und -erkennung</li>
              <li>Textanalyse und Sentiment Analysis</li>
            </ul>
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Populäre Algorithmen:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Klassifikation</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Decision Trees</li>
                    <li>Random Forests</li>
                    <li>Support Vector Machines</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Regression</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Linear Regression</li>
                    <li>Logistic Regression</li>
                    <li>Neural Networks</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MachineLearning;