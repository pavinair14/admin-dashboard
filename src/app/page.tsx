import Dashboard from "@/app/dashboard/page";

export default function Home() {
  return (
    <div className="font-sans min-h-screen p-4 pb-20 sm:p-6">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <Dashboard />
      </main>
    </div>
  );
}

