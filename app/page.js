import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <nav>
        <h1>Elisio Code</h1>
        <div>
          <Link>Home</Link>
          <Link>Projects</Link>
          <Link>About</Link>
          <Link>Blogs</Link>
          <Link>Contact</Link>
        </div>
      </nav>
      <h2>Home Page</h2>
    </main>
  );
}
