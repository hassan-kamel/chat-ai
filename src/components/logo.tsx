import Image from "next/image";

export async function Logo() {
  return (
    <div className="flex items-center gap-0.5">
      <div className=" rounded-full ">
        <Image src="/favicon.png" alt="Logo" width={32} height={32} />
      </div>
      <h1 className="text-md font-bold font-inter">Chat AI</h1>
    </div>
  );
}
