import Card from "@/components/chat/Card";
import Navbar from "@/components/Navbar";

export default function Dashboard() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <div className="flex flex-col h-full items-center justify-center w-full">
        <div className="flex flex-col w-[75%] gap-6 z-10 md:mt-12">
            <h1 className="font-semibold text-2xl">Chat AI</h1>
            <div className="flex flex-row flex-wrap gap-4">
                <Card name="Dall-e 2" image="/dalle.png" producer="OpenAI" description="Lorem Ipsum Doloret Amet" alt="Dalle Logo"/>
                <Card name="Dall-e 2" image="/dalle.png" producer="OpenAI" description="Lorem Ipsum Doloret Amet" alt="Dalle Logo"/>
                <Card name="Dall-e 2" image="/dalle.png" producer="OpenAI" description="Lorem Ipsum Doloret Amet" alt="Dalle Logo"/>
                <Card name="Dall-e 2" image="/dalle.png" producer="OpenAI" description="Lorem Ipsum Doloret Amet" alt="Dalle Logo"/>
                <Card name="Dall-e 2" image="/dalle.png" producer="OpenAI" description="Lorem Ipsum Doloret Amet" alt="Dalle Logo"/>
            </div>
            <h1 className="font-semibold text-2xl">Image AI</h1>
            <div className="flex flex-row flex-wrap gap-4">
                <Card name="Dall-e 2" image="/dalle.png" producer="OpenAI" description="Lorem Ipsum Doloret Amet" alt="Dalle Logo"/>
                <Card name="Dall-e 2" image="/dalle.png" producer="OpenAI" description="Lorem Ipsum Doloret Amet" alt="Dalle Logo"/>
                <Card name="Dall-e 2" image="/dalle.png" producer="OpenAI" description="Lorem Ipsum Doloret Amet" alt="Dalle Logo"/>
                <Card name="Dall-e 2" image="/dalle.png" producer="OpenAI" description="Lorem Ipsum Doloret Amet" alt="Dalle Logo"/>
                <Card name="Dall-e 2" image="/dalle.png" producer="OpenAI" description="Lorem Ipsum Doloret Amet" alt="Dalle Logo"/>
            </div>
        </div>
        <div className="hidden md:block absolute bottom-64 left-24 w-96 h-96 rounded-full blur-[100px] bg-gradient-to-r from-violet-600 to-indigo-600"></div>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[100px] bg-indigo-500"></div>
        <div className="absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] w-96 h-96 rounded-full blur-[300px] bg-indigo-500 z-0"></div>
      </div>
    </main>
  );
}