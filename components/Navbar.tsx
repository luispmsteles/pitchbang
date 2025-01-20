import { auth } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import { SignIn } from "./SignInButton";
import { SignOut } from "./SignOutButton";

const Navbar = async () => {
    const session = await auth();
    // const login = () => signIn('github');

    return (
        <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
            <nav className="flex justify-between items-center">
                <Link href="/">
                    <Image src="/logo.png" alt="logo" width={144} height={30} />
                </Link>

                <div className="flex items-center gap-5 text-black">
                    {session && session?.user ? (
                        <>
                            <Link href="/startup/create">
                                <span>Create</span>
                            </Link>
                            <SignOut />
                            <Link href={`/user/${session?.id}`}>
                                <span>{session?.user?.name}</span>
                            </Link>
                        </>
                    ) : (
                        <SignIn />
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
