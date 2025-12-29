import TicketGenerator from "./components/TicketGenerator";
import Title from "./components/Title";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen justify-center items-center gap-1">
      <div>
        <Title />
        <TicketGenerator />
      </div>
    </main>
  );
}
