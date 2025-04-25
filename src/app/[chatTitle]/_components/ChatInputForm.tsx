'use client';

import { payloadSchema } from '@/app/api/chat/route';
import { SendIcon } from '@/components/icons/SendIcon';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useChatActions } from '@/store/chat';

type FormSchema = z.infer<typeof payloadSchema>;

export function ChatInputForm() {
  const { setPrompt } = useChatActions();
  const form = useForm<FormSchema>({
    resolver: zodResolver(payloadSchema),
    defaultValues: {
      prompt: '',
    },
    reValidateMode: 'onChange',
    mode: 'all',
  });

  const onSubmit = (values: FormSchema) => {};

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mx-auto flex w-full items-end gap-3">
        <div className="flex-9">
          {form.formState.errors.prompt && (
            <p className="w-full p-2 text-red-500">{form.formState.errors.prompt.message}</p>
          )}
          <FormField
            control={form.control}
            name="prompt"
            render={({ field }) => (
              <FormItem className="rounded-lg border border-gray-200 bg-white p-2 shadow-sm">
                <FormControl className="w-full">
                  <textarea
                    rows={0}
                    className="w-full resize-none overflow-hidden border-0 bg-transparent px-3 text-sm text-gray-700 placeholder-gray-400 shadow-transparent outline-0 transition-all focus:border-gray-300 focus:ring-0 focus:outline-none"
                    placeholder="Ask me anything..."
                    {...field}
                    onInput={e => {
                      e.currentTarget.style.height = 'auto';
                      e.currentTarget.style.height = `${e.currentTarget.scrollHeight - 50}px`;
                      // document.scrollingElement?.scrollTo({
                      //   top: document.scrollingElement.scrollHeight,
                      //   behavior: 'smooth',
                      // });

                      setPrompt(e.currentTarget.value);
                    }}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <Button
          type="submit"
          className={`mb-1 flex items-center justify-between gap-2 rounded-md px-2.5 py-2 transition-colors focus:outline-none ${
            form.formState.isSubmitting || form.formState.isValidating || !form.formState.isValid
              ? 'cursor-not-allowed bg-gray-100 text-gray-500 focus:ring-0'
              : 'bg-primary hover:bg-primary cursor-pointer text-white focus:ring-2 focus:ring-blue-300'
          }`}
          aria-label="Send message"
          disabled={
            form.formState.isSubmitting || form.formState.isValidating || !form.formState.isValid
          }
        >
          <SendIcon className="h-4 w-4" />
          <span className="hidden md:block">Submit</span>
        </Button>
      </form>
    </Form>
  );
}
