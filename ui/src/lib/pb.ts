import PocketBase from 'pocketbase';

import { env } from '$env/dynamic/public';

const pb = new PocketBase(env.PUBLIC_POCKETBASE_URL || 'http://localhost:8090');

export default pb;
