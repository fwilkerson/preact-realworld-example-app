import { h } from 'preact';
import { Link } from 'preact-router/match';

const ArticleMeta = ({ createdAt, favoritesCount, image, username }) => (
	<div class="article-meta">
		<Link href={`/@${username}`}>
			<img src={image} />
		</Link>
		<div class="info">
			<Link href={`/@${username}`} class="author">
				{username}
			</Link>
			<span class="date">{createdAt}</span>
		</div>
		<button class="btn btn-sm btn-outline-secondary">
			<i class="ion-plus-round" />
      &nbsp; Follow&nbsp;{username}
		</button>
    &nbsp;&nbsp;
		<button class="btn btn-sm btn-outline-primary">
			<i class="ion-heart" />&nbsp; Favorite Post&nbsp;
			<span class="counter">({favoritesCount})</span>
		</button>
	</div>
);

export default ArticleMeta;