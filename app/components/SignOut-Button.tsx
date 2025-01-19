import { signOut } from "@/auth";

export function SignOut() {
    return (
        <form
            action={async () => {
                "use server";
                await signOut();
            }}
        >
            <button type="submit">
                <span>Logout</span>
            </button>
        </form>
    );
}
