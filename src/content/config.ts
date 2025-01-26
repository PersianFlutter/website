import { z, defineCollection, reference } from 'astro:content';

const metadataDefinition = () =>
  z
    .object({
      title: z.string().optional(),
      ignoreTitleTemplate: z.boolean().optional(),

      canonical: z.string().url().optional(),

      robots: z
        .object({
          index: z.boolean().optional(),
          follow: z.boolean().optional(),
        })
        .optional(),

      description: z.string().optional(),

      openGraph: z
        .object({
          url: z.string().optional(),
          siteName: z.string().optional(),
          images: z
            .array(
              z.object({
                url: z.string(),
                width: z.number().optional(),
                height: z.number().optional(),
              })
            )
            .optional(),
          locale: z.string().optional(),
          type: z.string().optional(),
        })
        .optional(),

      twitter: z
        .object({
          handle: z.string().optional(),
          site: z.string().optional(),
          cardType: z.string().optional(),
        })
        .optional(),
    })
    .optional();

const topicCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().max(160, { message: 'Description must be 160 characters or less' }),
    tags: z.array(z.string()).optional(),
    metadata: metadataDefinition(),
  }),
});

const memberCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string().min(1, { message: 'Name is required' }),
    family: z.string().min(1, { message: 'Family name is required' }),
    title: z.string().min(1, { message: 'Title is required' }),
    image: z.string().min(1, { message: 'Image path is required' }),
    description: z
      .string()
      .min(10, { message: 'Description must be at least 10 characters' })
      .max(500, { message: 'Description must not exceed 500 characters' }),
    topics: z.array(reference('topic')).min(1, { message: 'Member must have at least one topic' }),
    social: z
      .object({
        twitter: z.string().url().optional(),
        linkedin: z.string().url().optional(),
        github: z.string().url().optional(),
        instagram: z.string().url().optional(),
        website: z.string().url().optional(),
      })
      .optional(),
    metadata: metadataDefinition(),
  }),
});

export const collections = {
  topic: topicCollection,
  member: memberCollection,
};
