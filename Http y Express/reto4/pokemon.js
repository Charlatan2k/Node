async function getPokemon(nombre) {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${nombre}`;

    let param = {
      headers: { "Content-Type": "application/json; charset=utf-8" },
      method: "GET",
    };
    const data = await fetch(url, param);
    if (!data.ok) {
      // El API devuelve un error. Lo manipulamos aquí.
      throw new Error(`HTTP error! status: ${data.status}`);
    }
    const response = await data.json();

    // Ajustar cada uno de los datos a su respectivo elemento

    // Convertir primera letra del nombre a mayus
    let name = response.name;
    name = name.charAt(0).toUpperCase() + name.slice(1);

    document
      .getElementById("pokemonImage")
      .setAttribute("src", response.sprites.front_default);

    document.getElementById("pokemonNameDetail").textContent = name;
    document.getElementById("pokemonHeight").textContent =
      response.height + "inch";
    document.getElementById("pokemonWeight").textContent =
      response.weight + "kg";

    // Haciendo un join de los nombres de las abilidades ya que es un array
    const abilities = response.abilities
      .map((ability) => ability.ability.name)
      .join(", ");
    document.getElementById("pokemonAbilities").textContent = abilities;

    // Mostrar la tabla
    document.getElementById("pokemonDetails").style.display = "table";
    document.getElementById("errorMessage").textContent = "";
    document.getElementById("errorMessage").style.display = "none";
    document.getElementById("errorMessage").style.visibility = "hidden";
  } catch (error) {
    if (error) {
      // Mostral el mensaje de error
      document.getElementById("errorMessage").textContent = "No encontrado";
      document.getElementById("errorMessage").style.display = "flex";
      document.getElementById("errorMessage").style.visibility = "visible";
    } else {
      // Hacer no visible cuando se vuelva a encontrar un pokemon correctament
      document.getElementById("errorMessage").textContent = "";
      document.getElementById("errorMessage").style.display = "none";
      document.getElementById("errorMessage").style.visibility = "hidden";
    }

    //Esconder los datos al no encontrar un pokemon
    document.getElementById("pokemonImage").setAttribute("src", "");
    document.getElementById("pokemonNameDetail").textContent = "";
    document.getElementById("pokemonHeight").textContent = "";
    document.getElementById("pokemonWeight").textContent = "";
    document.getElementById("pokemonAbilities").textContent = "";

    // Esconder la tabla
    document.getElementById("pokemonDetails").style.display = "none";

    // Mostrar el mensaje de error
    document.getElementById("errorMessage").textContent = "No encontrado";

    console.log(error);
  }
}
