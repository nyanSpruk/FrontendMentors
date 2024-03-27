import rawData from "./data.json";

type Data = {
  category: string;
  score: number;
  icon: string;
};

function ResultsSummary() {
  const data: Data[] = rawData;
  const colors_bg = [
    "hsla(0,100%,67%,",
    "hsla(39,100%,56%,",
    "hsla(166,100%,37%,",
    "hsla(234,85%,45%,",
  ];
  return (
    <div>
      <div className="font-hankengrotesk grid h-full xl:m-[22rem] xl:grid-cols-2 xl:content-center xl:rounded-3xl xl:shadow-2xl">
        {/* Results */}
        <div className="flex flex-col items-center justify-between gap-4 rounded-3xl rounded-t-none bg-gradient-to-b from-[hsl(252,100%,67%)] to-[hsl(241,81%,54%)] p-8 xl:gap-8 xl:rounded-3xl xl:pb-12">
          <h1 className="text-base font-bold text-[hsla(241,100%,89%,0.7)] xl:text-2xl">
            Your Result
          </h1>
          <div className="flex size-32 flex-col items-center justify-center rounded-full bg-gradient-to-b from-[hsla(256,72%,46%,1)] to-[hsla(241,72%,46%,0)] p-6 text-center xl:size-48">
            <div className="text-[2.75rem] font-bold text-[hsl(0,0%,100%)] xl:text-[4rem]">
              76
            </div>
            <div className="text-sm text-[hsla(241,100%,89%,0.7)] xl:text-lg">
              of 100
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 xl:gap-4">
            <p className="text-2xl font-bold text-[hsl(0,0%,100%)] xl:text-3xl">
              Great
            </p>
            <p className="text-center text-lg text-[hsla(241,100%,89%,0.7)]">
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </div>
        </div>
        {/* Summary */}
        <div className="m-8 mt-6 flex flex-col justify-between gap-6 xl:mt-8">
          <h1 className="text-start text-xl font-bold xl:align-middle xl:text-2xl">
            Summary
          </h1>
          <div className="flex flex-col gap-4">
            {data.map((item, index) => (
              <div
                className="flex h-[3.25rem] justify-between rounded-xl p-4"
                style={{
                  backgroundColor: colors_bg[index] + "0.1)",
                }}
                key={item.category}
              >
                <div className="flex items-center justify-center gap-3">
                  <img src={item.icon} alt={item.category} />
                  <p
                    className="text-base"
                    style={{
                      color: colors_bg[index] + "1)",
                    }}
                  >
                    {item.category}
                  </p>
                </div>

                <div className="flex items-center justify-center">
                  <p className="font-bold text-[hsl(224,30%,27%)]">
                    {item.score}
                  </p>
                  <p className="text-[hsla(241,100%,89%,0.9)]">
                    &nbsp;&nbsp;/ 100
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button className="h-12 rounded-3xl bg-[hsl(224,30%,27%)] text-[hsla(0,0%,100%,0.7)]">
            Continue
          </button>
        </div>
      </div>

      {/* <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Nik</a>.
      </div> */}
    </div>
  );
}

export default ResultsSummary;
