import StartupCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";

export default async function Home({
    searchParams,
}: {
    searchParams: Promise<{ query?: string }>;
}) {
    const query = (await searchParams).query;

    const posts = [
        {
            _createdAt: new Date(),
            views: 55,
            author: { _id: 1, name: "Jane Doe" },
            _id: 1,
            description: "This is a description",
            image: "https://img.freepik.com/free-vector/start-up-business-background_1268-1347.jpg?t=st=1737329727~exp=1737333327~hmac=1fa87ae0264f321bedf4b2786befb18ecf8fcbee48b630968dad3a3c403f1139&w=360",
            category: "Robots",
            title: "We Robots",
        },
    ];
    return (
        <>
            <section className="pink_container">
                <h1 className="heading">
                    Pitch your Startup <br /> Connect with Entrepeneus
                </h1>
                <p className="sub-heading !max-w-3xl">
                    Submit Ideas, Vote on Pitches and Get Noticed in Virtual
                    Competitions.
                </p>
                <SearchForm query={query} />
            </section>
            <section className="section_container">
                <p className="text-30-semibold">
                    {query ? `Search results for ${query}` : "All Startups"}
                </p>

                <ul className="mt-7 card_grid">
                    {posts?.length > 0 ? (
                        posts.map((post: StartupCardType) => (
                            <StartupCard key={post?._id} post={post} />
                        ))
                    ) : (
                        <p className="no-results">No startups found</p>
                    )}
                </ul>
            </section>
        </>
    );
}
