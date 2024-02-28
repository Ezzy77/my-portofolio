import Image from "next/image";

export default function Page() {
  return (
    <>
      <main className="flex flex-col">
        <div className="flex flex-row">
          <h2>Hi👋🏿, my name is Elisio, I create software for fun</h2>
          <Image width="100" height="100" alt="profile"></Image>
        </div>
        <div>
          <h2>My Tech Stack</h2>
          <p>Proficient in these following technologies:</p>
        </div>
      </main>
    </>
  );
}
