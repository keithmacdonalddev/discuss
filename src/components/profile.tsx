'use client';

import { useSession } from 'next-auth/react';

const Profile = () => {
    const { data: session } = useSession();

    return (
        <div>
            {session?.user ? (
                <div>From Client: {JSON.stringify(session.user)}</div>
            ) : (
                <div>From Client: Not signed in</div>
            )}
        </div>
    );
};

export default Profile;
