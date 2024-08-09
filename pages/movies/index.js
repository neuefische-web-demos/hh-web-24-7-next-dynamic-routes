import Link from "next/link";
import { movies } from "@/lib/data";
import { useRouter } from "next/router";

export default function Movies() {
  const router = useRouter();
  return (
    <>
      <h1>List of Movies</h1>
      <ul>
        {movies.map(({ slug, title, id }) => (
          <li key={id}>
            <Link href={`/movies/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          if (confirm("Are you Aquaman?")) {
            console.log("navigate to the aquaman movie page");
            router.push("http://google.com");
          }
        }}
        type="button"
      >
        Are you Aquaman?
      </button>
    </>
  );
}
