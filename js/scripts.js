const clubs = [
  { name: "ADO Den Haag" },
  { name: "AFC Ajax" },
  { name: "AZ" },
  { name: "Emmen" },
  { name: "Feyenoord" },
  { name: "Fortuna Sittard" },
  { name: "FC Groningen" },
  { name: "sc Heerenveen" },
  { name: "Heracles Almelo" },
  { name: "PEC Zwolle" },
  { name: "PSV Eindhoven" },
  { name: "RKC Waalwijk" },
  { name: "Sparta Rotterdam" },
  { name: "FC Twente" },
  { name: "FC Utrecht" },
  { name: "Vitesse" },
  { name: "VVV Venlo" },
  { name: "Willem II" }
]

document.body.onload = function() {
  clubs.forEach(function(club) {
    document.write(club.name);
  });
}
