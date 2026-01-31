import React, { useState } from 'react';
import {
  ArrowRight,
  Check,
  Copy,
  Download,
  FileText,
  Globe,
  Link2,
  ShieldAlert
} from 'lucide-react';

const NEW_URL = 'https://innovationweek.uoekld.ac.ke';

const quickFacts = [
  {
    label: 'Current landing',
    value: 'uoeld-aiw.onrender.com',
    description: 'Render hosted redirect that stays aligned with the git main branch.'
  },
  {
    label: 'New home',
    value: 'innovationweek.uoekld.ac.ke',
    description: 'Primary Innovation Week experience with agenda, partners, and media.'
  },
  {
    label: 'Latest push',
    value: 'January 31, 2026',
    description: 'Updated copy plus SEO, favicons, and brand assets for the new domain.'
  }
];

const highlights = [
  {
    title: 'Live schedules & deep stories',
    description:
      'The full program with sessions, mentors, and live streams now lives at the new site. Share the link with attendees so everyone lands in the right place.'
  },
  {
    title: 'Partner showcase & accreditations',
    description:
      'Calatech, KEBS, and our sponsors will continue to host resources across the new domain—this notice simply redirects traffic safely for the meantime.'
  },
  {
    title: 'Security, contacts, and support',
    description:
      'Security.txt, redirect rules, and robot instructions stay accessible from this landing page so infra teams and crawlers always find the official directives.'
  }
];

const brandAssets = [
  {
    label: 'Innovation Week mark',
    src: '/assets/branding/logos/logo_vr.png',
    description: 'Primary logo for the Innovation Week showcase.',
    width: 160
  },
  {
    label: 'Calatech badge',
    src: '/assets/branding/icons/calatech_badge.png',
    description: 'Calatech partnership badge included with the original design system.',
    width: 140
  },
  {
    label: 'KEBS certification stamp',
    src: '/assets/branding/icons/kebs-cert-stamp.png',
    description: 'Quality assurance stamp trusted by our partners.',
    width: 140
  }
];

