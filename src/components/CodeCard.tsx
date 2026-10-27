import { CheckCircle2 } from "lucide-react";

export function CodeCard() {
  return (
    <div className="w-full max-w-[420px] overflow-hidden rounded-2xl border border-[#333333] bg-[#222222] shadow-2xl shadow-black/40">
      {/* Barra superior */}
      <div className="flex h-12 items-center gap-2 border-b border-[#333333] bg-[#1d1d1d] px-5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FA625C]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#F8BD4F]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#42C987]" />

        <span className="ml-3 font-mono text-xs text-[#A0A0A0]">
          portfolio.tsx
        </span>
      </div>

      {/* Bloco de Código */}
      <div className="overflow-x-auto px-6 py-6 font-mono text-[13px] leading-7 sm:text-sm">
        <div>
          <span className="text-[#6D83F2]">const</span>{" "}
          <span className="text-[#F8F8F8]">developer</span>{" "}
          <span className="text-[#A0A0A0]">= {"{"}</span>
        </div>

        <div className="whitespace-nowrap pl-4">
          <span className="text-[#A0A0A0]">name</span>
          <span className="text-[#A0A0A0]">: </span>
          <span className="text-primary">"Rafael Rodrigues"</span>
          <span className="text-[#A0A0A0]">,</span>
        </div>

        <div className="whitespace-nowrap pl-4">
          <span className="text-[#A0A0A0]">role</span>
          <span className="text-[#A0A0A0]">: </span>
          <span className="text-primary">"Full Stack Developer"</span>
          <span className="text-[#A0A0A0]">,</span>
        </div>

        <div className="whitespace-nowrap pl-4">
          <span className="text-[#A0A0A0]">focus</span>
          <span className="text-[#A0A0A0]">: [</span>
          <span className="text-primary">"Web"</span>
          <span className="text-[#A0A0A0]">, </span>
          <span className="text-primary">"AI"</span>
          <span className="text-[#A0A0A0]">, </span>
          <span className="text-primary">"Automation"</span>
          <span className="text-[#A0A0A0]">],</span>
        </div>

        <div className="whitespace-nowrap pl-4">
          <span className="text-[#A0A0A0]">mindset</span>
          <span className="text-[#A0A0A0]">: </span>
          <span className="text-primary">"build useful things"</span>
        </div>

        <div className="text-[#A0A0A0]">{"};"}</div>
      </div>

      {/* Rodapé do Card */}
      <div className="flex h-12 items-center gap-2 border-t border-[#333333] bg-[#1d1d1d] px-6">
        <CheckCircle2 size={13} className="text-primary" />
        <span className="font-mono text-[11px] text-primary">
          ready to build
        </span>
      </div>
    </div>
  );
}
