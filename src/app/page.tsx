// Home Page
// @path /src/app/page.tsx

import { auth } from '@/auth';
import * as actions from '@/actions';
import { Button } from '@nextui-org/react';
import Profile from '@/components/profile';

export default async function Home() {
    const session = await auth();

    const { signIn, signOut } = actions;

    return (
        <div>
            <form action={signIn}>
                <Button type="submit">Sign In</Button>
            </form>
            <form action={signOut}>
                <Button type="submit">Sign Out</Button>
            </form>

            {session?.user ? (
                <div>{JSON.stringify(session.user)}</div>
            ) : (
                <div>Not signed in</div>
            )}

            <Profile />
        </div>
    );
}
