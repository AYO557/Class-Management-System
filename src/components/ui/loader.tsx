export default function Loader({ msg = "Loading" }: { msg?: string }) {
  return (
    <div className="h-[100vh] flex flex-col justify-center items-center">
      <div className="bg-darkpurple/80 rounded-full size-32 animate-bounce flex justify-center pt-6 pl-8 shadow-2xl shadow-lightgraypurple">
        <div className="size-10 bg-purple-400/50 rounded-full blur-sm animate-spin"></div>
      </div>
      <h2>{msg}...</h2>
    </div>
  );
}
