import Link from "next/link"

export default function NavItem({ label, path }) {
    const fmtPath = path.substring(1) === '' ? 'home' : path.substring(1)
    return (
        <Link data-test={`nav-link-${fmtPath}`} href={path}>
            {label}
        </Link>
    )
}