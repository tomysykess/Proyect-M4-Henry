import ButtonToHome from "@/components/buttonToHome/ButtonToHome";

const ErrorPage = () => {
  return (
    <div className="bg-primary opacity-90 pb-5">
      <div className="flex flex-column items-center justify-center h-screen">
        <img src="/gameover.png" className="max-w-auto max-h-auto" />
      </div>
      <div className="mt-8 text-center">
        <ButtonToHome />
      </div>
    </div>
  );
};

export default ErrorPage;
