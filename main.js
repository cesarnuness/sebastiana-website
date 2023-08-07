import renderBlog from "/views/blog.mjs";
import renderInicio from "/views/inicio.mjs";
import renderEquipe from "/views/equipe.mjs";
import renderGaleria from "/views/galeria.mjs";
import renderSimulados from "/views/simulados.mjs";
import renderContato from "/views/contato.mjs";

const principal = document.getElementById("principal");

function renderContent(content) {
  principal.innerHTML = "";
  principal.insertAdjacentHTML("beforeend", content);
}

const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

btn.addEventListener("click", navToggle);

function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
}

// Listen for hash changes
window.addEventListener("hashchange", handleHashChange);

function handleHashChange() {
  const hash = window.location.hash.substring(1); // Get the hash without the "#"

  switch (hash) {
    case "blog":
      renderContent(renderBlog());
      break;
    case "equipe":
      renderContent(renderEquipe());
      break;
    case "simulados":
      renderContent(renderSimulados());
      break;
    case "contato":
      renderContent(renderContato());
      break;
    case "galeria":
      renderContent(renderGaleria());
      break;
    // default:
    //   renderContent(renderInicio());
    //   break;
  }
}

// Initial content rendering based on the current hash
handleHashChange();
