"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import type { ChatMessage } from "@/types/chat";

const QUICK_QUESTIONS = [
  "Services",
  "Performance Marketing",
  "Social Media Growth",
  "Get a Quote",
];

function renderMessageContent(content: string) {
  return content.split(/(\*\*[^*]+\*\*)/g).map((part, index) => {
    const boldText = part.match(/^\*\*(.+)\*\*$/);

    return boldText ? (
      <strong key={`${part}-${index}`}>{boldText[1]}</strong>
    ) : (
      part
    );
  });
}

const WELCOME_MESSAGE: ChatMessage = {
  id: "welcome",
  role: "assistant",
  content:
    "👋 Hi! I'm the Divith Digital Marketing assistant.\n\nI can help you with:\n✔ Social Media Growth\n✔ Performance Marketing (Meta & Google Ads)\n✔ Branding & Content Creation\n✔ Getting a custom quote\n\nWhat would you like to know?",
};

function createId() {
  return Math.random().toString(36).slice(2, 10);
}

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isOpen, isLoading]);

  async function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;

    const userMessage: ChatMessage = {
      id: createId(),
      role: "user",
      content: trimmed,
    };

    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: nextMessages
            .filter((m) => m.id !== "welcome")
            .map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      const data = await res.json();
      const replyText: string =
        res.ok && data.reply
          ? data.reply
          : data.error ??
            "Sorry, something went wrong on our end. Please try again in a moment.";

      setMessages((prev) => [
        ...prev,
        { id: createId(), role: "assistant", content: replyText },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: createId(),
          role: "assistant",
          content:
            "Sorry, I'm having trouble connecting right now. Please try again shortly.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    sendMessage(input);
  }

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-24 left-3 right-3 z-[55] flex h-[min(520px,calc(100dvh-11rem))] min-h-0 flex-col overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-black/5 sm:left-auto sm:right-6 sm:w-[360px]">
          {/* Header */}
          <div className="flex items-center justify-between bg-ember-500 px-4 py-4">
            <div>
              <h3 className="font-semibold leading-tight text-white">
                Divith Digital Marketing
              </h3>
              <p className="text-xs text-white/80">AI Assistant</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="rounded-full p-1.5 text-white/90 transition hover:bg-white/10"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="min-h-0 flex-1 space-y-3 overflow-y-auto bg-gray-50 px-4 py-4"
          >
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${
                  m.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] whitespace-pre-line rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                    m.role === "user"
                      ? "bg-ember-500 text-white"
                      : "bg-white text-gray-700 shadow-sm"
                  }`}
                >
                  {m.role === "assistant"
                    ? renderMessageContent(m.content)
                    : m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex items-center gap-2 rounded-2xl bg-white px-3 py-2 text-sm text-gray-400 shadow-sm">
                  <Loader2 size={14} className="animate-spin" />
                  Typing...
                </div>
              </div>
            )}
          </div>

          {/* Quick questions */}
          {/* <div className="border-t border-gray-100 px-4 py-3">
            <p className="mb-2 text-xs font-medium text-gray-400">
              Quick questions:
            </p>
            <div className="flex flex-wrap gap-2">
              {QUICK_QUESTIONS.map((q) => (
                <button
                  key={q}
                  onClick={() => sendMessage(q)}
                  disabled={isLoading}
                  className="rounded-full bg-ember-500/10 px-3 py-1.5 text-xs font-medium text-ember-500 transition hover:bg-ember-500/20 disabled:opacity-50"
                >
                  {q}
                </button>
              ))}
            </div>
          </div> */}

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 border-t border-gray-100 px-4 py-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about our services, pricing..."
              className="flex-1 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-gray-700 outline-none focus:border-ember-400"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              aria-label="Send message"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ember-500 text-white transition hover:bg-ember-700 disabled:opacity-50"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        className="fixed bottom-6 right-4 z-[55] flex h-14 w-14 items-center justify-center rounded-full bg-ember-500 text-white shadow-lg transition hover:scale-105 hover:bg-ember-700 sm:right-6"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </>
  );
}
