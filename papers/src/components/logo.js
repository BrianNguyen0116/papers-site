import Link from "next/link"

const Logo = ({text = true, color = "black", first = "#471A00", second = "#D05204"}) => {
    return (
      <Link href="/">
          <div className="flex items-center gap-2">
            <svg width="32" height="32" viewBox="0 0 277 288" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M263 209.5V78.5L213.5 52M263 209.5L149 265.5V145M263 209.5L149 145M213.5 52L100 107.5M213.5 52L138 16L57 54.5403M149 145L263 89.5M14 209.5V75L57 54.5403M14 209.5L100 251.5V165M14 209.5L100 165M57 54.5403V128L100 107.5M100 165V107.5" stroke="url(#paint0_linear_8_8)" stroke-width="24" stroke-linecap="round"/>
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