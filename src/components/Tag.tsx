export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line bg-bg px-3 py-1 text-sm text-muted">
      {children}
    </span>
  );
}
