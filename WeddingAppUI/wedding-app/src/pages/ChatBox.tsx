import { useState, useRef, useEffect } from "react";
import "../assets/css/ChatBox.css";

interface ChatMessage {
  name: string;
  message: string;
}

export default function ChatBox() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [name, setName] = useState("");
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const sendMessage = () => {
    if (!input.trim() || !name.trim()) return;
    setMessages([...messages, { name: name.trim(), message: input.trim() }]);
    setInput("");
  };

  // Auto scroll khi có tin nhắn mới
  useEffect(() => {
    if (messagesEndRef.current) {
      const container = messagesEndRef.current;
      container.scrollTop = container.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="w-full max-w-[420px] mx-auto flex flex-col h-[625px] rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="bg-chat-box text-white text-lg font-semibold p-3 text-center">
        💌 Gửi lời chúc
      </div>

      {/* Nội dung chat */}
      <div className="flex-1 p-3 bg-gray-50">
        {/* Container scroll riêng */}
        <div
          className="h-[432px] overflow-y-auto space-y-3"
          ref={messagesEndRef} // ref đặt ở container thay vì cuối danh sách
        >
          {messages.length === 0 && (
            <p className="text-center text-gray-400 text-base">
              Hãy là người đầu tiên gửi lời chúc ✨
            </p>
          )}
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className="bg-white p-3 rounded-xl shadow text-base text-gray-700 break-words whitespace-pre-wrap ms-mg-12"
            >
              <p className="font-semibold text-indigo-600">{msg.name}</p>
              <p className="mt-1">{msg.message}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="p-3 border-t bg-white flex flex-col gap-2 bg-home2">
        {/* Nhập tên */}
        <input
          type="text"
          value={name}
          maxLength={40}
          onChange={(e) => setName(e.target.value)}
          onClick={(e) => e.stopPropagation()}
          placeholder="Tên của bạn..."
          className="border rounded-lg px-3 py-2 text-base focus:outline-none focus:ring-2 focus:bg-chat-box text-black"
        />
        {/* Nhập lời chúc */}
        <div className="flex gap-2">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            maxLength={300}
            placeholder="Nhập lời chúc..."
            onClick={(e) => e.stopPropagation()}
            className="flex-1 border rounded-lg px-3 py-2 text-base resize-none break-words focus:outline-none focus:ring-2 focus:bg-chat-box text-black"
            rows={1} // mặc định cao 2 dòng
          />

          <button
            onClick={(e) => {
              e.stopPropagation(); // chặn click lan xuống HomeContent
              sendMessage(); // đóng Welcome, mở HomeContent
            }}
            className="bg-chat-box text-white px-4 py-2 rounded-lg transition"
          >
            Gửi
          </button>
        </div>
      </div>
    </div>
  );
}
