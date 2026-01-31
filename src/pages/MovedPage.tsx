import React, { useState } from 'react';
import { ArrowRight, Copy, Check } from 'lucide-react';
const NEW_URL = 'https://innovationweek.uoekld.ac.ke';
export function MovedPage() {
  const [copied, setCopied] = useState(false);
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(NEW_URL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div
        className="w-full max-w-md bg-white rounded-lg shadow-xl p-8 border-l-4"
        style={{
          borderLeftColor: '#660000'
        }}>

        {/* Icon */}
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center mb-6"
          style={{
            backgroundColor: '#000033'
          }}>

          <ArrowRight className="w-6 h-6 text-white" />
        </div>

        {/* Headline */}
        <h1
          className="text-2xl font-bold mb-4"
          style={{
            color: '#000033'
          }}>

          This page has been moved
        </h1>

        {/* Body text */}
        <p className="text-gray-600 mb-6">
          The Innovation Week platform is now available at{' '}
          <a
            href={NEW_URL}
            className="font-medium underline underline-offset-2 transition-opacity hover:opacity-80"
            style={{
              color: '#996633'
            }}>

            innovationweek.uoekld.ac.ke
          </a>
        </p>

        {/* Primary button */}
        <a
          href={NEW_URL}
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-white font-medium transition-all duration-200 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 mb-4"
          style={{
            backgroundColor: '#000033'
          }}
          onFocus={(e) =>
          e.currentTarget.style.boxShadow =
          '0 0 0 2px white, 0 0 0 4px #996633'
          }
          onBlur={(e) => e.currentTarget.style.boxShadow = 'none'}>

          Go to new site
          <ArrowRight className="w-4 h-4" />
        </a>

        {/* Copy link button */}
        <button
          onClick={handleCopyLink}
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium transition-opacity hover:opacity-80 focus:outline-none focus:underline"
          style={{
            color: '#996633'
          }}>

          {copied ?
          <>
              <Check className="w-4 h-4" />
              Link copied!
            </> :

          <>
              <Copy className="w-4 h-4" />
              Copy new link
            </>
          }
        </button>
      </div>
    </div>);

}