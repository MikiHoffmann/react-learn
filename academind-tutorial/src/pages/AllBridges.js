import NavBar from "../components/NavBar";
import ListSection from "../components/ListSection";
import BridgeList from "../components/bridges/BridgeList";
const bridgesData = [
  {
    id: "b1",
    title: "bridge 1",
    image: "/images/bridge1.jpg",
    address: "Canal 1",
    description: "This is a great bridge!",
  },
  {
    id: "b2",
    title: "bridge 2",
    image: "images/bridge2.jpg",
    address: "Canal 2",
    description: "This is a great bridge!",
  },
  {
    id: "b3",
    title: "bridge 3",
    image: "images/bridge3.jpg",
    address: "Canal 3",
    description: "This is a great bridge!",
  },
  {
    id: "b4",
    title: "bridge 4",
    image: "images/bridge4.jpg",
    address: "Canal 4",
    description: "This is a great bridge!",
  },
  {
    id: "b5",
    title: "bridge 5",
    image: "images/bridge5.jpg",
    address: "Canal 5",
    description: "This is a great bridge!",
  },
  {
    id: "b6",
    title: "bridge 6",
    image: "images/bridge6.jpg",
    address: "Canal 6",
    description: "This is a great bridge!",
  },
  {
    id: "b7",
    title: "bridge 7",
    image: "images/bridge7.jpg",
    address: "Canal 7",
    description: "This is a great bridge!",
  },
  {
    id: "b8",
    title: "bridge 8",
    image: "images/bridge8.jpg",
    address: "Canal 8",
    description: "This is a great bridge!",
  },
  {
    id: "b9",
    title: "bridge 9",
    image: "images/bridge9.jpg",
    address: "Canal 9",
    description: "This is a great bridge!",
  },
  {
    id: "b10",
    title: "bridge 10",
    image: "images/bridge10.jpg",
    address: "Canal 10",
    description: "This is a great bridge!",
  },
];

export default function AllBridgesPage() {
  return (
    <div>
      <NavBar />
      <main>
        <div className="section">
          <h1>All Bridges</h1>
          <ListSection>
            <BridgeList bridgeItems={bridgesData} />
          </ListSection>
        </div>
      </main>
    </div>
  );
}
