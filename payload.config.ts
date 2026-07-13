import { sqliteAdapter } from '@payloadcms/db-sqlite';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import path from 'path';
import { buildConfig } from 'payload';
import { fileURLToPath } from 'url';

import { Users } from './src/payload/collections/Users';
import { Faculty } from './src/payload/collections/Faculty';
import { Departments } from './src/payload/collections/Departments';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Faculty, Departments],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || 'super-secret-key-for-local-dev-only',
  db: sqliteAdapter({
    client: {
      url: 'file:./payload.db',
    },
  }),
});
