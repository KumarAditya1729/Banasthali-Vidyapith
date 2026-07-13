import type { CollectionConfig } from 'payload';

export const Departments: CollectionConfig = {
  slug: 'departments',
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
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'establishedYear',
      type: 'number',
    },
    {
      name: 'hod',
      type: 'relationship',
      relationTo: 'faculty',
      label: 'Head of Department',
    }
  ],
};
