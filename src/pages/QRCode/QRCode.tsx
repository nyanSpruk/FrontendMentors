function QRCode() {
  return (
    <div className="flex h-screen items-center justify-center bg-[hsl(212,45%,89%)]">
      <div className="grid h-[497px] w-80 rounded-xl bg-white p-4 shadow-lg">
        <img className="rounded-xl" src="/qrcode/image-qr-code.png"></img>
        <div className="font-outfit grid gap-2 p-3">
          <h1 className="text-center text-[1.375rem] font-bold leading-7 text-[hsl(218,44%,22%)]">
            Improve your front-end skills by building projects
          </h1>
          <p className="text-center text-[0.938rem] text-[hsl(220,15%,55%)]">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
}

export default QRCode;
