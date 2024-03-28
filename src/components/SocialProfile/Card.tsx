import Button from "./Button";

function Card() {
  return (
    <div className="font-inter m-6 flex w-full flex-col items-center justify-center gap-6 rounded-2xl bg-[hsl(0,0%,12%)] p-6 text-white sm:max-w-[390px] sm:p-10">
      <img
        src="/socialProfile/avatar-jessica.jpeg"
        alt="Jessica Randal"
        className="size-[5.5rem] rounded-full"
      />
      <div className="flex flex-col items-center justify-center gap-1">
        <h1 className="text-[1.6rem]">Jessica Randall</h1>
        <p className="text-sm font-bold text-[hsl(75,94%,57%)]">
          London, United Kingdom
        </p>
      </div>
      <p className="text-[0.875rem] font-extralight">
        "Front-end developer and avid reader."
      </p>

      <div className="grid w-full gap-4">
        <Button url="">GitHub</Button>
        <Button url="">Frontend Mentor</Button>
        <Button url="">LinkedIn</Button>
        <Button url="">Twitter</Button>
        <Button url="">Instagram</Button>{" "}
      </div>
    </div>
  );
}

export default Card;
