import PocketBase from 'pocketbase';

import { POCKETBASE_URL } from '$env/dynamic/public';

const pb = new PocketBase(POCKETBASE_URL);

export default pb;
