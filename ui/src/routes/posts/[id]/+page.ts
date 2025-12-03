import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import pb from '$lib/pb'

export const load: PageLoad = async ({ params }) => {
	const post = await pb.collection('posts').getOne(params.id);

    if (post.body) {
        return {body: post.body}
    }

	error(404, 'Not found');
};