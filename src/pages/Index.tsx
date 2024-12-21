import { Card } from "@/components/ui/card";
import { Brain, Network, Cpu } from "lucide-react";

const Index = () => {
  const topics = [
    {
      title: "Deep Learning",
      description:
        "Deep Learning ist ein Teilbereich des maschinellen Lernens, der auf künstlichen neuronalen Netzen basiert.",
      icon: Brain,
    },
    {
      title: "Neuronale Netze",
      description:
        "Künstliche neuronale Netze sind vom menschlichen Gehirn inspirierte Computermodelle.",
      icon: Network,
    },
    {
      title: "Machine Learning",
      description:
        "Machine Learning ermöglicht Computern, aus Erfahrungen zu lernen und sich zu verbessern.",
      icon: Cpu,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="max-w-4xl mx-auto text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Willkommen im ML/DL Hub
          </h1>
          <p className="text-xl text-gray-600">
            Entdecken Sie die faszinierende Welt des Machine Learning und Deep Learning
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {topics.map((topic) => (
            <Card
              key={topic.title}
              className="p-6 hover:shadow-lg transition-shadow animate-fade-in"
            >
              <topic.icon className="w-12 h-12 text-secondary mb-4" />
              <h2 className="text-xl font-semibold text-primary mb-2">
                {topic.title}
              </h2>
              <p className="text-gray-600">{topic.description}</p>
            </Card>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Index;