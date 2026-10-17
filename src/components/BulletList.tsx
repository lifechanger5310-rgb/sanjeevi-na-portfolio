export default function BulletList({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ul className={`space-y-2 ${className}`}>
      {items.map((p) => (
        <li key={p} className="flex gap-3 text-muted">
          <span className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
          <span>{p}</span>
        </li>
      ))}
    </ul>
  );
}
