"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPaperPlane, FaXmark, FaWandSparkles } from "react-icons/fa6";

type Mood = "idle" | "greeting" | "thinking" | "talking" | "confused";
type Message = { role: "user" | "assistant"; content: string };

const ZARA_IMAGES: Record<Mood, string> = {
  idle: "/zara/zara-friendly.png",
  greeting: "/zara/zara-celebrate.jpg",
  thinking: "/zara/zara-thinking.jpg",
  talking: "/zara/zara-explaining.jpg",
  confused: "/zara/zara-confused.jpg",
};

const SUGGESTED = [
  "What are her best projects?",
  "What's her tech stack?",
  "Is she available for hire?",
];

export default function ZaraCompanion() {
  const [isOpen, setIsOpen] = useState(false);
  const [mood, setMood] = useState<Mood>("idle");
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setShowBubble(true), 3000);
    const t2 = setTimeout(() => setShowBubble(false), 9000);
    return () => { clearTimeout(t); clearTimeout(t2); };
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
    setShowBubble(false);
    if (!hasOpened) {
      setHasOpened(true);
      setMood("greeting");
      setMessages([{
        role: "assistant",
        content: "Hi! I'm Zara 👋 I know everything about Alexandra's work. Ask me about her projects, tech stack, or experience!"
      }]);
      setTimeout(() => setMood("idle"), 3000);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setMood("idle");
  };

  const sendMessage = async (text: string) => {
    if (!text.trim() || isStreaming) return;

    const userMessage: Message = { role: "user", content: text };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setMood("thinking");
    setIsStreaming(true);

    const assistantMessage: Message = { role: "assistant", content: "" };
    setMessages([...newMessages, assistantMessage]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!res.ok) throw new Error("API error");

      setMood("talking");
      const reader = res.body!.getReader();
      const decoder = new TextDecoder();
      let fullText = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        fullText += decoder.decode(value, { stream: true });
        setMessages([...newMessages, { role: "assistant", content: fullText }]);
      }

      setMood("idle");
    } catch {
      setMood("confused");
      setMessages([...newMessages, {
        role: "assistant",
        content: "Oops, something went wrong on my end. Try again in a moment!"
      }]);
      setTimeout(() => setMood("idle"), 3000);
    } finally {
      setIsStreaming(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3">
      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-[340px] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            style={{ background: "rgba(10,10,20,0.92)", backdropFilter: "blur(20px)" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full overflow-hidden border border-purple/40">
                  <img
                    src={ZARA_IMAGES[mood]}
                    alt="Zara"
                    className="w-full h-full object-cover object-[center_15%]"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Zara</p>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                    <p className="text-xs text-white/50">
                      {isStreaming ? "typing..." : "AI Assistant"}
                    </p>
                  </div>
                </div>
              </div>
              <button onClick={handleClose} className="text-white/40 hover:text-white transition-colors">
                <FaXmark size={14} />
              </button>
            </div>

            {/* Messages */}
            <div className="h-52 overflow-y-auto px-4 py-3 flex flex-col gap-3 scrollbar-hide">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-purple text-white rounded-tr-sm"
                        : "bg-white/10 text-white/90 rounded-tl-sm"
                    }`}
                  >
                    {msg.content}
                    {msg.role === "assistant" && isStreaming && i === messages.length - 1 && (
                      <span className="inline-block w-1 h-3.5 bg-purple/70 ml-0.5 animate-pulse align-middle" />
                    )}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested questions */}
            {messages.length <= 1 && (
              <div className="px-4 pb-2 flex flex-wrap gap-1.5">
                {SUGGESTED.map((q) => (
                  <button
                    key={q}
                    onClick={() => sendMessage(q)}
                    className="text-xs px-2.5 py-1 rounded-full border border-purple/40 text-purple hover:bg-purple/10 transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="px-3 pb-3">
              <form
                onSubmit={(e) => { e.preventDefault(); sendMessage(input); }}
                className="flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-3 py-2"
              >
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about Alexandra..."
                  disabled={isStreaming}
                  className="flex-1 bg-transparent text-sm text-white placeholder-white/30 outline-none disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={isStreaming || !input.trim()}
                  className="text-purple hover:text-purple/70 transition-colors disabled:opacity-30"
                >
                  <FaPaperPlane size={13} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Speech bubble */}
      <AnimatePresence>
        {showBubble && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.9 }}
            className="rounded-2xl rounded-br-sm px-4 py-2.5 text-sm text-white shadow-lg border border-white/10 max-w-[200px] text-center"
            style={{ background: "rgba(10,10,20,0.92)", backdropFilter: "blur(20px)" }}
          >
            Hi! Ask me anything about Alexandra 👋
          </motion.div>
        )}
      </AnimatePresence>

      {/* Avatar button */}
      <motion.button
        onClick={handleOpen}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-purple/60 shadow-[0_0_20px_rgba(203,172,249,0.3)] cursor-pointer"
      >
        <img
          src={ZARA_IMAGES[isOpen ? mood : "idle"]}
          alt="Chat with Zara"
          className="w-full h-full object-cover object-[center_15%]"
        />
        {/* AI badge */}
        <div className="absolute bottom-1 right-1 bg-purple rounded-full p-1">
          <FaWandSparkles size={8} color="white" />
        </div>
      </motion.button>
    </div>
  );
}
