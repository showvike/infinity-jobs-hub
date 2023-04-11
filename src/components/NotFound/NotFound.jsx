import { useRouteError } from "react-router-dom";

export default function NotFound() {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="mt-24 flex flex-col justify-center items-center gap-6">
      <h1 className="text-5xl font-bold">Oops! You seem to be lost.</h1>
      <h2 className="text-9xl font-black">404</h2>
      <h3 className="text-7xl font-extrabold">Not Found</h3>
    </div>
  );
}
