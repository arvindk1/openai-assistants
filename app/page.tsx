import OpenAIAssistant from "@/app/ui/openai-assistant";


export default function Home() {
  return (
    <main>
      <div className="mx-auto mb-12 max-w-lg text-center">
        <div className="m-4">
          <h1 className="mb-4 text-5xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl">InvestMate - Mutual Fund Advisor</h1>
          <div className="mb-6 text-normal font-normal text-gray-500">
            Where AI meets the financial industry 
          </div>
        </div>
        <OpenAIAssistant 
          assistantId="asst_XtZ2mLekWrWI7yVDtEKOFWV3"
          greeting="Welcome to InvestMate! Would you like to explore our list of mutual funds, or do you have specific investment goals in mind for creating a diversified portfolio? I am a helpful chat assistant. How can I help you?"
        />
      </div>
    </main>
  );
}
