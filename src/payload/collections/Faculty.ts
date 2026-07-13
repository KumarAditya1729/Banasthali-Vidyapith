import type { CollectionConfig } from 'payload';

export const Faculty: CollectionConfig = {
  slug: 'faculty',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true, // Publicly readable
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'designation',
      type: 'text',
      required: true,
    },
    {
      name: 'department',
      type: 'relationship',
      relationTo: 'departments',
      required: true,
    },
    {
      name: 'researchInterests',
      type: 'array',
      fields: [
        {
          name: 'topic',
          type: 'text',
        }
      ]
    },
    {
      name: 'publications',
      type: 'number',
      label: 'Number of Publications',
    }
  ],
};
