import {getPosts} from '@/lib/posts'
import Posts from '@/components/posts'

export default async function PostPage() {
  const posts = await getPosts();

  return (
    <section className="py-40">
      <div className="container max-w-4xl">
        <p className='title mb-12'> Os posts são anotações dos meus estudos tiradas do Obsidian.</p>
        <h1 className="title mb-12"> Posts </h1>

        <Posts posts={posts} />
      </div>
    </section>
  )
}
