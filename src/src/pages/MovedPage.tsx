import React, { useEffect, useState } from 'react';
import { ExternalLink, ArrowRight, Copy, Check } from 'lucide-react';
export function MovedPage() {
  const NEW_URL = 'https://innovationweek.uoekld.ac.ke';
  const [timeLeft, setTimeLeft] = useState(5);
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.href = NEW_URL;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  const handleCopy = () => {
    navigator.clipboard.writeText(NEW_URL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <main className="min-h-screen w-full bg-white flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden relative">
        {/* Maroon Accent Line */}
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#660000]" />

        <div className="p-8 pl-10">
          {/* Icon Badge */}
          <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mb-6 text-[#660000]">
            <ExternalLink size={24} strokeWidth={2} />
          </div>

          <h1 className="text-2xl font-bold text-[#000033] mb-3">
            This page has been moved
          </h1>

          <p className="text-gray-600 mb-6 leading-relaxed">
            The Innovation Week platform is now available at{' '}
            <a
              href={NEW_URL}
              className="text-[#996633] font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-[#996633] rounded px-0.5">

              innovationweek.uoekld.ac.ke
            </a>
          </p>

          <div className="space-y-4">
            <a
              href={NEW_URL}
              className="flex items-center justify-center w-full bg-[#000033] hover:bg-[#000044] text-white font-medium py-3 px-4 rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#996633] focus:ring-offset-2 group">

              <span>Go to new site</span>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              onClick={handleCopy}
              className="flex items-center justify-center w-full text-[#996633] hover:text-[#7a5229] font-medium text-sm py-2 transition-colors focus:outline-none focus:underline">

              {copied ?
              <>
                  <Check className="w-4 h-4 mr-2" />
                  Link copied
                </> :

              <>
                  <Copy className="w-4 h-4 mr-2" />
                  Copy new link
                </>
              }
            </button>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100 text-center">
            <p className="text-sm text-gray-400 animate-pulse">
              Redirecting in {timeLeft} seconds...
            </p>
          </div>
        </div>
      </div>
    </main>);

}