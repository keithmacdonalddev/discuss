'use server';

import { z } from 'zod';
import { db } from '@/db';
import paths from '@/paths';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import type { Topic } from '@prisma/client';
import { revalidatePath } from 'next/cache';

interface CreateTopicFormState {
    errors: {
        name?: string[];
        description?: string[];
        _form?: string[];
    };
}

const createTopicSchema = z.object({
    name: z
        .string()
        .min(3)
        .regex(/^[a-z-]+$/, {
            message: 'Name must be lowercase letter with dashes without spaces',
        }),
    description: z.string().min(10),
});

export async function createTopic(
    formState: CreateTopicFormState,
    formData: FormData
): Promise<CreateTopicFormState> {
    const result = createTopicSchema.safeParse({
        name: formData.get('name') as string,
        description: formData.get('description') as string,
    });

    if (!result.success) {
        return {
            errors: result.error.flatten().fieldErrors,
        };
    }

    const session = await auth();
    if (!session || !session.user) {
        return {
            errors: {
                _form: ['You must be logged in to create a topic'],
            },
        };
    }

    let topic: Topic;
    try {
        topic = await db.topic.create({
            data: {
                slug: result.data.name,
                description: result.data.description,
            },
        });
    } catch (err: unknown) {
        if (err instanceof Error) {
            return {
                errors: {
                    _form: [err.message],
                },
            };
        } else {
            return {
                errors: {
                    _form: ['An unknown error occurred'],
                },
            };
        }
    }

    revalidatePath('/');
    redirect(paths.showTopic(topic.slug));
}
