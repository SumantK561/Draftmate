'use client'

import { RoomProvider, ClientSideSuspense } from '@liveblocks/react/suspense'
import Loader from './Loader'
import Header from '@/components/Header'
import { Editor } from '@/components/editor/Editor'
import { SignedIn,SignedOut,UserButton,SignInButton } from '@clerk/nextjs'

const CollaborativeRoom = () => {
    return (
        <RoomProvider id="my-room">
            <ClientSideSuspense fallback={<Loader />}>
                <div className='collaborative-room'>
                    <Header>
                        <div className="flex w-fit items-center justify-center gap-2">
                            <p className="documet-title">Share</p>
                        </div>
                        <SignedOut>
                            <SignInButton />
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </Header>
                    <Editor />
                </div>
            </ClientSideSuspense>
        </RoomProvider>
    )
}

export default CollaborativeRoom