import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import prdContent from "../data/chatlyPRD.md?raw";

export const ChatlyPRDDetail = () => {
  return (
    <div className="max-w-none font-sans">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{

          /* ── H1 ── */
          h1: ({ children }) => (
            <div className="mb-10 pb-6 border-b-2 border-black">
              <div className="flex items-center gap-2 mb-2">
                <img src="/lovable-uploads/chatly-logo.webp" alt="Chatly" className="w-5 h-5 object-contain opacity-70" />
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Chatly · Product Requirements Document</span>
              </div>
              <h1 className="text-4xl font-black text-black leading-tight tracking-tight">{children}</h1>
            </div>
          ),

          /* ── H2 ── */
          h2: ({ children }) => (
            <div className="mt-12 mb-5">
              <div className="flex items-stretch gap-4">
                <div className="w-1 bg-black rounded-full flex-shrink-0" />
                <h2 className="text-xl font-black text-black uppercase tracking-wide leading-snug">
                  {children}
                </h2>
              </div>
              <div className="mt-3 h-px bg-zinc-100" />
            </div>
          ),

          /* ── H3 ── */
          h3: ({ children }) => (
            <h3 className="mt-8 mb-3 flex items-center gap-2.5">
              <span className="w-3 h-3 border-2 border-black rounded-sm flex-shrink-0 inline-block" />
              <span className="text-base font-bold text-black">{children}</span>
            </h3>
          ),

          /* ── H4 ── */
          h4: ({ children }) => (
            <h4 className="mt-5 mb-2 flex items-center gap-2">
              <span className="w-4 h-px bg-black inline-block flex-shrink-0" />
              <span className="text-xs font-black text-black uppercase tracking-[0.15em]">{children}</span>
            </h4>
          ),

          /* ── TABLE ── */
          table: ({ children }) => (
            <div className="overflow-x-auto my-6 rounded-xl border border-zinc-200 shadow-sm">
              <table className="w-full text-sm border-collapse m-0">{children}</table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-black">{children}</thead>
          ),
          th: ({ children }) => (
            <th className="text-left text-[11px] font-bold text-white uppercase tracking-wider px-4 py-3 border-r border-zinc-700 last:border-r-0 whitespace-nowrap">
              {children}
            </th>
          ),
          tbody: ({ children }) => (
            <tbody className="divide-y divide-zinc-100">{children}</tbody>
          ),
          tr: ({ children }) => (
            <tr className="hover:bg-zinc-50 transition-colors even:bg-zinc-50/50">
              {children}
            </tr>
          ),
          td: ({ children }) => (
            <td className="px-4 py-3 text-sm text-zinc-700 border-r border-zinc-100 last:border-r-0 align-top leading-relaxed">
              {children}
            </td>
          ),

          /* ── BLOCKQUOTE ── */
          blockquote: ({ children }) => (
            <div className="my-6 flex gap-0 overflow-hidden rounded-r-xl">
              <div className="w-1 bg-black flex-shrink-0" />
              <div className="bg-zinc-50 border border-l-0 border-zinc-200 flex-1 px-5 py-4 rounded-r-xl">
                <div className="text-sm font-semibold text-black leading-relaxed italic">{children}</div>
              </div>
            </div>
          ),

          /* ── CODE ── */
          code: ({ children, className }) => {
            const isBlock = className?.includes("language-");
            if (isBlock) {
              return (
                <div className="my-5 rounded-xl overflow-hidden border border-zinc-800">
                  <div className="bg-zinc-900 px-4 py-2 border-b border-zinc-700 flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
                      <span className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
                      <span className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
                    </div>
                    <span className="text-[10px] text-zinc-500 font-mono ml-1">schema</span>
                  </div>
                  <pre className="bg-zinc-950 text-zinc-200 p-4 overflow-x-auto text-xs font-mono leading-relaxed m-0">
                    <code>{children}</code>
                  </pre>
                </div>
              );
            }
            return (
              <code className="text-black bg-zinc-100 border border-zinc-200 px-1.5 py-0.5 rounded text-[0.82em] font-mono">
                {children}
              </code>
            );
          },

          /* ── HR ── */
          hr: () => (
            <div className="my-12 flex items-center gap-4">
              <div className="flex-1 h-px bg-zinc-200" />
              <div className="flex gap-1">
                <span className="w-1 h-1 rounded-full bg-zinc-400" />
                <span className="w-1 h-1 rounded-full bg-zinc-400" />
                <span className="w-1 h-1 rounded-full bg-zinc-400" />
              </div>
              <div className="flex-1 h-px bg-zinc-200" />
            </div>
          ),

          /* ── LISTS ── */
          ul: ({ children }) => (
            <ul className="my-3 space-y-2 pl-0 list-none">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="my-3 space-y-2 pl-0 list-none counter-reset-item">{children}</ol>
          ),
          li: ({ children }) => (
            <li className="flex items-start gap-3 text-sm text-zinc-700 leading-relaxed">
              <span className="mt-1.5 w-1.5 h-1.5 bg-black flex-shrink-0 rotate-45" />
              <span>{children}</span>
            </li>
          ),

          /* ── PARAGRAPH ── */
          p: ({ children }) => (
            <p className="text-sm text-zinc-600 leading-7 my-3">{children}</p>
          ),

          /* ── STRONG ── */
          strong: ({ children }) => (
            <strong className="font-bold text-black">{children}</strong>
          ),

          /* ── EM ── */
          em: ({ children }) => (
            <em className="italic text-zinc-500">{children}</em>
          ),
        }}
      >
        {prdContent}
      </ReactMarkdown>
    </div>
  );
};
