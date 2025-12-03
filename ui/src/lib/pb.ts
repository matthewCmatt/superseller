import PocketBase from 'pocketbase';

import { POCKETBASE_URL } from '$env/dynamic/public';

const pb = new PocketBase('http://api.localhost');

export default pb;
