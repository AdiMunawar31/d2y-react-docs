"use client";

import { Toolbar } from "@/components/features/tools//html-to-jsx/Toolbar";
import { EditorPanel } from "@/components/features/tools//html-to-jsx/EditorPanel";
import { FooterActions } from "@/components/features/tools//html-to-jsx/FooterActions";
import { useHtmlToJsx } from "@/hooks/tools/useHtmlToJsx";
import HtmlToJsxHeader from "@/components/features/tools/html-to-jsx/HtmlToJsxHeader";
import HtmlToJsxFeatures from "@/components/features/tools/html-to-jsx/HtmlToJsxFeatures";

export default function HtmlToJsxPage() {
  const converter = useHtmlToJsx();

  return (
    <main className="relative z-10 flex-1 flex flex-col items-center w-full py-12 px-4 sm:px-6">
      <HtmlToJsxHeader />
      <div className="w-full max-w-7xl rounded-2xl border border-white/10 bg-[#161f32]/60 backdrop-blur-2xl overflow-hidden">
        <Toolbar {...converter} />
        <EditorPanel {...converter} />
        <FooterActions {...converter} />
      </div>
      <HtmlToJsxFeatures />
    </main>
  );
}
