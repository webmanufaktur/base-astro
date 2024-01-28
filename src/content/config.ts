import { z, reference, defineCollection } from 'astro:content'

const posts = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      seotitle: z.string(),
      seorobots: z.string(),
      seodescription: z
        .string()
        .max(160, 'For best SEO results, please keep the description under 160 characters.'),
      headline: z.string(),
      subline: z.string().optional(),
      image: image().optional(),
    }),
})

export const collections = { posts }
