import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { site } from '../consts';

const {title, description} = site

export async function GET(context) {
	const posts = await getCollection('blog');
	return rss({
		title,
		description,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/blog/${post.slug}/`,
		})),
	});
}
