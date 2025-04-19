import ChatLanding from "./_components/chat-landing";
import { ChatInputForm } from "./_components/ChatInputForm";

export default async function Page({
  params,
}: {
  params: Promise<{ chatTitle: string }>;
}) {
  const { chatTitle } = await params;
  return (
    <div className=" flex flex-col justify-between h-full p-5  max-w-4xl mx-auto">
      {chatTitle === "new" ? <ChatLanding /> : ""}
      <ChatInputForm />
    </div>
  );
}
