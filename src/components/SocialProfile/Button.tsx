type ButtonProps = {
  children?: React.ReactNode;
  url: string;
};

function Button({ children, url }: ButtonProps) {
  return (
    <button className="h-12 rounded-lg bg-[hsl(0,0%,20%)] px-6 py-3 text-sm font-semibold transition duration-150 ease-in-out hover:bg-[hsl(75,94%,57%)] hover:text-blue-900">
      <a className="" href={url}>
        {children}
      </a>
    </button>
  );
}

export default Button;
