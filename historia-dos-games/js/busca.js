// Lista de consoles usada pela busca. Para adicionar um console, copie uma linha.
const consoles = [
  { nome: "PlayStation (PS1)", marca: "Sony PlayStation", ano: 1994, pagina: "ps1.html", jogos: "Final Fantasy VII, Metal Gear Solid, Resident Evil, Crash Bandicoot" },
  { nome: "Sega Saturn", marca: "Sega", ano: 1994, pagina: "ps1.html", jogos: "Nights into Dreams, Virtua Fighter 2, Panzer Dragoon" },
  { nome: "Nintendo 64", marca: "Nintendo", ano: 1996, pagina: "ps1.html", jogos: "Super Mario 64, Ocarina of Time, GoldenEye 007" },
  { nome: "PlayStation 2", marca: "Sony PlayStation", ano: 2000, pagina: "ps2.html", jogos: "GTA San Andreas, Shadow of the Colossus, God of War, Kingdom Hearts" },
  { nome: "Xbox", marca: "Microsoft Xbox", ano: 2001, pagina: "ps2.html", jogos: "Halo: Combat Evolved, Knights of the Old Republic, Fable" },
  { nome: "Xbox 360", marca: "Microsoft Xbox", ano: 2005, pagina: "ps3-360.html", jogos: "Halo 3, Gears of War, Red Dead Redemption" },
  { nome: "PlayStation 3", marca: "Sony PlayStation", ano: 2006, pagina: "ps3-360.html", jogos: "The Last of Us, Uncharted 2, Metal Gear Solid 4" },
  { nome: "Nintendo Wii", marca: "Nintendo", ano: 2006, pagina: "ps3-360.html", jogos: "Wii Sports, Mario Kart Wii, Smash Bros. Brawl" },
  { nome: "PlayStation 4", marca: "Sony PlayStation", ano: 2013, pagina: "ps4.html", jogos: "God of War, Bloodborne, Spider-Man" },
  { nome: "Xbox One", marca: "Microsoft Xbox", ano: 2013, pagina: "ps4.html", jogos: "Forza Horizon 4, Halo 5, Gears 5" },
  { nome: "PlayStation 5", marca: "Sony PlayStation", ano: 2020, pagina: "atual.html", jogos: "Astro Bot, God of War Ragnarök, Returnal" },
  { nome: "Xbox Series X|S", marca: "Microsoft Xbox", ano: 2020, pagina: "atual.html", jogos: "Forza Horizon 5, Starfield, Halo Infinite" },
  { nome: "Nintendo Switch 2", marca: "Nintendo", ano: 2025, pagina: "atual.html", jogos: "Mario Kart World, Donkey Kong Bananza" }
];

// Deixa tudo minúsculo e sem acento, para "ragnarok" achar "Ragnarök"
function normalizar(texto) {
  return texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

const campo = document.getElementById("campo-busca");
const lista = document.getElementById("resultados");

campo.addEventListener("input", function () {
  const busca = normalizar(campo.value.trim());
  lista.innerHTML = "";
  if (busca === "") return;

  const achados = consoles.filter(function (c) {
    return normalizar(c.nome + " " + c.marca + " " + c.ano + " " + c.jogos).includes(busca);
  });

  if (achados.length === 0) {
    const vazio = document.createElement("li");
    vazio.textContent = "Nada encontrado. Tente outro nome, como playstation ou xbox.";
    lista.appendChild(vazio);
    return;
  }

  achados.forEach(function (c) {
    const item = document.createElement("li");
    const link = document.createElement("a");
    link.href = c.pagina;
    link.textContent = c.nome + " (" + c.ano + ")";
    const detalhe = document.createElement("small");
    detalhe.textContent = c.jogos;
    link.appendChild(detalhe);
    item.appendChild(link);
    lista.appendChild(item);
  });
});
