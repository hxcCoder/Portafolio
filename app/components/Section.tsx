import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  title?: string;
}

export default function Section({ children, title }: SectionProps) {
  return (
    <section className="max-w-7xl mx-auto">
      {title && <h2 className="text-4xl font-bold mb-8 text-center">{title}</h2>}
      {children}
    </section>
  );
}
    