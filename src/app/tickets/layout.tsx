import Nav from "./Nav";
import TenantName from "./TenantName";

export default function TicketsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="md:max-w-[80vw] mx-auto">
      <div className="container">
        <TenantName tenantName="Ticketerra" />
        <Nav />

        <div>{children}</div>
      </div>
    </section>
  );
}
