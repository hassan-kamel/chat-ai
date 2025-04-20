import { Assistant } from '@/components/icons/Assistant';
import { Email } from '@/components/icons/Email';
import { Pen } from '@/components/icons/Pen';
import { Planning } from '@/components/icons/Planning';
import * as React from 'react';

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
    iconBgClass: 'bg-indigo-100',
    iconTextClass: 'text-indigo-700',
    title: 'Draft email',
    description: 'Generate email for any occasion you need.',
  },
  {
    icon: Pen,
    iconBgClass: 'bg-green-100',
    iconTextClass: 'text-green-700',
    title: 'Write an Essay',
    description: 'Generate essay for any occasion you need.',
  },
  {
    icon: Planning,
    iconBgClass: 'bg-purple-100',
    iconTextClass: 'text-purple-700',
    title: 'Planning',
    description: 'Plan for any occasion, from holiday to family.',
  },
  {
    icon: Assistant,
    iconBgClass: 'bg-orange-100',
    iconTextClass: 'text-orange-700',
    title: 'Assistant',
    description: 'Become your personal assistant. Helping you.',
  },
];

export default async function ChatLanding() {
  return (
    <div className="mt-8 h-full px-4 md:mt-24">
      <h1 className="mb-24 text-3xl font-semibold text-neutral-600 md:text-4xl">
        <span className="text-neutral-900">Hey, I'm Chat AI.</span> Your AI assistant and companion
        for any occasion.
      </h1>

      <div className="grid w-full max-w-4xl grid-cols-2 gap-4 lg:grid-cols-4">
        {cardItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div
              key={index}
              className="flex flex-col items-start rounded-lg border border-gray-200 bg-white p-4 text-left"
            >
              <div className={`${item.iconBgClass} mb-3 rounded-md p-2`}>
                <IconComponent className={`h-5 w-5 ${item.iconTextClass}`} />
              </div>
              <h3 className="mb-1 font-semibold text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
