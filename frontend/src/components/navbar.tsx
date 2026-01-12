import { MobileSidebar } from "./mobile-sidebar";

export const Navbar = () => {
  return (
    <nav className="pt-4 px-6 flex items-center justify-between">
      <div className="flex-col hidden lg:flex">
        <h1 className="text-2xl font-semibold">
          Sport App GitHub Copilot Workshop
        </h1>
        <p className="text-muted-foreground">
          Elevate Your Game with Contoso Sport: Where Sports Passion Meets
          Performance!
        </p>
      </div>
      <MobileSidebar />
    </nav>
  );
};
