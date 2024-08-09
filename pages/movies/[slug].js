import Link from "next/link";
import { movies } from "../../lib/data";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Movie() {
  const router = useRouter();
  console.log("router: ", router.query);

  // const dynamicSlug = router.query.slug; // ??
  const { slug } = router.query;

  const currentMovie = movies.find((movie) => movie.slug === slug);

  if (!currentMovie) {
    return null;
  }

  const { title, description, year } = currentMovie;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <h1>
        {title} <small>{year}</small>
      </h1>
      <p>{description}</p>
      <Link href="/movies">← Back to all movies</Link>
    </>
  );
}
