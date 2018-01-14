import { h } from 'preact';
import { Link } from 'preact-router/match';

const Comment = ({ body, createdAt, image, username }) => (
	<div class="card">
		<div class="card-block">
			<p class="card-text">{body}</p>
		</div>
		<div class="card-footer">
			<Link href={`/@${username}`} class="comment-author">
				<img src={image} class="comment-author-img" />
			</Link>
      &nbsp;&nbsp;
			<a href={`/@${username}`} class="comment-author">
				{username}
			</a>
			<span class="date-posted">{createdAt}</span>
			<span class="mod-options">
				<i class="ion-edit" />
				<i class="ion-trash-a" />
			</span>
		</div>
	</div>
);

export default Comment;