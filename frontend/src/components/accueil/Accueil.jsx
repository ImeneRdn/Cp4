import React from "react";
import "./Accueil.css";

function Accueil() {
  const villes = [
    {
      id: 1,
      url: "https://www.hashtagvoyage.fr/wp-content/uploads/2019/07/seoul-palais-gyeongbokgung.jpg",
      titre: "Séoul",
      titre2: "La capitale de la Corée du Sud.",
      description: `Séoul, capitale de la Corée du Sud, est une ville fascinante qui
      allie harmonieusement l'ancien et le moderne. Avec plus de 2 000
      ans d'histoire, elle est imprégnée de patrimoine culturel, visible
      dans ses palais ancestraux et ses temples traditionnels tels que
      Gyeongbokgung et Changdeokgung. Cependant, Séoul est également un
      symbole de progrès technologique et de dynamisme urbain, avec ses
      gratte-ciel futuristes et son quartier ultramoderne de Gangnam. La
      vie nocturne trépidante, les festivals artistiques et les délices
      de la cuisine coréenne font de Séoul une expérience inoubliable
      pour les visiteurs. Grâce à son efficace système de transport en
      commun, il est facile de découvrir les parcs verdoyants et les
      espaces de détente, offrant un répit bienvenu de l'agitation de la
      vie urbaine. De plus, Séoul est un véritable paradis pour les
      amateurs de shopping, avec une variété de boutiques et de marchés
      pour satisfaire toutes les envies. En somme, Séoul est une ville
      étonnante qui continue de séduire les voyageurs avec son charme
      authentique et sa modernité captivante.`,
    },
    {
      id: 2,
      url: "https://www.voyageway.com/wp-content/uploads/2018/04/busan-coree-du-sud.jpg",
      titre: "Busan",
      titre2: "La deuxième plus grande ville de Corée du Sud.",
      description: `Busan, la deuxième plus grande ville de Corée du Sud, située sur la côte sud-est de la péninsule, est un véritable trésor à découvrir. Avec ses plages spectaculaires, ses falaises époustouflantes et ses vues panoramiques sur l'océan, Busan offre un charme côtier unique. En tant que port international prospère, la ville joue un rôle crucial dans l'économie du pays. Les marchés de poissons animés, tels que le célèbre marché de Jagalchi, offrent une expérience culinaire authentique avec une variété de fruits de mer frais à déguster. L'atmosphère sereine de ses temples bouddhistes, comme le temple Haedong Yonggungsa, contraste avec l'énergie dynamique des festivals culturels et du célèbre Festival international du film de Busan. La cuisine locale est un régal pour les papilles, mettant en valeur les délices des produits de la mer. Au-delà de la vie urbaine, Busan est entourée de montagnes verdoyantes et de parcs pittoresques, offrant des possibilités de randonnée et des panoramas à couper le souffle. En somme, Busan est une destination incontournable qui allie harmonieusement la beauté naturelle, la richesse culturelle et la modernité urbaine.`,
    },
    {
      id: 3,
      url: "https://www.souslecieldecoree.fr/wp-content/uploads/2021/04/incheon-coree-du-sud.jpg",
      titre: "Incheon",
      titre2: "Une ville portuaire importante en Corée du Sud.",
      description: `Incheon, une ville portuaire animée située à l'ouest de Séoul, en Corée du Sud, est un mélange captivant de modernité urbaine, d'histoire riche et de charme côtier. Célèbre pour son port international, Incheon est un important centre économique et commercial du pays. Sa proximité avec l'aéroport international d'Incheon en fait une porte d'entrée essentielle pour les voyageurs du monde entier. La ville est également réputée pour ses plages pittoresques, notamment la plage d'Eurwangni et la plage de Muui, où les visiteurs peuvent se détendre et profiter des vues sur la mer. L'île de Muuido offre des possibilités de randonnée, de vélo et de camping, tout en permettant d'échapper à l'agitation urbaine. Les visiteurs peuvent explorer l'histoire fascinante d'Incheon en visitant le site de débarquement d'Incheon, célèbre pour le débarquement réussi des forces alliées pendant la guerre de Corée. La gastronomie locale est également un point fort, avec une variété de plats savoureux, dont les fruits de mer frais sont les vedettes. Globalement, Incheon est une destination diversifiée qui offre une expérience unique entre modernité, histoire et beauté naturelle.`,
    },
  ];

  return (
    <div className="container-accueil">
      <h1>
        Bienvenue sur mon blog dédié <br />à la Corée du Sud et à ses
        magnifiques villes !
      </h1>
      <div className="card-container">
        {villes.map((ville) => (
          <div className="card" key={ville.id}>
            {" "}
            <br />
            <br />
            <br />
            <img src={ville.url} alt={ville.titre} />
            <h2>{ville.titre}</h2>
            <p>{ville.titre2}</p>
            <p className="justify">{ville.description}</p> <br />
            <h3>
              Vos Avis nous intéresse, n'hésitez pas à laisser votre avis ⬇️ :
            </h3>
            <textarea
              id="story"
              name="story"
              rows="5"
              cols="33"
              placeholder="Votre avis sur .."
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accueil;
