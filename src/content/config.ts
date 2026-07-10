import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    tags: z.array(z.string()),
    tech: z.array(z.string()).default([]),
    status: z.string().default('進行中'),
    expertise: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    link: z.string().optional(),
    image: z.string().optional(),
  }),
});

const awards = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    kind: z.enum(['Award', 'News', 'Event', 'Publication']),
    summary: z.string(),
    link: z.string().optional(),
    image: z.string().optional(),
    placeholder: z.boolean().default(false),
  }),
});

const experience = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    org: z.string(),
    period: z.string(),
    category: z.enum(['教育', '工作', '顧問', '教學', '研究', '創業']),
    summary: z.string(),
    order: z.number().default(99),
    placeholder: z.boolean().default(false),
  }),
});

export const collections = { projects, awards, experience };
