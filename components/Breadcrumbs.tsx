"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const pathname = usePathname();

  // Don't show breadcrumbs on homepage
  if (pathname === "/") return null;

  const pathSegments = pathname.split("/").filter((segment) => segment);

  const breadcrumbItems = [
    { name: "Home", path: "/" },
    ...pathSegments.map((segment, index) => {
      const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
      const name = segment
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      return { name, path };
    }),
  ];

  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol className="breadcrumbs-list">
        {breadcrumbItems.map((item, index) => (
          <li key={item.path} className="breadcrumb-item">
            {index < breadcrumbItems.length - 1 ? (
              <>
                <Link href={item.path} className="breadcrumb-link">
                  {item.name}
                </Link>
                <span className="breadcrumb-separator">/</span>
              </>
            ) : (
              <span className="breadcrumb-current">{item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