const resourceLinks = [
  {
    label: 'robots.txt',
    description: 'Crawler rules for this landing page and the redirected domain.',
    href: '/robots.txt',
    icon: FileText
  },
  {
    label: 'sitemap.xml',
    description: 'A sitemap that lists every static entry point this repo serves.',
    href: '/sitemap.xml',
    icon: Globe
  },
  {
    label: '_redirects',
    description: 'Render redirect rules that keep this landing page aligned with future updates.',
    href: '/_redirects',
    icon: Link2
  },
  {
    label: '.well-known/security.txt',
    description: 'Security contacts and reporting instructions for the project.',
    href: '/.well-known/security.txt',
    icon: ShieldAlert
  },
  {
    label: 'Chrome/Android icons',
    description: 'Manifest and icon pack for Android, iOS, and desktop browsers.',
    href: '/assets/branding/favicon/site.webmanifest',
    icon: Download
  },
  {
    label: 'Browser-config XML',
    description: 'IE/Edge tile metadata and Microsoft browser helpers.',
    href: '/assets/branding/favicon/browserconfig.xml',
    icon: Download
  },
  {
    label: 'Roboto Variable',
    description: 'Primary variable font used by the page (wght + wdth axes).',
    href: '/assets/branding/font/Roboto-VariableFont_wdth,wght.ttf',
    icon: Download
  },
  {
    label: 'Roboto Italic Variable',
    description: 'Italic companion font for callouts and emphasis.',
    href: '/assets/branding/font/Roboto-Italic-VariableFont_wdth,wght.ttf',
    icon: Download
  }
];

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
    <main className="min-h-screen px-4 pb-14 pt-6 md:px-6 lg:px-0">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <section className="relative overflow-hidden rounded-3xl border border-[#d8d3c6] bg-white/95 px-6 py-8 shadow-[0_20px_60px_rgba(0,0,17,0.12)] backdrop-blur">
          <div className="absolute inset-y-0 right-0 z-0 hidden w-full max-w-lg opacity-20 sm:block">
            <img
              aria-hidden
              src="/assets/branding/logos/logo_vr.png"
              alt=""
              className="h-full w-full object-contain"
            />
          </div>
          <div className="relative z-10 space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#996633]">Innovation Week</p>
            <h1 className="text-3xl font-semibold text-[#000033] md:text-4xl">This platform has moved.</h1>
            <p className="text-lg text-slate-600 md:text-xl">
              The Innovation Week hub now publishes every story, schedule, and partner update at{' '}
              <a
                className="font-semibold text-[#330066] underline decoration-[#996633] decoration-2 underline-offset-2"
                href={NEW_URL}>
                innovationweek.uoekld.ac.ke
              </a>
              . Bookmark that URL for all future visits; this interim page keeps robots, redirects, security, and assets intact while you wait.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={NEW_URL}
                className="loop-button inline-flex items-center gap-2 rounded-full bg-[#000033] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-[#00003330] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#996633]">
                Go to the new site
                <ArrowRight className="h-4 w-4" />
              </a>
              <button
                onClick={handleCopyLink}
                className="inline-flex items-center gap-1 rounded-full border border-[#996633] bg-transparent px-4 py-2 text-sm font-semibold uppercase tracking-wide text-[#330033] transition hover:bg-[#9966330a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#996633]">
                {copied ? (
                  <>
                    <Check className="h-4 w-4" />
                    Link copied
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    Copy new link
                  </>
                )}
              </button>
            </div>
            <div className="grid gap-4 text-sm text-slate-500 sm:grid-cols-3">
              {quickFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-2xl border border-[#f0ece4] bg-[#fdfaf8] p-3 shadow-sm shadow-[#00000010]">
                  <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[#996633]">{fact.label}</p>
                  <p className="mt-2 text-lg font-semibold text-[#000033]">{fact.value}</p>
                  <p className="mt-1 text-xs text-slate-500">{fact.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-[#e8e3d8] bg-white/80 p-5 shadow-[0_10px_40px_rgba(0,0,0,0.08)] backdrop-blur">
              <h2 className="text-lg font-semibold text-[#000033]">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
            </article>
          ))}
        </section>

        <section className="rounded-3xl border border-[#cabdba] bg-white/90 p-6 shadow-[0_20px_40px_rgba(0,0,0,0.12)]">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#996633]">Assets</p>
              <h2 className="text-2xl font-semibold text-[#000033]">Brand elements stored in /public</h2>
              <p className="mt-1 text-sm text-slate-600">
                The logos, badges, and font files pictured below match what the new experience uses so upstream partners can grab them directly.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#996633]">
              <span>Logos</span>
              <span>Icons</span>
              <span>Fonts</span>
            </div>
          </div>
          <div className="brand-stack mt-6 rounded-2xl border border-dashed border-[#d4ccc0] bg-gradient-to-r from-[#f9f5ee] to-[#ffffff] px-5 py-6">
            {brandAssets.map((asset) => (
              <figure key={asset.label} className="flex flex-col items-center gap-2 text-center">
                <img src={asset.src} alt={asset.label} width={asset.width} className="max-h-28 object-contain" />
                <figcaption className="text-xs text-slate-500">{asset.description}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-[#d7d1c9] bg-white/95 p-6 shadow-[0_15px_50px_rgba(0,0,0,0.08)]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#996633]">Important files</p>
              <h2 className="text-2xl font-semibold text-[#000033]">Everything in the /public folder is linked below</h2>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase text-[#996633]">
              <Globe className="h-4 w-4" />
              <span>Hosted via Render</span>
            </div>
          </div>
          <div className="resource-grid mt-6">
            {resourceLinks.map((file) => {
              const Icon = file.icon;
              return (
                <a
                  key={file.label}
                  href={file.href}
                  className="group flex flex-col gap-2 rounded-2xl border border-[#ece8df] p-4 transition hover:border-[#996633] hover:bg-[#fefaf4]"
                  target="_blank"
                  rel="noreferrer">
                  <div className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-[#996633]" />
                    <p className="text-sm font-semibold text-[#000033]">{file.label}</p>
                  </div>
                  <p className="text-xs text-slate-500">{file.description}</p>
                  <span className="text-[0.6rem] uppercase tracking-[0.5em] text-[#b08a5e]">Open</span>
                </a>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
