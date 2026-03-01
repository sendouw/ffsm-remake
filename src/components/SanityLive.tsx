import { VisualEditing } from 'next-sanity/visual-editing'
import { draftMode } from 'next/headers'

export default async function SanityLive() {
    const { isEnabled } = await draftMode()

    // Ensure the token is available for Live Preview
    if (isEnabled) {
        return <VisualEditing />
    }

    return null
}
