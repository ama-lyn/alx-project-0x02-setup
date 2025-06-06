import { type CardProps } from "@/interfaces";

const CardItem: React.FC<{ item: CardProps }> = ({ item }) => {
  return (
    <div className="p-4 border rounded shadow bg-purple-400">
      <h2 className="text-xl font-bold mb-2">{item.title}</h2>
      <p className="text-gray-700">{item.content}</p>
    </div>
  );
};

const CardList: React.FC<{ posts: CardProps[] }> = ({ posts }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-8">
    {posts.map((item, index) => (
      <CardItem key={index} item={item} />
    ))}
  </div>
);

const Card: React.FC<{ posts: CardProps[] }> = ({ posts }) => (
  <div className="min-h-screen">
    <div className="py-8">
      <CardList posts={posts} />
    </div>
  </div>
);

export default Card;
