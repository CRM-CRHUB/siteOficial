const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contato"
      className="bg-foreground text-background py-5"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center md:justify-end gap-3">

          {/* Símbolo CR */}
          <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-[10px]">
              CR
            </span>
          </div>

          {/* Texto */}
          <p className="text-background/60 text-xs">
            {currentYear} Crhub. Todos os direitos reservados.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
