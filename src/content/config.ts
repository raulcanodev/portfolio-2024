import { defineCollection, z } from "astro:content";
const blogCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		pubDate: z.date(),
		author: z.string(),
		image: z.string(),
		emoji: z.string(),
		tags: z.array(z.string()),
		category: z.string(),
		summary: z.string(),
	}),
});

export default blogCollection;
