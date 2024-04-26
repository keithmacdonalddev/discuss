npm install --save-exact @nextui-org/react@2.2.9 framer-motion

edit tailwind.config.ts
    - import { nextui } from '@nextui-org/react';
    - add to content: './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    - darkMode: 'class', //add above plugins OBJ
    - plugins: [nextui()], //add nextui plugin

create a providers.tsx component in the app directory
    'use client';

    import { NextUIProvider } from '@nextui-org/react';

    interface ProvidersProps {
        children: React.ReactNode;
    }

    export default function Providers({ children }: ProvidersProps) {
        return <NextUIProvider>{children}</NextUIProvider>;
    }

edit layout.tsx
    import Providers from '@/app/providers';

    <Providers>{children}</Providers> //add to the layout body

remove all the globals.css //leave 3 lines
    @tailwind base;
    @tailwind components;
    @tailwind utilities;