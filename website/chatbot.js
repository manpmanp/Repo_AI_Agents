// Driva AI — sample chatbot widget
// NOTE: this is a rule-based demo assistant for the sample site only.
// It matches keywords and returns canned answers — no AI API or backend
// is connected. A production version would call a real model through a
// small backend endpoint instead of running entirely in the browser.

(function () {
  const responses = [
    {
      keywords: ["price", "pricing", "cost", "how much"],
      reply:
        "Pricing depends on the service and how it's set up for your business — most engagements start with a fixed price for the first build. Head to the Contact page and tell us a bit about your business, and we'll follow up with real numbers.",
    },
    {
      keywords: ["service", "services", "offer", "what do you do", "what can you do"],
      reply:
        "We build AI assistants that handle the repetitive parts of running a business — answering customers, booking appointments, following up on leads, and handling admin work. Check the Services page for the full list.",
    },
    {
      keywords: ["contact", "talk", "human", "call", "email", "reach"],
      reply:
        "You can reach the team directly through the Contact page — there's a short form there and we'll get back to you.",
    },
    {
      keywords: ["hour", "open", "available", "time zone"],
      reply:
        "We're a small, remote-first team, generally reachable on weekdays. Send a message through the Contact page and you'll hear back within a day or two.",
    },
    {
      keywords: ["hi", "hello", "hey", "hej"],
      reply: "Hi there! I'm the Driva AI demo assistant. Ask me about our services, pricing, or how to get in touch.",
    },
    {
      keywords: ["demo", "sample", "real", "fake", "test"],
      reply:
        "Good catch — this whole site is a sample, including me. In a live version, this chat would be connected to a real AI model and your actual business data.",
    },
    {
      keywords: ["thank", "thanks"],
      reply: "You're welcome! Anything else you'd like to know?",
    },
  ];

  const fallback =
    "I'm just a simple demo assistant, so I don't have an answer for that yet. Try asking about services, pricing, or how to get in touch — or use the Contact page for a real reply.";

  function findReply(text) {
    const lower = text.toLowerCase();
    for (const entry of responses) {
      if (entry.keywords.some((k) => lower.includes(k))) {
        return entry.reply;
      }
    }
    return fallback;
  }

  function initChat() {
    const toggle = document.getElementById("chat-toggle");
    const panel = document.getElementById("chat-panel");
    const closeBtn = document.getElementById("chat-close");
    const body = document.getElementById("chat-body");
    const input = document.getElementById("chat-input");
    const sendBtn = document.getElementById("chat-send");
    const quickRow = document.getElementById("chat-quick");

    if (!toggle || !panel) return;

    toggle.addEventListener("click", () => {
      panel.classList.toggle("open");
      if (panel.classList.contains("open")) input.focus();
    });

    closeBtn.addEventListener("click", () => panel.classList.remove("open"));

    function addMessage(text, from) {
      const div = document.createElement("div");
      div.className = "msg " + from;
      div.textContent = text;
      body.appendChild(div);
      body.scrollTop = body.scrollHeight;
    }

    function handleSend(text) {
      const trimmed = text.trim();
      if (!trimmed) return;
      addMessage(trimmed, "user");
      input.value = "";
      setTimeout(() => addMessage(findReply(trimmed), "bot"), 400);
    }

    sendBtn.addEventListener("click", () => handleSend(input.value));
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") handleSend(input.value);
    });

    if (quickRow) {
      quickRow.querySelectorAll(".chip").forEach((chip) => {
        chip.addEventListener("click", () => handleSend(chip.textContent));
      });
    }
  }

  document.addEventListener("DOMContentLoaded", initChat);
})();
