export default function Header() {
  return (
    
    <header className="text-black p-4 bg-white">
      <h1>
        <a href='/' className="text-2xl font-bold">かもしかの遊び場🦌</a>
      </h1>
      <div className="absolute right-4 top-4">
        <a href="https://github.com/kamo-shika/blog" target="_blank" rel="noopener noreferrer">
          <img src="/static/github-mark.svg" alt="GitHub" className="w-8 h-8" />
        </a>
      </div>
    </header>
  )
}
