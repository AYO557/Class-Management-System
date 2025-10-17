export default function CustomError({
  msg,
  dataName,
}: {
  msg?: string;
  dataName: string;
}) {
  return (
    <div className="h-[70vh] flex justify-center items-center">
      <h1 className="text-2xl">
        {msg || `Failed to fetch ${dataName}, Something went wrong.`}
      </h1>
    </div>
  );
}
