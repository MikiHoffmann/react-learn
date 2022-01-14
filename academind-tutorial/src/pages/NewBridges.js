import NewBridgesForm from "../components/bridges/NewBridgesForm";
export default function NewBridgesPage() {

  function addBridgesHandler(bridgeData) {
    fetch(
      "https://react-learn-bridges-default-rtdb.europe-west1.firebasedatabase.app/bridges.json",
      {
        method: "POST",
        body: JSON.stringify(bridgeData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  return (
    <section className="section">
      <h1>New bridges</h1>
      <NewBridgesForm onAddBridges={addBridgesHandler} />
    </section>
  );
}
