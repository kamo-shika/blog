export default function Header() {
  return (
    <header className="text-black p-4 bg-white">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <a href='/about' className="text-2xl font-bold">かもしかの遊び場</a>
          <img 
            src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Deer/Flat/deer_flat.svg" 
            alt="鹿" 
            className="w-8 h-8" 
          />
        </div>
        <div className="flex gap-4">
          <a href='/' rel="noopener noreferrer">
            <img src="/static/home-mark.svg" alt="home" className="w-8 h-8" />
          </a>
          <a href="https://github.com/kamo-shika/blog" target="_blank" rel="noopener noreferrer">
            <img src="/static/github-mark.svg" alt="GitHub" className="w-8 h-8" />
          </a>
        </div>
      </div>
    </header>
  )
}
