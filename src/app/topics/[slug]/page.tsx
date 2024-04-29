import PostCreateForm from '@/components/posts/post-create-form';

interface TopicShowPageProps {
    params: {
        slug: string;
    };
}

export default function TopicShowPage({ params }: TopicShowPageProps) {
    // This is the page for a specific topic.
    // It should display the topic's name and description,
    // and a list of posts that belong to that topic.
    const { slug } = params;

    //
    return (
        <div className="grid grid-cols-4 gap-4 p-4">
            <div className="col-span-3">
                <h1 className="text-2xl font-bold mb-2">{slug}</h1>
            </div>
            <div className="">
                <PostCreateForm slug={slug} />
            </div>
        </div>
    );
}
