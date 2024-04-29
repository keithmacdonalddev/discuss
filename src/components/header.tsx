// create a header component
import Link from 'next/link';
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Input,
    Button,
    Avatar,
} from '@nextui-org/react';
import { auth } from '@/auth';

export default async function Header() {
    const session = await auth(); /**
     * 
     */

    return (
        <Navbar className="shadow mb-6 bg-blue-500">
            {/* <div className="container mx-auto px-4 max-w-4xl"> */}
            <NavbarBrand className="bg-gray-400">
                <Link href="/" className="font-bold">
                    Discuss
                </Link>
            </NavbarBrand>
            <NavbarContent justify="center">
                <NavbarItem>
                    <Input placeholder="Search" />
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    {session?.user ? (
                        <div>Signed In</div>
                    ) : (
                        <div>Not Signed In</div>
                    )}
                </NavbarItem>
                <NavbarItem>
                    <Avatar src="/avatar.jpg" />
                </NavbarItem>
            </NavbarContent>
            {/* </div> */}
        </Navbar>
    );
}
