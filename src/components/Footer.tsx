export default function Footer() {
  return (
    <footer
      className="w-full bg-zinc-950/80 backdrop-blur-md text-center py-3 border-t border-gray-800"
      role="contentinfo"
    >
      <p className="text-sm text-gray-400">
        © {new Date().getFullYear()}{" "}
        <span className="font-medium text-gray-300">Walther Flores</span> ·{" "}
        <span lang="es">Todos los derechos reservados</span>
      </p>
    </footer>
  );
}
