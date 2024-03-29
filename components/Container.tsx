import Head from "next/head";
import Link from "next/link";

const Container = ({ title, description, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="pt-10 mx-auto max-w-3xl">
        <header>
          <h1>Collection of Deno Scripts</h1>
        </header>
        {children}
        <footer className="absolute bottom-6 right-10 text-base gap-2 flex">
          <Link legacyBehavior href="https://github.com/comingAlive/denos">
            <a>Github repo</a>
          </Link>
          /
          <Link legacyBehavior href="https://t.me/aiwon">
            <a>@aiwon</a>
          </Link>
        </footer>
      </main>
    </>
  );
};
export default Container;
