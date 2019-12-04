import _ from 'lodash';

import teams from 'teams.js'

window.Dom = {}

Dom.div = function(opts)
{
  if (opts == null) opts = {};

  div = document.createElement('div');
  for (var [key, value] of opts) {
    div[key] = value
  }
  return div;
}

document.body.onload = function() {
  teams.forEach(function(team) {
    var teamDiv = Dom.div('team');

    const colorCount = team.colors.length;
    team.colors.forEach(function(color) {
      var colorDiv = Dom.div();
      colorDiv.style.height = `${Math.round(100 / colorCount)}%`
      colorDiv.style.backgroundColor = color;
      teamDiv.appendChild(colorDiv);
    });

    document.appendChild(teamDiv);
  });
}
