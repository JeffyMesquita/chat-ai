"use client";

import { useChat } from "ai/react";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { ScrollArea } from "./ui/scroll-area";

export interface ChatProps {}

export function Chat(props: ChatProps) {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
  });

  return (
    <Card className="w-[440px]">
      <CardHeader>
        <CardTitle>Chat Ai</CardTitle>
        <CardDescription>
          Using Vercel SDK to create a chat bot.
        </CardDescription>
      </CardHeader>
      <CardContent className="">
        <ScrollArea className="h-[600px] w-full pr-4">
          {messages.map((message, index) => {
            return (
              <div
                key={`${index}-${message.id}`}
                className="flex gap-3 text-slate-600 text-sm mb-4"
              >
                {message.role === "user" && (
                  <Avatar>
                    <AvatarFallback>JM</AvatarFallback>
                    <AvatarImage src="https://github.com/jeffymesquita.png" />
                  </Avatar>
                )}

                {message.role === "assistant" && (
                  <Avatar>
                    <AvatarFallback>AI</AvatarFallback>
                    <AvatarImage src="https://github.com/rocketseat.png" />
                  </Avatar>
                )}

                <p className="leading-relaxed">
                  <span className="block font-bold text-slate-700">
                    {message.role === "user" ? "Humano" : "Chat Ai"}:
                  </span>
                  {message.content}
                </p>
              </div>
            );
          })}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form className="w-full flex gap-2" onSubmit={handleSubmit}>
          <Input
            placeholder="How can i help you?"
            value={input}
            onChange={handleInputChange}
          />
          <Button type="submit">Send</Button>
        </form>
      </CardFooter>
    </Card>
  );
}
