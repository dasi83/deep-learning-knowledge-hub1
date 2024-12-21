import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

export const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowConsent(false);
    toast({
      title: "Cookies akzeptiert",
      description: "Ihre Einstellungen wurden gespeichert.",
    });
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShowConsent(false);
    toast({
      title: "Cookies abgelehnt",
      description: "Es werden nur notwendige Cookies verwendet.",
    });
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg animate-fade-in z-50">
      <div className="container mx-auto max-w-4xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-600">
          Diese Website verwendet Cookies, um Ihnen die bestmögliche Nutzererfahrung zu bieten.
          Weitere Informationen finden Sie in unserer{" "}
          <a href="/datenschutz" className="text-primary underline hover:text-primary/80">
            Datenschutzerklärung
          </a>
          .
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleDecline}>
            Ablehnen
          </Button>
          <Button onClick={handleAccept}>Akzeptieren</Button>
        </div>
      </div>
    </div>
  );
};