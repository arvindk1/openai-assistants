import OpenAIAssistant from "@/app/ui/openai-assistant";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-500 to-indigo-600 py-12">
      <div className="mx-auto max-w-lg text-center">
        <div className="m-4">
          <h1 className="mb-4 text-5xl font-extrabold leading-none tracking-tight text-white md:text-6xl lg:text-7xl">
            InvestMate - Mutual Fund Advisor
          </h1>
          <div className="mb-8 text-xl font-normal text-white">
            Where AI meets the financial industry
          </div>
        </div>
        <div className="rounded-lg bg-white p-6 shadow-xl">
          <OpenAIAssistant
            assistantId="asst_XtZ2mLekWrWI7yVDtEKOFWV3"
            greeting="Welcome to InvestMate! Would you like to explore our list of mutual funds, or do you have specific investment goals in mind for creating a diversified portfolio? I am a helpful chat assistant. How can I help you?"
          />
        </div>
      </div>
    </main>
  );
}