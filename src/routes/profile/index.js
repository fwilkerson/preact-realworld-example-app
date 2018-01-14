import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

import ArticlePreview from '../../components/article-preview';
import dataService from '../../services';

export default class Profile extends Component {
	state = { articles: [], bio: '', image: '', username: '' }

	fetchArticles = (username, url) => {
		const query = url.includes('/favorites')
			? { favorited: username }
			: { author: username };

		dataService.getArticlesBy(query)
			.then(data => this.setState({ articles: data.articles }));
	}

	componentDidMount() {
		const username = this.props.username.slice(1);

		dataService.get(`/profiles/${username}`)
			.then(data => this.setState(data.profile));

		this.fetchArticles(username, this.props.url);
	}

	componentWillReceiveProps(next) {
		if (this.props.url !== next.url) {
			this.fetchArticles(next.username.slice(1), next.url);
		}
	}

	renderArticleToggles = (props, state) => (
		<div class="articles-toggle">
			<ul class="nav nav-pills outline-active">
				<li class="nav-item">
					<Link href={`/${props.username}`} activeClassName="active" class="nav-link">My Articles</Link>
				</li>
				<li class="nav-item">
					<Link href={`/${props.username}/favorites`} activeClassName="active" class="nav-link">Favorited Articles</Link>
				</li>
			</ul>
		</div>
	);
	
	render(props, state) {
		return (
			<div class="profile-page">
				<div class="user-info">
					<div class="container">
						<div class="row">
							<div class="col-xs-12 col-md-10 offset-md-1">
								<img src={state.image} class="user-img" />
								<h4>{state.username}</h4>
								<p>{state.bio}</p>
								<button class="btn btn-sm btn-outline-secondary action-btn">
									<i class="ion-plus-round" />
									&nbsp; Follow&nbsp;{state.username}
								</button>
							</div>
						</div>
					</div>
				</div>
				<div class="container">
					<div class="row">
						<div class="col-xs-12 col-md-10 offset-md-1">
							{this.renderArticleToggles(props, state)}
							{state.articles.map(article => <ArticlePreview {...article} />)}
							{state.articles.length === 0 && <div class="article-preview">No articles are here... yet.</div>}
						</div>
					</div>
				</div>
			</div>
		);
	}
}