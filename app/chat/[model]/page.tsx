import Sidebar from "@/components/chat/Sidebar";
import Chat from "@/components/chat/Chat";
import Background from "@/components/chat/Background";

export default function Dashboard() {
  return (
    <main className="flex flex-col h-screen">
      <div className="flex flex-row h-full w-full py-2">
        <Sidebar />
        <Chat />
        <Background />
      </div>
    </main>
  );
}