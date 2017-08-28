showTeams();

function showTeams() {

  // json object to store team data
  var teams = [{
    "id": "1",
    "name": "England",
    "code": "ENG",
    "best": "Best: Semi-finals 1968, 1996",
    "matches": [{
      "match_number": "1",
      "match_date": "11 June",
      "opponent_code": "RUS",
      "opponent_name": "Russia",
      "venue": "Marseille"
    }, {
      "match_number": "2",
      "match_date": "16 June",
      "opponent_code": "WAL",
      "opponent_name": "Wales",
      "venue": "Lens"
    }, {
      "match_number": "3",
      "match_date": "20 June",
      "opponent_code": "SVK",
      "opponent_name": "Slovakia",
      "venue": "Saint-Etienne"
    }]
  }, {
    "id": "2",
    "name": "Russia",
    "code": "RUS",
    "best": "Best: Winners 1960",
    "matches": [{
      "match_number": "1",
      "match_date": "11 June",
      "opponent_code": "ENG",
      "opponent_name": "England",
      "venue": "Marseille"
    }, {
      "match_number": "2",
      "match_date": "15 June",
      "opponent_code": "SVK",
      "opponent_name": "Slovakia",
      "venue": "Lille"
    }, {
      "match_number": "3",
      "match_date": "20 June",
      "opponent_code": "WAL",
      "opponent_name": "Wales",
      "venue": "Toulouse"
    }]
  }, {
    "id": "3",
    "name": "Slovakia",
    "code": "SVK",
    "best": "Best: None",
    "matches": [{
      "match_number": "1",
      "match_date": "11 June",
      "opponent_code": "WAL",
      "opponent_name": "Wales",
      "venue": "Bordeaux"
    }, {
      "match_number": "2",
      "match_date": "15 June",
      "opponent_code": "RUS",
      "opponent_name": "Russia",
      "venue": "Lille"
    }, {
      "match_number": "3",
      "match_date": "20 June",
      "opponent_code": "ENG",
      "opponent_name": "England",
      "venue": "Saint-Etienne"
    }]
  }, {
    "id": "4",
    "name": "Wales",
    "code": "WAL",
    "best": "Best: None",
    "matches": [{
      "match_number": "1",
      "match_date": "11 June",
      "opponent_code": "SVK",
      "opponent_name": "Slovakia",
      "venue": "Bordeaux"
    }, {
      "match_number": "2",
      "match_date": "16 June",
      "opponent_code": "ENG",
      "opponent_name": "England",
      "venue": "Lens"
    }, {
      "match_number": "3",
      "match_date": "20 June",
      "opponent_code": "RUS",
      "opponent_name": "Russia",
      "venue": "Toulouse"
    }]
  }];

  var menuHtml = '';
  teams.map(function(team) { // map over each team's data to create menu
    menuHtml+= '<div class="row">';
    menuHtml+= '<div class="badge-menu">';
    menuHtml+= '<img class="menu-badge" id=' + team.code.toLowerCase() + ' src="https://res.cloudinary.com/dyqqt0ksz/image/upload/v1464326647/Euro2016/' + team.code + '.png"/><span class="menu-team-name">' + team.name + '</span>';
    menuHtml+= '</div>';
    menuHtml+= '</div>';
  });
  $('#teams-menu').html(menuHtml);

  var fixtureHtml = '';
  teams.map(function(team) { // map over each team's data to fill the title of each card
    fixtureHtml+= '<div class="team-card" id=' + team.code.toLowerCase() + '-card>';
    fixtureHtml+= '<div class="badge-and-name">';
    fixtureHtml+= '<img src="https://res.cloudinary.com/dyqqt0ksz/image/upload/v1464326647/Euro2016/' + team.code + '.png"/>';
    fixtureHtml+= '<div class="team-name">' + team.name + '</div>';
    fixtureHtml+= '<div class="best-finish">' + team.best + '</div>';
    fixtureHtml+= '</div>'; // end badge-and-name
    fixtureHtml+= '<div class="group-and-fixtures">';
    fixtureHtml+= '<div class="group-name">Group <span class="group-letter"><strong>B</strong></span></div>';
    fixtureHtml+= '<table class="table">';

    team.matches.map(function(match) { // then map over each team's matches sub-array to fill the table
        fixtureHtml+= '<tr>';
        fixtureHtml+= '<td class="match-date">' + match.match_date + '</td>';
        fixtureHtml+= '<td class="opponent-badge"><img src="https://res.cloudinary.com/dyqqt0ksz/image/upload/v1464326647/Euro2016/' + match.opponent_code.toLowerCase() + '.png"/></td>';
        fixtureHtml+= '<td class="opponent-name">' + match.opponent_name + '</td>';
        fixtureHtml+= '<td class="match-venue">' + match.venue + '</td>';
        fixtureHtml+= '</tr>';
      });

    fixtureHtml+= '</table>';
    fixtureHtml+= '</div>'; // end group-and-fixtures
    fixtureHtml+= '</div>'; // end team-card
  });
  $('#teams-card').html(fixtureHtml);

};

$(document).ready(function() {
  
  // fade in team names on mouse over
  $('.badge-menu').mouseenter(function() {
    $(this).find('span').fadeIn(500, 'linear');
  });
  // then fade out on mouse leave
  $('.badge-menu').mouseleave(function() {
    $(this).find('span').fadeOut(500, 'linear');
  });
  
  // click on badge action
  $('.menu-badge').click(function() {
    var id = $(this).attr('id') + '-card'; // get id of the badge clicked
    $('.team-card').not('#' + id).fadeOut(250, 'linear', function() { // fade out the current badge
      $('#' + id).fadeIn(250, 'linear').css('display', 'none'); // fade in the clicked team card and hide the others
    });
  });

});