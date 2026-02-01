import React, { useState } from 'react';
import { ArrowRight, Check, Copy } from 'lucide-react';

const NEW_URL = 'https://innovationweek.uoeld.ac.ke/';

export function MovedPage() {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(NEW_URL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch (error) {
      console.error('Failed to copy link', error);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="max-w-2xl w-full">
        <section className="relative overflow-hidden rounded-3xl border border-[#d8d3c6] bg-white/95 px-8 py-12 shadow-[0_20px_60px_rgba(0,0,17,0.12)] backdrop-blur text-center">
          <div className="absolute inset-y-0 right-0 z-0 hidden w-full max-w-lg opacity-10 sm:block">
            <img
              aria-hidden
              src="/assets/branding/logos/logo_vr.png"
              alt=""
              className="h-full w-full object-contain"
            />
          </div>
          <div className="relative z-10 space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#996633]">7th Annual University of Eldoret</p>
            <h1 className="text-4xl font-semibold text-[#000033] md:text-5xl">Innovation Week is now live!</h1>
            <p className="text-xl text-slate-600 max-w-lg mx-auto">
              The official website is now available at{' '}
              <a
                className="font-semibold text-[#330066] underline decoration-[#996633] decoration-2 underline-offset-2"
                href={NEW_URL}>
                innovationweek.uoeld.ac.ke
              </a>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <a
                href={NEW_URL}
                className="loop-button inline-flex items-center gap-3 rounded-full bg-[#000033] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#00003330] hover:shadow-xl transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#996633]">
                Visit Innovation Week 2026
                <ArrowRight className="h-5 w-5" />
              </a>
              <button
                onClick={handleCopyLink}
                className="inline-flex items-center gap-2 rounded-full border border-[#996633] bg-transparent px-6 py-3 text-sm font-semibold text-[#330033] transition hover:bg-[#9966330a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#996633]">
                {copied ? (
                  <>
                    <Check className="h-4 w-4" />
                    Link copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    Copy link
                  </>
                )}
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}