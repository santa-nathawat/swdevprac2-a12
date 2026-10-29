import Link from "next/link";

type TopMenuItemProps = {
  href: string;
  label: string;
};

export default function TopMenuItem({ href, label }: TopMenuItemProps) {
  return (
    <Link
      className="rounded-md px-3 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-950"
      href={href}
    >
      {label}
    </Link>
  );
}
