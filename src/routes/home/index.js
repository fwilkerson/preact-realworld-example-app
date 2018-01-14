import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

import ArticlePreview from '../../components/article-preview';
import dataService from '../../services';

export default class Home extends Component {
	state = { articles: [], tags: [] }

	getArticlesByTag = tag => e => {
		dataService.getArticlesBy({ tag, limit: 5 })
			.then(data => this.setState({ articles: data.articles }));
	}

	componentDidMount() {
		dataService.get('/tags').then(data => this.setState({ tags: data.tags }));

		dataService.getArticlesBy({ limit: 5 })
			.then(data => this.setState({ articles: data.articles }));
	}

	renderFeedToggle = (props, state) => (
		<div class="feed-toggle">
			<ul class="nav nav-pills outline-active">
				<li class="nav-item">
					<a class="nav-link disabled">Your Feed</a>
				</li>
				<li class="nav-item">
					<a class="nav-link active">Global Feed</a>
				</li>
			</ul>
		</div>
	);

	renderSideBar = (props, { tags }) => (
		<div class="sidebar">
			<p>Popular Tags</p>

			<div class="tag-list">
				{tags.map(tag => <Link onClick={this.getArticlesByTag(tag)} class="tag-pill tag-default" href="/">{tag}</Link>)}
			</div>
		</div>
	);

	render(props, state) {
		return (
			<div class="home-page">
				<div class="banner">
					<div class="container">
						<h1 class="logo-font">conduit</h1>
						<p>A place to share your knowledge.</p>
					</div>
				</div>
	
				<div class="container page">
					<div class="row">
						<div class="col-md-9">
							{this.renderFeedToggle(props, state)}
							{state.articles.map(article => <ArticlePreview {...article} />)}
						</div>
						<div class="col-md-3">
							{this.renderSideBar(props, state)}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
