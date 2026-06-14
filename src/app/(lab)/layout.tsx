import { CalScript } from "@/components/home/CalScript";

// Layout for the TEMPORARY /design-lab mockups. Intentionally renders NO
// shared Navbar/Footer — each design direction supplies its own themed
// navigation and footer so the mockups read as complete, cohesive sites.
export default function LabLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CalScript />
      {children}
    </>
  );
}
