import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import pb from '$lib/pb';

export const load: PageLoad = async ({ params }) => {
	const post = await pb.collection('posts').getOne(params.id);

    const media = post.media.map((element: string) => {
       return pb.files.getURL(post, element);
    });

	if (post.body) {
		return { body: post.body, media: media };
	}

	error(404, 'Not found');
};
