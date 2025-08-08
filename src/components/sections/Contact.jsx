import { RevealOnScroll } from "../RevealOnScroll";
import { SectionTitle } from "./common";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-y-20"
    >
      <RevealOnScroll>
        <div className="px-4 W-150">
          <SectionTitle>CALL me BEEP me if you wanna REACH me</SectionTitle>
        </div>
      </RevealOnScroll>
    </section>
  );
};
