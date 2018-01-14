import { h } from 'preact';

const CommentForm = props => (
	<form class="card comment-form">
		<div class="card-block">
			<textarea
				class="form-control"
				placeholder="Write a comment..."
				rows="3"
			/>
		</div>
		<div class="card-footer">
			<img src="http://i.imgur.com/Qr71crq.jpg" class="comment-author-img" />
			<button class="btn btn-sm btn-primary">Post Comment</button>
		</div>
	</form>
);

export default CommentForm;