function BlogPreviewCard() {
  return (
    <div className="flex h-screen items-center justify-center bg-[hsl(47,88%,63%)]">
      <div className="sm:h- m-6 flex w-full flex-col gap-6 rounded-[16px] border border-black bg-white stroke-2 p-6 drop-shadow-[8px_8px_0_rgba(0,0,0,1)] sm:w-96">
        <img
          className="h-[200px] rounded-xl object-cover"
          src="/blogPreviewCard/illustration-article.svg"
          alt="img"
        />
        <div className="font-figtree grid gap-3">
          <p className="w-fit rounded bg-[hsl(47,88%,63%)] px-3 py-1 text-xs font-extrabold leading-[0.75*1.5] sm:text-sm sm:leading-[1.5*0.875rem]">
            Learning
          </p>
          <p className="text-xs font-medium leading-[0.75*1.5] sm:text-sm sm:leading-[1.5*0.875rem]">
            Published 21 Dec 2023
          </p>
          <a
            href="/"
            className="text-xl font-extrabold leading-[1.5*1.25] hover:text-[hsl(47,88%,63%)] sm:text-2xl sm:leading-[1.5*1.5]"
          >
            HTML & CSS foundations
          </a>
          <p className="text-sm leading-[1.5*0.875rem] text-[hsl(0,0%,50%)] sm:text-base">
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <img
            className="size-8"
            src="/blogPreviewCard/image-avatar.webp"
            alt="user"
          />
          <p className="text-sm font-extrabold leading-[1.5*0.875rem]">
            Greg Hooper
          </p>
        </div>
      </div>
    </div>
  );
}

export default BlogPreviewCard;
