// 0=air, 1=wall, TODO: 2=player
//
var level =
[
	[1,1,1,1,1,1,1,1,1,1,1,1],
	[1,0,0,0,0,0,0,1,0,0,0,1],
	[1,0,0,0,0,0,0,1,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,1,1,1,1,1],
	[1,0,0,0,0,0,0,1,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,1,0,0,0,1],
	[1,1,1,1,1,1,1,1,1,1,1,1]
];

var player = {x: 3, y: 5};



var Tile = React.createClass
({
	propTypes:
	{
		tile: React.PropTypes.number.isRequired
	},

	render: function()
	{
		var className = 'Tile';

		switch(this.props.tile)
		{
			case 0:
				className = className + ' Tile-air';
			break;
			case 1:
				className = className + ' Tile-wall';
		}

		return (
			React.createElement('div', {className: className})
				// React.createElement('div', {className: 'Tile-air'})
			//)
		);
	}
});


var Level = React.createClass
({
	render: function()
	{
		var tileElements =
		this.props.level.map(function(row)
		{
			var tileRow = row.map(function(tile){ return React.createElement(Tile, {tile: tile}); });
			return React.createElement('div', {className: 'Level-row'}, tileRow);
		})

		return (
			React.createElement('div', {}, tileElements)
		);
	}
});


// var Application = react.createClass
// ({
//
// });

var testLevel =
[
	[1,1,1,1],
	[1,0,0,1],
	[1,1,1,1],
];
// ReactDOM.render(React.createElement(Tile, {tile: 1}), document.getElementById('react-app'));
ReactDOM.render(React.createElement(Level, {level: level}), document.getElementById('react-app'));











// EOF
