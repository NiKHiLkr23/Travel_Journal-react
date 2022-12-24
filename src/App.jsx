import Header from "./components/Header";
import Card from "./components/Card";
import data from "./data";

function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center space-y-5">
        {cards}
      </div>
    </div>
  );
}

export default App;
