import MDXContent from '@/components/mdx-content';
import { getPostBySLug, getPosts } from '@/lib/posts';
import { formatDate } from '@/lib/utils';
import { ArrowLeftIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';

export async function generateStaticParams() {
    const posts = await getPosts()
    const slugs = posts.map(post => ({slug : post.slug}))

    return slugs
}




export default async function Post({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const post = await getPostBySLug(slug);

    if (!post) {
        notFound();
    }

    const { metadata, content } = post;
    const { title, image, author, publishedAt } = metadata;

    if (typeof content !== 'string') {
        throw new Error('Content is not a string');
    }

    return (
        <section className="pb-24 pt-32 max-w-4xl mx-auto">
            <div className="container">
                <Link href={'/posts'} className="mb-8 inline-flex items-center gap-2 text-sm font-light">
                    <ArrowLeftIcon className="w-5 h-5" />
                    <span>Back to posts</span>
                </Link>

                {image && (
                    <div className="relative mb-6 h-96 w-full overflow-hidden rounded-lg">
                        <Image
                            src={'/posts/m.jpg'}
                            alt={''} // Adicione um alt significativo para acessibilidade
                            className="object-cover"
                            fill
                        />
                    </div>
                )}

                <header>
                    <h1 className="title">{title}</h1>
                    <p className="mt-3 text-xs text-muted-foreground">
                        {author} / {formatDate(publishedAt ?? '')}
                    </p>
                </header>

                <main className="prose dark:prose-invert mt-16">
                    <MDXContent source={content}/>
                </main>
            </div>
        </section>
    );
}
