import { h } from 'preact';
import { Link } from 'preact-router/match';

const links = [
	{ name: 'Home', href: '/' },
	{ name: 'New Post', href: '/new' },
	{ name: 'Settings', href: '/settings' },
	{ name: 'Sign in', href: '/login' },
	{ name: 'Sign up', href: '/register' }
];

const Header = props => (
	<nav class="navbar navbar-light">
		<div class="container">
			<Link href="/" class="navbar-brand">conduit</Link>
			<ul class="nav navbar-nav pull-xs-right">
				{links.map(({ name, href }) => (
					<li class="nav-item">
						<Link activeClassName="active" class="nav-link" href={href}>
							{name}
						</Link>
					</li>
				))}
			</ul>
		</div>
	</nav>
);

export default Header;
