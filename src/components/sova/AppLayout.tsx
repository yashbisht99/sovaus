import { Outlet } from "react-router-dom";
import { Sidebar } from "./Shell";

export function AppLayout() {
  return (
    <div className="min-h-screen w-full flex bg-canvas">
      <Sidebar />
      <main className="flex-1 min-w-0 page-enter">
        <Outlet />
      </main>
    </div>
  );
}
