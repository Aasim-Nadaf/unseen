"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export default function Home() {
  useGSAP(() => {
    const text = new SplitText("p", { type: "words" });

    gsap.from(text.words, {
      opacity: 0,
      y: 50,
      stagger: 0.05,
      duration: 1.2,
      ease: "power2",
    });
  }, []);

  return (
    <section className="h-screen flex justify-center items-center">
      <div className="w-full mx-auto max-w-3xl">
        <p className="text-3xl leading-[0.9] font-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          voluptatem non sequi in reprehenderit alias sapiente iure eveniet
          voluptatibus eum, eaque magni facere tempore cumque veritatis error
          hic voluptas sit.
        </p>
      </div>
    </section>
  );
}
