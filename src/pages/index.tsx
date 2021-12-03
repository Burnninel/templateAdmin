import Layout from "../components/template/Layout";

export default function Home() {
  return (
    <Layout
      titulo={"Pagina Inicial"}
      subtitulo={"Estamos construindo alguma coisa"}
    >
      <h3>
        Este website tem como seu objetivo mostrar algumas habilidades com
        diferentes ferramentas de desenvolvimento,<br></br> como React.js,
        Next.js, Tailwind, Firebase, e outros recursos como LocalStorage e
        Cookies.
      </h3>
    </Layout>
  );
}
