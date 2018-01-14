import { h, Component } from 'preact';
import marked from 'marked';

import ArticleMeta from '../../components/article-meta';
import Comment from '../../components/comment';
import CommentForm from '../../components/comment-form';
import dataService from '../../services';

export default class Article extends Component {
	state = {
		body: '',
		comments: [],
		createdAt: 0,
		favoritesCount: 0,
		image: '',
		title: '',
		username: ''
	}

	componentDidMount() {
		dataService.get(`/articles/${this.props.slug}`).then(data => {
			this.setState({
				...data.article.author,
				...data.article,
				body: marked(data.article.body)
			});
		});

		dataService
			.get(`/articles/${this.props.slug}/comments`)
			.then(data => this.setState({ comments: data.comments }));
	}

	render(props, state) {
		return (
			<div class="article-page">
				<div class="banner">
					<div class="container">
						<h1>{state.title}</h1>
	
						<ArticleMeta
							createdAt={state.createdAt}
							favoritesCount={state.favoritesCount}
							image={state.image}
							username={state.username}
						/>
					</div>
				</div>
	
				<div class="container page">
					<div class="row article-content">
						<div class="col-md-12">
							<div dangerouslySetInnerHTML={{ __html: state.body }} />
						</div>
					</div>
	
					<hr />
	
					<div class="article-actions">
						<ArticleMeta
							createdAt={state.createdAt}
							favoritesCount={state.favoritesCount}
							image={state.image}
							username={state.username}
						/>
					</div>
	
					<div class="row">
						<div class="col-xs-12 col-md-8 offset-md-2">
							<CommentForm />
							<p class="comment-authorization">
								<a>Sign in</a> or <a>sign up</a> to add comments on this article
							</p>
	
							{state.comments.map(({ author, body, createdAt }) => (
								<Comment
									body={body}
									createdAt={createdAt}
									image={author.image}
									username={author.username}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		);
	}
}