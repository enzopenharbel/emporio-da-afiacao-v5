function Header({ voltarInicio }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const irPara = (id) => {
    voltarInicio();

    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 80);
  };

  return (
    <header
      className={`fixed w-full z-50 bg-black/95 backdrop-blur-md border-b border-yellow-400/20 transition-all duration-500 ${
        scrolled ? "py-1 shadow-[0_0_25px_rgba(250,204,21,0.18)]" : "py-2"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto flex items-center justify-between px-6 gap-6 transition-all duration-500 ${
          scrolled ? "min-h-[78px]" : "min-h-[135px]"
        }`}
      >
        <button
          onClick={voltarInicio}
          className={`flex items-center justify-start shrink-0 transition-all duration-500 ${
            scrolled
              ? "w-[210px] md:w-[260px]"
              : "w-[300px] md:w-[390px] lg:w-[460px]"
          }`}
        >
          <img
            src="/logo.png"
            alt="Empório da Afiação"
            className={`object-fill transition-all duration-500 drop-shadow-[0_0_34px_rgba(250,204,21,0.9)] ${
              scrolled
                ? "h-20 md:h-24 w-[210px] md:w-[260px]"
                : "h-32 md:h-44 lg:h-52 w-[300px] md:w-[390px] lg:w-[460px]"
            }`}
          />
        </button>

        <div className="hidden md:flex flex-1 justify-center">
          <div
            className={`flex rounded-xl transition-all duration-500 hover:shadow-[0_0_32px_rgba(250,204,21,0.55)] focus-within:shadow-[0_0_42px_rgba(250,204,21,0.85)] ${
              scrolled ? "w-[330px]" : "w-[390px]"
            }`}
          >
            <input
              placeholder="Diga o que você procura"
              className={`flex-1 bg-black border-[3px] border-yellow-400/60 border-r-0 rounded-l-xl text-yellow-200 outline-none transition-all duration-300 hover:border-yellow-400 focus:border-yellow-400 ${
                scrolled ? "px-3 py-2 text-sm" : "px-4 py-3"
              }`}
            />

            <button
              className={`bg-yellow-400 border-[3px] border-yellow-400 border-l-0 rounded-r-xl hover:bg-yellow-300 transition-all duration-300 ${
                scrolled ? "px-4" : "px-5"
              }`}
            >
              <Search size={scrolled ? 18 : 20} className="text-black" />
            </button>
          </div>
        </div>

        <nav className="hidden md:flex gap-8 items-center">
          <button onClick={() => irPara("inicio")} className="relative group hover:text-yellow-400">
            Início
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 group-hover:w-full transition-all" />
          </button>

          <button onClick={() => irPara("produtos")} className="relative group hover:text-yellow-400">
            Produtos
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 group-hover:w-full transition-all" />
          </button>

          <button onClick={() => irPara("avaliacoes")} className="relative group hover:text-yellow-400">
            Avaliações
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 group-hover:w-full transition-all" />
          </button>

          <button onClick={() => irPara("contato")} className="relative group hover:text-yellow-400">
            Contato
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 group-hover:w-full transition-all" />
          </button>

          <button className="relative group">
            <ShoppingCart className="group-hover:text-yellow-400 transition" />
            <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs px-1 rounded-full group-hover:scale-110 transition">
              0
            </span>
          </button>
        </nav>
      </div>
    </header>
  );
}
