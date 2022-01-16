import NavBar from "../Components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="main">
        <article className="sectionTask">
          Handout React -- This is the Homepage!
        </article>
      </div>
    </div>
  );
}
