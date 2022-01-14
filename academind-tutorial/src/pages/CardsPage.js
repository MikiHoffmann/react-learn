import Card from "../components/Card";

export default function CardsPage() {
  return (
        <div className="section">
          <h1>My Todo's</h1>
          <Card text="Learn React" />
          <Card text="Master React" />
          <Card text="Explore more" />
        </div>
  );
}
