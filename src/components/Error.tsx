function Error({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-center my-4 text-white font-bold p-3 uppercase text-sm bg-red-500">
      {children}
    </p>
  );
}

export default Error;
