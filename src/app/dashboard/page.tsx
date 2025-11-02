import { auth } from "../../auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <h1 className="text-2xl font-bold">
        Bienvenido, {session.user?.name || "usuario"} 👋
      </h1>
    </div>
  );
}
