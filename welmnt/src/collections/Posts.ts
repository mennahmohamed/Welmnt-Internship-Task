import { CollectionConfig, CollectionSlug } from 'payload';

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'body',
      type: 'richText',
      required: true,
    },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'publishDate',
      type: 'date',
      required: true,
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'authors' as CollectionSlug,
    },
  ],
  access: {
    read: () => true,
  },
};

export default Posts;
