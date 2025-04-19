import { Assistant } from "@/components/icons/Assistant";
import { Email } from "@/components/icons/Email";
import { Pen } from "@/components/icons/Pen";
import { Planning } from "@/components/icons/Planning";
import * as React from "react";

interface CardItem {
  icon: React.ElementType;
  iconBgClass: string;
  iconTextClass: string;
  title: string;
  description: string;
}

const cardItems: CardItem[] = [
  {
    icon: Email,
    iconBgClass: "bg-indigo-100",
    iconTextClass: "text-indigo-700",
    title: "Draft email",
    description: "Generate email for any occasion you need.",
  },
  {
    icon: Pen,
    iconBgClass: "bg-green-100",
    iconTextClass: "text-green-700",
    title: "Write an Essay",
    description: "Generate essay for any occasion you need.",
  },
  {
    icon: Planning,
    iconBgClass: "bg-purple-100",
    iconTextClass: "text-purple-700",
    title: "Planning",
    description: "Plan for any occasion, from holiday to family.",
  },
  {
    icon: Assistant,
    iconBgClass: "bg-orange-100",
    iconTextClass: "text-orange-700",
    title: "Assistant",
    description: "Become your personal assistant. Helping you.",
  },
];

export default async function ChatLanding() {
  return (
    <div className=" h-full px-4 mt-8 md:mt-24">
      <h1 className="text-3xl md:text-4xl font-semibold  text-neutral-600 mb-24">
        <span className="text-neutral-900">Hey, I'm Chat AI.</span> Your AI
        assistant and companion for any occasion.
      </h1>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-4xl">
        {cardItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div
              key={index}
              className="bg-white p-4 rounded-lg border border-gray-200 flex flex-col items-start text-left"
            >
              <div className={`${item.iconBgClass} p-2 rounded-md mb-3`}>
                <IconComponent className={`w-5 h-5 ${item.iconTextClass}`} />
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
