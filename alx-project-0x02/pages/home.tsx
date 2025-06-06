import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import { CardProps } from "@/interfaces";
import { useState } from "react";

const Home: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [posts, setPosts] = useState<CardProps[]>([]);

  const handleAddPost = (newPost: CardProps) => {
    setPosts((prevPosts) => [
      ...prevPosts,
      { ...newPost, id: prevPosts.length + 1 },
    ]);
  };

  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">
          Welcome to Amanda&apos;s World
        </h1>
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">Post Content</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-blue-700 px-4 py-2 rounded-full text-white border border-red"
          >
            Add Post
          </button>
        </div>
        <Card posts={posts} />
      </main>
      {isModalOpen && (
        <PostModal
          onClose={() => setModalOpen(false)}
          onSubmit={handleAddPost}
        />
      )}
    </div>
  );
};

export default Home;
