import pb from '$lib/pb';
import type { PageLoad } from './$types';

export const load: PageLoad = () => {

	const posts = pb.collection('posts').getList();
    
	return {
		posts
	};
};