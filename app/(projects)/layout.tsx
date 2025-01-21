import { SideNavbar } from "@/components/sideNavbar";

export default function projectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <div className="relative flex flex-col h-screen">
          {/* <SideNavbar /> */}

          <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
            {children}
          </main>

        </div>

      </div>
    </section>
  );
}
