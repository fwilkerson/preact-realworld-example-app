import { h } from 'preact';
import { Link } from 'preact-router/match';

const ArticlePreview = ({ author, createdAt, description, favoritesCount, slug, tagList, title }) => (
	<div class="article-preview">
		<div class="article-meta">
			<Link href={`/@${author.username}`}>
				<img src={author.image} />
			</Link>
			<div class="info">
				<Link href={`/@${author.username}`} class="author">
					{author.username}
				</Link>
				<span class="date">{createdAt}</span>
			</div>
			<button class="btn btn-outline-primary btn-sm pull-xs-right">
				<i class="ion-heart" /> {favoritesCount}
			</button>
		</div>
		<Link href={`/article/${slug}`} class="preview-link">
			<h1>{title}</h1>
			<p>{description}</p>
			<span>Read more...</span>
			<ul class="tag-list">
				{tagList.map(tag => <li class="tag-default tag-pill tag-outline">{tag}</li>)}
			</ul>
		</Link>
	</div>
);

export default ArticlePreview;