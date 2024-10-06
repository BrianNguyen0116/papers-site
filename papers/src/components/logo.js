import Link from "next/link"

const Logo = ({text = true, color = "black", first = "#231C18", second = "#A14B16"}) => {
    return (
      <Link href="/">
          <div className="flex items-center gap-2">
            <svg width="32" height="32" viewBox="0 0 277 288" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M263 209.5V78.5L213.5 52M263 209.5L149 265.5V145M263 209.5L149 145M149 145L263 89.5M14 209.5V75L57 54.5403M14 209.5L100 251.5V171M14 209.5L100 171M100 107.5L213.5 52M100 107.5L57 128V54.5403M100 107.5V171M213.5 52L138 16L57 54.5403" stroke="url(#paint0_linear_4_13)" strokeWidth="28" strokeLinecap="round"/>
            <defs>
            <linearGradient id="paint0_linear_4_13" x1="64.5" y1="128" x2="247.5" y2="204" gradientUnits="userSpaceOnUse">
            <stop stopColor={first}/>
            <stop offset="1" stopColor={second}/>
            </linearGradient>
            </defs>
            </svg>
            
            {text && (
            <span className="text-2xl font-bold" style={{color: `${color}`}}>
              Papers
            </span>
            )}
        </div>
      </Link>

    );
  };

  export default Logo