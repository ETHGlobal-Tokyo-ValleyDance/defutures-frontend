const MyPosition = () => {
  return (
    <div className="px-10 py-6">
      <div className="flex flex-col flex-1 [&>div]:grid [&>div]:grid-cols-3">
        <div className="w-full border-b py-2 border-b-neutral-200 [&>p]:text-center [&>p]:font-semibold [&>p]:text-lg">
          <p> Pair </p>
          <p> LP Balance </p>
          <p> Futures </p>
        </div>
        <div className="h-16">
          <div className="flex-1 flex-center">UniswapV2 USDC + ETH</div>
          <div className="flex-1 flex-center">120.98LP</div>
          <div className="flex-1 flex-center">LONG SHORT</div>
        </div>
      </div>
    </div>
  );
};

export default MyPosition;
