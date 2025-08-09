import { RevealOnScroll } from "../RevealOnScroll";
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
  SectionTitle,
} from "../common";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-y-20"
    >
      <RevealOnScroll>
        <div className="blob-container">
          <div className="blob"></div>
        </div>
        <div className="px-4 W-150">
          <SectionTitle>CALL me BEEP me if you wanna REACH me</SectionTitle>
          <form className="space-y-6">
            <div className="relative space-y-6">
              <FormItem
                type="text"
                id="your lovely name goes here"
                placeholder="Name..."
              />
              <FormItem type="email" id="email" placeholder="Email..." />
              <FormMessageItem
                placeholderMessage={`May your message be briefer than the time spent making this form\n and prose as sharp as this css file`}
              />
            </div>
            <PrimaryButton className="flex justify-center" onSubmit={true}>
              Send
            </PrimaryButton>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};

const FormMessageItem = ({ placeholderMessage }) => {
  return (
    <textarea
      id="message"
      name="message"
      required
      rows={5}
      placeholder={placeholderMessage}
      className="whitespace-pre-line w-full bg-white/5 border-2 border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-pink-700 focus:bg-pink-700/10"
    />
  );
};

const FormItem = ({ id, placeholder, type }) => {
  return (
    <input
      type={type}
      id={id}
      required
      className="w-full bg-white/5 border-2 border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-pink-700 focus:bg-pink-700/10"
      placeholder={placeholder}
    />
  );
};
