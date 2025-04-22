('');
import Chat from './_components/chat';
import ChatLanding from './_components/chat-landing';
import { ChatInputForm } from './_components/ChatInputForm';

export default async function Page({ params }: { params: Promise<{ chatTitle: string }> }) {
  const { chatTitle } = await params;

  return (
    <div className="mx-auto flex h-full max-w-4xl flex-col justify-between p-5">
      {/* {chatTitle === 'new' ? <ChatLanding /> : ''} */}
      <Chat />
      <ChatInputForm />
    </div>
  );
}
