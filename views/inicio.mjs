const renderIndex = () => {
  return `    <section id="hero">
      <img
        class="mx-auto hidden h-fit w-screen lg:flex"
        src="./images/desktop/familia.jpg"
        alt=""
        srcset=""
      />
      <img
        class="mx-auto w-fit lg:hidden"
        src="/images/mobile/familia.jpg"
        alt=""
        srcset=""
      />
    </section>
    <!-- Container da seção de citação -->
    <section id="citation" class="mx-auto max-w-2xl">
      <!-- Borda de cima -->
      <div
        class="mx-auto mt-10 w-3/4 border border-x-2 border-cor-primaria md:mx-24 md:max-w-lg"
      ></div>

      <!-- citação -->
      <div class="bg-amber-50 px-4 py-8">
        <h2 class="mb-4 text-center text-4xl font-bold text-cor-primaria">
          "A escola é o lugar onde semeamos sonhos e colhemos realizações."
        </h2>
        <p class="mt-10 text-center font-bold text-red-400 md:text-right">
          Darcy Ribeiro
        </p>
      </div>
      <!-- Borda de baixo -->
      <div
        class="mx-auto mb-10 w-2/3 border border-x-2 border-cor-primaria shadow-2xl"
      ></div>
    </section>`;
};

export default renderIndex;
