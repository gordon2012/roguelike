// ********
// DATA
// ********
var contacts =
[
	{key: 1, name: "James K Nelson", email: "james@jamesknelson.com", description: "Front-end Unicorn"},
	{key: 2, name: "Jim", email: "jim@example.com"},
	{key: 3, name: "Joe"}
];

var newContact =
{
	name: "",
	email: "",
	description: ""
};
// ********


// ********
// COMPONENT: ContactItem
// ********
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
			React.createElement('li', {className: 'ContactItem'},
				React.createElement('h2', {className: 'ContactItem-name'}, this.props.name),
				React.createElement('a', {className: 'ContactItem-email', href: 'mailto:' + this.props.email}, this.props.email),
				React.createElement('div', {className: 'ContactItem-description'}, this.props.description)
			)
		);
	}
});
// ********


// ********
// COMPONENT: ContactForm
// ********
var ContactForm = React.createClass
({
	propTypes:
	{
		contact: React.PropTypes.object.isRequired
	},

	render: function()
	{
		return (
			React.createElement('form', {className: 'ContactForm'},
				React.createElement('input', {className: 'ContactForm-name', type: 'text', placeholder: "Name (required)", value: this.props.contact.name}),
				React.createElement('input', {className: 'ContactForm-email', type: 'email', placeholder: "Email", value: this.props.contact.email}),
				// React.createElement('br', {}),
				React.createElement('textarea', {className: 'ContactForm-description', placeholder: "Description", value: this.props.contact.description}),
				// React.createElement('br', {}),
				React.createElement('button', {className: 'ContactForm-submit', type: 'submit'}, 'Add Contact')
			)
		);
	}
});
// ********


// ********
// COMPONENT: ContactView
// ********
var ContactView = React.createClass
({
	propTypes:
	{
		contacts: React.PropTypes.array.isRequired,
		newContact: React.PropTypes.object.isRequired
	},

	render: function()
	{
		var contactListElements = this.props.contacts
		.filter(function(contact){ return contact.email; })
		.map(function(contact){ return React.createElement(ContactItem, contact); });

		return (
			React.createElement('div', {className: 'ContactView'},
				React.createElement('h1', {className: 'ContactView-title'}, "Contacts"),
				React.createElement('ul', {className: 'ContactView-list'}, contactListElements),
				React.createElement(ContactForm, {contact: this.props.newContact})
			)
		);
	}
});
// ********



var rootElement = React.createElement
(
	ContactView, {contacts: contacts, newContact: newContact}
);

ReactDOM.render(rootElement, document.getElementById('react-app'));
