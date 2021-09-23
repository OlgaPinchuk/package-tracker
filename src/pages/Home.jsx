import Card from "../components/Card";

export default function Home({ data }) {
  const PackageList = data.map((item) => <Card key={item.id} item={item} />);

  return (
    <div className="home">
      <div className="container">
        <h2>Packages</h2>
        <div className="packages">{PackageList}</div>
      </div>
    </div>

  );
}
