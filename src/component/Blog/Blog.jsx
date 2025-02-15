import { useState } from "react";

const blogPosts = [
    {
        id: 1,
        title: "Noster tincidunt reprimique ad pro",
        date: "February 19, 2021",
        description: "Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.",
        image: "https://source.unsplash.com/random/480x360"
    },
    {
        id: 2,
        title: "In usu laoreet repudiare legendos",
        date: "January 21, 2021",
        description: "Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto.",
        image: "https://source.unsplash.com/random/480x360?1"
    },
    {
        id: 3,
        title: "In usu laoreet repudiare legendos",
        date: "January 22, 2021",
        description: "Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto.",
        image: "https://source.unsplash.com/random/480x360?2"
    },
    {
        id: 4,
        title: "In usu laoreet repudiare legendos",
        date: "January 23, 2021",
        description: "Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto.",
        image: "https://source.unsplash.com/random/480x360?3"
    },
    {
        id: 5,
        title: "In usu laoreet repudiare legendos",
        date: "January 23, 2021",
        description: "Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto.",
        image: "https://source.unsplash.com/random/480x360?4"
    },
    {
        id: 6,
        title: "In usu laoreet repudiare legendos",
        date: "January 23, 2021",
        description: "Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto.",
        image: "https://source.unsplash.com/random/480x360?5"
    },
];

const Blog = () => {
    const [visiblePosts, setVisiblePosts] = useState(4);
    const loadMore = () => {
        setVisiblePosts((prev) => Math.min(prev + 3, blogPosts.length));
    };

    return (
        <section className="dark:text-gray-800">
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                <a href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
                    <img src={blogPosts[0].image} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                    <div className="p-6 space-y-2 lg:col-span-5">
                        <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{blogPosts[0].title}</h3>
                        <span className="text-xs dark:text-gray-600">{blogPosts[0].date}</span>
                        <p>{blogPosts[0].description}</p>
                    </div>
                </a>
                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {blogPosts.slice(1, visiblePosts).map(post => (
                        <a key={post.id} href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
                            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={post.image} />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{post.title}</h3>
                                <span className="text-xs dark:text-gray-600">{post.date}</span>
                                <p>{post.description}</p>
                            </div>
                        </a>
                    ))}
                </div>
                {visiblePosts < blogPosts.length && (
                    <div className="flex justify-center">
                        <button onClick={loadMore} className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-50 dark:text-gray-600">Load more posts...</button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Blog;
