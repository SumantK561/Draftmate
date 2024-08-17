'use client'

import { RoomProvider, ClientSideSuspense } from '@liveblocks/react/suspense'
import Loader from './Loader'
import Header from '@/components/Header'
import { Editor } from '@/components/editor/Editor'
import { SignedIn, SignedOut, UserButton, SignInButton } from '@clerk/nextjs'
import ActiveCollaborators from './ActiveCollaborators'

const CollaborativeRoom = ({roomId, roomMetadata}: CollaborativeRoomProps) => {
    return (
        <RoomProvider id={roomId}>
            <ClientSideSuspense fallback={<Loader />}>
                <div className='collaborative-room'>
                    <Header>
                        <div className="flex w-fit items-center justify-center gap-2">
                            <p className="documet-title">Share</p>
                        </div>
                        <div className="flex w-full flex-1 justify-end gap-2 sm:gap-3">
                            <ActiveCollaborators />
                            <SignedOut>
                                <SignInButton />
                            </SignedOut>
                            <SignedIn>
                                <UserButton />
                            </SignedIn>
                        </div>
                    </Header>
                    <Editor />
                </div>
            </ClientSideSuspense>
        </RoomProvider>
    )
}

export default CollaborativeRoom