var contacts =
[
	{key: 1, name: "James K Nelson", email: "james@jamesknelson.com", description: "Front-end Unicorn"},
	{key: 2, name: "Jim", email: "jim@example.com"},
	{key: 3, name: "Joe"}
];


var ContactItem = React.createClass(
{
	propTypes:
	{
		name: React.PropTypes.string.isRequired,
		email: React.PropTypes.string.isRequired,
		description: React.PropTypes.string
	},

	render: function()
	{
		return (
			React.createElement('li', {},
				React.createElement('h2', {}, this.props.name),
				React.createElement('a', {href: 'mailto:' + this.props.email}, this.props.email),
				React.createElement('div', {}, this.props.description)
			)
		);
	}
});


var listElements = contacts
	.filter(function(contact){ return contact.email; })
	.map(function(contact){ return React.createElement(ContactItem, contact); });


var rootElement =
	React.createElement('div', {},
		React.createElement('h1', {}, "Contacts"),

		React.createElement('ul', {}, listElements)
		// React.createElement('ul', {},
		// 	React.createElement(ContactItem, {name: "Darth Vader", email: "vader@deathstar.com", description: "Lord Commander"})
		// )
	);

ReactDOM.render(rootElement, document.getElementById('react-app'));
