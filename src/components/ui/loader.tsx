export default function Loader({ msg = "Loading Data" }: { msg?: string }) {
  return (
    <div className="h-[80vh] flex flex-col justify-center items-center">
      <div className="bg-darkpurple/80 rounded-full size-24 animate-bounce flex justify-center pt-4 pl-6 shadow-2xl shadow-lightgraypurple">
        <div className="size-8 bg-purple-400/50 rounded-full blur-sm animate-spin"></div>
      </div>
      <h2 className="xl:text-xl text-lg font-bold">{msg}...</h2>
    </div>
  );
}
