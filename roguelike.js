// ********
// DATA
// ********
// 0=air, 1=wall, TODO: 2=player
//
var level =
[
	[1,1,1,1,1,1,1,1,1,1,1,1],
	[1,0,0,0,0,0,0,1,0,0,0,1],
	[1,0,2,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,1,0,0,0,1],
	[1,0,0,0,0,0,0,1,1,1,1,1],
	[1,0,0,0,0,0,0,1,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,1,0,0,0,1],
	[1,1,1,1,1,1,1,1,1,1,1,1]
];

// var player = {x: 3, y: 5};
// ********


// ********
// COMPONENT: Tile
// ********
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
				break;
			case 2:
				className = className + ' Tile-player';
		}

		return (
			React.createElement('div', {className: className})
				// React.createElement('div', {className: 'Tile-air'})
			//)
		);
	}
});
// ********


// ********
// COMPONENT: Level
// ********
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
// ********


// ********
// COMPONENT: Application
// ********
var Application = React.createClass
({
	propTypes:
	{

	},

	render: function()
	{
		return (
			React.createElement('div', {className: 'Application', onKeyDown: this.handleKeyDown },
				React.createElement('h1', {className: 'Application-title'}, 'roguelike'),
				React.createElement(Level, {level: level})
			)
		);
	},


	componentDidMount: function()
	{
		// console.log(this);
	},

	handleKeyDown: function(e)
	{
		//console.log(_.cloneDeep(e));
		//alert(e);
		console.log('test');
	}

});
// ********


document.body.onkeydown = function(e)
{
	console.log(e.keyCode);


	//var loc;

	(function()
	{
		for(var i = 0; i < level.length; i++)
		{
			for(var j = 0; j < level[i].length; j++)
			{
				if(level[i][j] === 2)
				{
					//alert(i + ', ' + j);
				}
			}
		}
	})()
}


// ********
// EVENT
// ********
// var onKeyDown = function(event)
// {
// 	console.log(_.cloneDeep(e));
// 	alert(e);
// }
// ********


ReactDOM.render(React.createElement(Application, {level: level}), document.getElementById('react-app'));











// EOF
