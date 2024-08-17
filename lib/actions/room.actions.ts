'use server'

import { revalidatePath } from 'next/cache';
import { liveblocks } from '../live-blocks';
import { nanoid } from 'nanoid';
import { parseStringify } from '../utils';

export const createDocument = async ({ userId, email }: CreateDocumentParams) => {
    const roomid = nanoid();

    try {
        const metadata = {
            creatorId: userId,
            email,
            title: 'Untitled'
        }

        const usersAccesses: RoomAccesses = {
            [email]: ['room:write']
        }

        const room = await liveblocks.createRoom(roomid, {
            metadata,
            usersAccesses,
            defaultAccesses: []
        });

        revalidatePath('/')

        return parseStringify(room);
    } catch (error) {
        console.log(`Error happened while creating a room: ${error}`)
    }
}