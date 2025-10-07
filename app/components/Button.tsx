interface ButtonProps {
  children: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({ children, href, onClick, className }: ButtonProps) {
  const base = 'px-6 py-2 rounded-lg font-semibold text-white transition-transform transform hover:scale-105';
  const style = `${base} bg-primary ${className || ''}`;

  if (href) {
    return (
      <a href={href} target="_blank" className={style}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={style}>
      {children}
    </button>
  );
}
