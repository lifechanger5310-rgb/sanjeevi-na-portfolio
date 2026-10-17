export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line bg-bg px-3 py-1 text-sm text-muted transition-colors duration-200 hover:border-accent/50 hover:text-text active:border-accent/50 active:text-text">
      {children}
    </span>
  );
}
