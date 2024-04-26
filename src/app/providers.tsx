'use client';

import { NextUIProvider } from '@nextui-org/react';

interface ProvidersProps {
    children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
    return <NextUIProvider>{children}</NextUIProvider>;
}

/** File Explanation:
 * NextUIProvider is a component that provides the theme and global styles for NextUI components.
 * The NextUIProvider component must wrap the children components in the application.
 * It is a context provider that shares the theme and global styles across all the NextUI components.
 *
 * There are many components in NextUI that require state to work correctly.
 * All state is coordinated across the application by React context.
 * NextUIProvider is the mechanism that is sharing the state across all the NextUI components we are using.
 *
 * Creating the Providers component is not enough. We have to add it to the layout.tsx file.
 * The layout.tsx file is the main layout component that wraps all the pages in the application.
 *
 * @param {React.ReactNode} children - The children components to be wrapped by the NextUIProvider component.
 * @returns {React.ReactNode} - The children components wrapped by the NextUIProvider component.
 *
 */
