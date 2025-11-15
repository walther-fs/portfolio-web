export default function Footer() {
  return (
    <footer
      className="w-full bg-zinc-950/80 backdrop-blur-md text-center py-3 border-t border-gray-800"
      role="contentinfo"
    >
      <p className="text-sm text-gray-400">
        © {new Date().getFullYear()} Walther Flores. Todos los derechos
        reservados.
      </p>
    </footer>
  );
}
