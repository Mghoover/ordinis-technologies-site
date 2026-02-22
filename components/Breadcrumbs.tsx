import Link from 'next/link';

export function Breadcrumbs({
  items,
}: {
  items: Array<{ href?: string; label: string }>;
}) {
  return (
    <div className="breadcrumbs" aria-label="Breadcrumb">
      {items.map((it, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <span key={`${it.label}-${idx}`}>
            {it.href && !isLast ? <Link href={it.href}>{it.label}</Link> : it.label}
            {!isLast ? <span aria-hidden> / </span> : null}
          </span>
        );
      })}
    </div>
  );
}
