export interface CustomErrorProps {
  msg?: string;
  dataName: string;
}

export default function CustomError({ msg, dataName }: CustomErrorProps) {
  return (
    <div className="h-[70vh] flex justify-center items-center text-red-400 text-center w-full">
      <h1 className="xl:text-2xl text-lg font-medium">
        {msg || `Failed to fetch ${dataName}, Something went wrong.`}
      </h1>
    </div>
  );
}
