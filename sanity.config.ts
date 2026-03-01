import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { presentationTool } from 'sanity/presentation'
import { schemaTypes } from './src/schemaTypes'

// Use the environment variables with fallbacks to the provided IDs
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '6q4egwp8'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export default defineConfig({
    basePath: '/studio', // <-- important! This is where the studio mounts
    projectId,
    dataset,

    // Add and edit the content schema in the './schemaTypes' folder
    schema: {
        types: schemaTypes,
    },

    plugins: [
        structureTool(),
        // Vision lets you query your content with GROQ in the studio
        // https://www.sanity.io/docs/the-vision-plugin
        visionTool({ defaultApiVersion: '2024-02-23' }),
        presentationTool({
            previewUrl: {
                draftMode: {
                    enable: '/api/draft-mode/enable',
                },
            },
        }),
    ],
})
