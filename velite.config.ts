import { defineCollection, defineConfig, s } from 'velite';
import rehypeSlug from 'rehype-slug';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

const computedFields = <T extends { slug: string }>(data: T) => ({
  ...data,
  slugAsParams: data.slug.split('/').slice(1).join('/'),
});

const posts = defineCollection({
  name: 'Post',
  pattern: 'blog/**/*.mdx',
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(99),
      description: s.string().max(999).optional(),
      created: s.isodate(),
      updated: s.isodate().optional(),
      published: s.boolean().default(false),
      tags: s.array(s.string()).optional(),
      content: s.mdx(),
      metadata: s.metadata(),
    })
    .transform(computedFields),
});
const projects = defineCollection({
  name: 'Project',
  pattern: 'projects/**/*.mdx',
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(99),
      description: s.string().max(999).optional(),
      created: s.isodate(),
      updated: s.isodate().optional(),
      published: s.boolean().default(false),
      source: s.string().optional(),
      logo: s.image().optional(),
      content: s.mdx(),
      tags: s.array(s.string()).optional(),
    })
    .transform(computedFields),
});

export default defineConfig({
  root: 'data',
  output: {
    data: '.velite',
    assets: 'public/static',
    base: '/static/',
    name: '[name]-[hash:6].[ext]',
    clean: true,
  },
  collections: { posts, projects },
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [rehypePrettyCode, { theme: 'github-dark-dimmed' }],
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'wrap',
          properties: {
            className: ['subheading-anchor'],
            ariaLabel: 'Link to section',
          },
        },
      ],
    ],
  },
});
