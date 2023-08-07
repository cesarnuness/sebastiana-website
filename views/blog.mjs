const renderBlog = () => {
  return `    <section class="bg-gradient-to-r from-amber-50 to-amber-100" id="blog">
      <!-- Título -->
      <div
        class="mt-5 border-4 border-b-2 border-cor-primaria p-5 md:mt-20 md:p-20"
      >
        <h1
          class="text-center text-4xl font-bold text-cor-primaria md:text-left md:text-6xl"
        >
          BLOG SEBASTIANA
        </h1>
      </div>

      <!-- Container Geral -->
      <div class="flex">
        <!-- Container fotos -->
        <div
          class="w-full flex-col overflow-hidden border-2 border-r-4 border-cor-primaria bg-amber-50 shadow-lg md:w-3/4"
        >
          <!-- Post 1 -->
          <div class="group relative m-4 h-fit rounded-3xl bg-amber-200">
            <img
              class="transition duration-150 hover:scale-105"
              src="./images/desktop/jardim.jpg"
              alt=""
            />
            <div
              class="group absolute bottom-0 left-0 h-24 w-full bg-white opacity-60 transition duration-150 group-hover:translate-y-4 group-hover:scale-105 group-hover:opacity-90"
            >
              <div class="pl-5 pt-4">
                <h1 class="text-2xl text-red-500">Jardim</h1>
                <p class="text-xs font-semibold text-zinc-600 lg:text-base">
                  Conectando a natureza ao aprendizado: Celebramos a inauguração
                  do encantador jardim escolar, inspire-se junto conosco!
                </p>
              </div>
            </div>
          </div>
          <!-- Post 2 -->
          <div class="group relative m-4 h-fit rounded-3xl bg-amber-200">
            <img
              class="transition duration-150 hover:scale-105"
              src="./images/desktop/familia.jpg"
              alt=""
            />
            <div
              class="group absolute bottom-0 left-0 h-24 w-full bg-white opacity-60 transition duration-150 group-hover:translate-y-4 group-hover:scale-105 group-hover:opacity-90"
            >
              <div class="pl-5 pt-4">
                <h1 class="text-2xl text-red-500">Dia da Família</h1>
                <p class="text-xs font-semibold text-zinc-600 lg:text-base">
                  Unidos pelo amor e carinho: Celebrando o Dia da Família,
                  honramos quem cuida com amor incondicional.
                </p>
              </div>
            </div>
          </div>
          <!-- Post 3 -->
          <div class="group relative m-4 h-fit rounded-3xl bg-amber-50">
            <img
              class="duration-15 mx-auto transition hover:scale-105"
              src="./images/desktop/disciplina.jpg"
              alt=""
            />
            <div
              class="group absolute bottom-0 left-0 h-24 w-full bg-white opacity-60 transition duration-150 group-hover:translate-y-4 group-hover:scale-105 group-hover:opacity-90"
            >
              <div class="pl-5 pt-4">
                <h1 class="text-2xl text-red-500">Campeonatos</h1>
                <p class="text-xs font-semibold text-zinc-600 lg:text-base">
                  Através da disciplina e do trabalho em equipe, nossos alunos
                  se destacam no campeonato de futebol, deixando sua marca.
                </p>
              </div>
            </div>
          </div>
          <!-- Post 4 -->
          <div class="group relative m-4 h-fit rounded-3xl bg-amber-200">
            <img
              class="transition duration-150 hover:scale-105"
              src="./images/desktop/sustentabilidade.jpg"
              alt=""
            />
            <div
              class="group absolute bottom-0 left-0 h-24 w-full bg-white opacity-60 transition duration-150 group-hover:translate-y-4 group-hover:scale-105 group-hover:opacity-90"
            >
              <div class="pl-5 pt-4">
                <h1 class="text-2xl text-red-500">Sustentabilidade</h1>
                <p class="text-xs font-semibold text-zinc-600 lg:text-base">
                  Semear o futuro sustentável: Nossos alunos cultivam um
                  ambiente mais verde e consciente, plantando flores com
                  carinho.
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- Container Recados e datas -->
        <div class="hidden w-1/4 flex-col bg-amber-50 md:flex">
          <div
            class="b flex-col border-2 border-b-4 border-l-0 border-cor-primaria"
          >
            <!-- Container 1 - Horários -->
            <div class="mx-1 my-4 flex h-screen flex-col space-y-2">
              <h2 class="mx-auto mt-2 text-2xl font-bold text-red-700">
                Horários
              </h2>
              <p class="mx-auto hidden font-semibold text-red-600">Horários</p>
              <p class="mx-auto text-xs font-semibold md:text-base">
                Manhã:
                <span class="text-cor-primaria">7:00 e 11:50</span>
              </p>
              <p class="mx-auto text-xs font-semibold md:text-base">
                Tarde:
                <span class="text-cor-primaria">12:40 e 17:30</span>
              </p>
            </div>
          </div>
          <!-- Container 2 - Salvo para necessidade @todo -->
          <div class="hidden h-2/4 flex-col border-2 border-cor-primaria"></div>
        </div>
      </div>
    </section>
`;
};

export default renderBlog;
