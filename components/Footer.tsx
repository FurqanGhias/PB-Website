import Link from 'next/link';
import Image from 'next/image';

const companyLinks = [
  { label: 'About', href: '/about' },
  { label: 'System', href: '/system' },
  { label: 'Services', href: '/services' },
  { label: 'Samples', href: '/samples' },
  // No dedicated pricing page yet; keep link non-broken and scoped to services.
  { label: 'Pricing', href: '/services' },
];

const resourceLinks = [
  { label: 'Free Playbook', href: '/resources' },
  { label: 'LinkedIn Checklist', href: '/resources' },
  { label: 'Content Pillar Template', href: '/resources' },
  { label: 'Blog', href: '/resources' },
];

const contactLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/pitchbhaiofficial' },
  { label: 'Instagram', href: '/contact' },
  { label: 'X/Twitter', href: '/contact' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '/resources' },
  { label: 'Terms & Conditions', href: '/resources' },
];

export function Footer() {
  return (
    <footer id="footer" className="relative overflow-hidden bg-[#050506] px-5 pb-10 pt-4 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:110px_110px] [mask-image:linear-gradient(to_bottom,transparent,black_16%,black_92%,transparent)]" />

      <div className="relative mx-auto max-w-[1320px] border-t border-white/8 pt-10">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr_0.7fr]">
          <div className="max-w-[320px]">
            <Image
              src="/PitchBhaiTextualLogo.png"
              alt="Pitch Bhai"
              width={162}
              height={40}
              className="h-10 w-auto"
            />
            <p className="mt-3 text-[13px] font-semibold uppercase tracking-[0.16em] text-[#A66BFF]">
              Founder Branding Growth Partner
            </p>
            <p className="mt-4 text-[15px] leading-[1.7] text-[#A4A4AA]">
              We help founders become known, trusted, and chosen on LinkedIn.
            </p>
          </div>

          <div>
            <h4 className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#6F6F78]">Company</h4>
            <ul className="mt-4 space-y-3 text-[15px] text-[#A4A4AA]">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="transition hover:text-[#F4F0E8]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#6F6F78]">Resources</h4>
            <ul className="mt-4 space-y-3 text-[15px] text-[#A4A4AA]">
              {resourceLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="transition hover:text-[#F4F0E8]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#6F6F78]">Contact</h4>
            <ul className="mt-4 space-y-3 text-[15px] text-[#A4A4AA]">
              <li>
                <a href="mailto:hello@pitchbhai.com" className="transition hover:text-[#F4F0E8]">
                  hello@pitchbhai.com
                </a>
              </li>
              {contactLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="transition hover:text-[#F4F0E8]"
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#6F6F78]">Legal</h4>
            <ul className="mt-4 space-y-3 text-[15px] text-[#A4A4AA]">
              {legalLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="transition hover:text-[#F4F0E8]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/8 pt-6 text-[13px] text-[#6F6F78]">
          &copy; 2026 Pitch Bhai. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
