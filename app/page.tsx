import TicketGenerator from "./components/TicketGenerator";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen justify-center items-center gap-1">
      <TicketGenerator />
    </main>
  );
}
