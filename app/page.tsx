import Intro from "@/components/intro";
import RecentPosts from "@/components/recentPosts";

export default function Home() {
  return (
   <section className="py-24">
      <div className="container max-w-4xl mx-auto">
      <Intro />
      <RecentPosts />
      </div>
   </section>
  );
}
