const renderEquipe = () => {
  return `      <section class="bg-gradient-to-r from-amber-50 to-amber-100" id="equipe">
        <!-- Título -->
        <div
          class="mt-5 border-4 border-b-2 border-cor-primaria p-5 md:mt-20 md:p-20"
        >
          <h1
            class="text-center text-4xl font-bold text-red-900 md:text-left md:text-6xl"
          >
            Nossa Equipe
          </h1>
        </div>

        <!-- Container Geral -->
        <div class="flex flex-col">
          <!-- Agrupamento Gestão  -->
          <div id="gestao" class="border-4 border-cor-primaria">
            <!-- Título  -->
            <div class="mt-0 border-2 border-b-2 border-cor-primaria p-5">
              <h1
                class="text-center text-2xl font-bold text-cor-primaria md:text-left md:text-4xl"
              >
                Gestão
              </h1>
            </div>
            <!-- Container Perfis -->
            <div class="m-4 flex flex-col md:grid md:grid-cols-3">
              <!-- Card Perfil -->
              <div class="mt-5 flex h-fit w-full justify-evenly">
                <div class="min-w-xs">
                  <div class="rounded-lg bg-white px-9 py-3 shadow-2xl">
                    <div class="photo-wrapper p-2">
                      <img
                        class="mx-auto h-32 w-32 rounded-full"
                        src="/profiles/mariacristina.jpeg"
                        alt="alt text"
                      />
                    </div>
                    <div class="p-2">
                      <h3
                        class="text-center text-xl font-medium leading-8 text-gray-900"
                      >
                        Maria Cristina
                      </h3>
                      <div
                        class="text-center text-xs font-semibold text-gray-400"
                      >
                        <p>Diretora</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Card Perfil -->
              <div class="mt-5 flex h-fit w-full justify-evenly">
                <div class="min-w-xs">
                  <div class="rounded-lg bg-white px-9 py-3 shadow-2xl">
                    <div class="photo-wrapper p-2">
                      <img
                        class="mx-auto h-32 w-32 rounded-full"
                        src="/profiles/cleonice.jpeg"
                        alt="alt text"
                      />
                    </div>
                    <div class="p-2">
                      <h3
                        class="text-center text-xl font-medium leading-8 text-gray-900"
                      >
                        Cleonice
                      </h3>
                      <div
                        class="text-center text-xs font-semibold text-gray-400"
                      >
                        <p>COE</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Card Perfil -->
              <div class="mt-5 flex h-fit w-full justify-evenly">
                <div class="min-w-xs">
                  <div class="rounded-lg bg-white px-9 py-3 shadow-2xl">
                    <div class="photo-wrapper p-2">
                      <img
                        class="mx-auto h-32 w-32 rounded-full"
                        src="/profiles/marli.jpeg"
                        alt="alt text"
                      />
                    </div>
                    <div class="p-2">
                      <h3
                        class="text-center text-xl font-medium leading-8 text-gray-900"
                      >
                        Marli
                      </h3>
                      <div
                        class="text-center text-xs font-semibold text-gray-400"
                      >
                        <p>CGP</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Agrupamento docentes  -->
          <div id="docentes" class="mt-4 border-4 border-cor-primaria">
            <!-- Título  -->
            <div class="mt-0 border-2 border-b-2 border-cor-primaria p-5">
              <h1
                class="text-center text-2xl font-bold text-cor-primaria md:text-left md:text-4xl"
              >
                Docentes
              </h1>
            </div>
            <!-- Container Perfis -->
            <div class="m-4 flex flex-col gap-2 md:grid md:grid-cols-5">
              <!-- Card Perfil -->
              <div class="mt-5 flex h-fit w-full justify-evenly">
                <div class="max-w-xs">
                  <div class="rounded-lg bg-white px-9 py-3 shadow-2xl">
                    <div class="photo-wrapper p-2">
                      <img
                        class="mx-auto h-32 w-32 rounded-full"
                        src="/profiles/analaura.jpeg"
                        alt="alt text"
                      />
                    </div>
                    <div class="p-2">
                      <h3
                        class="text-center text-xl font-medium leading-8 text-gray-900"
                      >
                        Ana Laura
                      </h3>
                      <div
                        class="text-center text-xs font-semibold text-gray-400"
                      >
                        <p>PEB I</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Card Perfil -->
              <div class="mt-5 flex h-fit w-full justify-evenly">
                <div class="min-w-xs">
                  <div class="rounded-lg bg-white px-9 py-3 shadow-2xl">
                    <div class="photo-wrapper p-2">
                      <img
                        class="mx-auto h-32 w-32 rounded-full"
                        src="/profiles/anapaula.jpeg"
                        alt="alt text"
                      />
                    </div>
                    <div class="p-2">
                      <h3
                        class="text-center text-xl font-medium leading-8 text-gray-900"
                      >
                        Ana Paula
                      </h3>
                      <div
                        class="text-center text-xs font-semibold text-gray-400"
                      >
                        <p>PEB I</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Card Perfil -->
              <div class="mt-5 flex h-fit w-full justify-evenly">
                <div class="min-w-xs">
                  <div class="rounded-lg bg-white px-9 py-3 shadow-2xl">
                    <div class="photo-wrapper p-2">
                      <img
                        class="mx-auto h-32 w-32 rounded-full"
                        src="/profiles/angela.jpg"
                        alt="alt text"
                      />
                    </div>
                    <div class="p-2">
                      <h3
                        class="text-center text-xl font-medium leading-8 text-gray-900"
                      >
                        Angela
                      </h3>
                      <div
                        class="text-center text-xs font-semibold text-gray-400"
                      >
                        <p>PEB I</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Card Perfil -->
              <div class="mt-5 flex h-fit w-full justify-evenly">
                <div class="min-w-xs">
                  <div class="rounded-lg bg-white px-9 py-3 shadow-2xl">
                    <div class="photo-wrapper p-2">
                      <img
                        class="mx-auto h-32 w-32 rounded-full"
                        src="/profiles/cesarrocha.jpeg"
                        alt="alt text"
                      />
                    </div>
                    <div class="p-2">
                      <h3
                        class="text-center text-xl font-medium leading-8 text-gray-900"
                      >
                        César Rocha
                      </h3>
                      <div
                        class="text-center text-xs font-semibold text-gray-400"
                      >
                        <p>Educação Física</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Card Perfil -->
              <div class="mt-5 flex h-fit w-full justify-evenly">
                <div class="min-w-xs">
                  <div class="rounded-lg bg-white px-9 py-3 shadow-2xl">
                    <div class="photo-wrapper p-2">
                      <img
                        class="mx-auto h-32 w-32 rounded-full"
                        src="/profiles/clelia.jpeg"
                        alt="alt text"
                      />
                    </div>
                    <div class="p-2">
                      <h3
                        class="text-center text-xl font-medium leading-8 text-gray-900"
                      >
                        Clélia
                      </h3>
                      <div
                        class="text-center text-xs font-semibold text-gray-400"
                      >
                        <p>Artes</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Card Perfil -->
              <div class="mt-5 flex h-fit w-full justify-evenly">
                <div class="min-w-xs">
                  <div class="rounded-lg bg-white px-9 py-3 shadow-2xl">
                    <div class="photo-wrapper p-2">
                      <img
                        class="mx-auto h-32 w-32 rounded-full"
                        src="/profiles/erica.jpeg"
                        alt="alt text"
                      />
                    </div>
                    <div class="p-2">
                      <h3
                        class="text-center text-xl font-medium leading-8 text-gray-900"
                      >
                        Érica Cristina
                      </h3>
                      <div
                        class="text-center text-xs font-semibold text-gray-400"
                      >
                        <p>PEB I</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Card Perfil -->
              <div class="mt-5 flex h-fit w-full justify-evenly">
                <div class="min-w-xs">
                  <div class="rounded-lg bg-white px-9 py-3 shadow-2xl">
                    <div class="photo-wrapper p-2">
                      <img
                        class="mx-auto h-32 w-32 rounded-full"
                        src="/profiles/gisele.jpg"
                        alt="alt text"
                      />
                    </div>
                    <div class="p-2">
                      <h3
                        class="text-center text-xl font-medium leading-8 text-gray-900"
                      >
                        Gisele
                      </h3>
                      <div
                        class="text-center text-xs font-semibold text-gray-400"
                      >
                        <p>PEB I</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Card Perfil -->
              <div class="mt-5 flex h-fit w-full justify-evenly">
                <div class="min-w-xs">
                  <div class="rounded-lg bg-white px-9 py-3 shadow-2xl">
                    <div class="photo-wrapper p-2">
                      <img
                        class="mx-auto h-32 w-32 rounded-full"
                        src="/profiles/joaoricardo.jpeg"
                        alt="alt text"
                      />
                    </div>
                    <div class="p-2">
                      <h3
                        class="text-center text-xl font-medium leading-8 text-gray-900"
                      >
                        João Ricardo
                      </h3>
                      <div
                        class="text-center text-xs font-semibold text-gray-400"
                      >
                        <p>Educação Física</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Card Perfil -->
              <div class="mt-5 flex h-fit w-full justify-evenly">
                <div class="min-w-xs">
                  <div class="rounded-lg bg-white px-9 py-3 shadow-2xl">
                    <div class="photo-wrapper p-2">
                      <img
                        class="mx-auto h-32 w-32 rounded-full"
                        src="/profiles/lilian.jpeg"
                        alt="alt text"
                      />
                    </div>
                    <div class="p-2">
                      <h3
                        class="text-center text-xl font-medium leading-8 text-gray-900"
                      >
                        Lilian Carolina
                      </h3>
                      <div
                        class="text-center text-xs font-semibold text-gray-400"
                      >
                        <p>PEB I</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Card Perfil -->
              <div class="mt-5 flex h-fit w-full justify-evenly">
                <div class="min-w-xs">
                  <div class="rounded-lg bg-white px-9 py-3 shadow-2xl">
                    <div class="photo-wrapper p-2">
                      <img
                        class="mx-auto h-32 w-32 rounded-full"
                        src="/profiles/luciane.jpg"
                        alt="alt text"
                      />
                    </div>
                    <div class="p-2">
                      <h3
                        class="text-center text-xl font-medium leading-8 text-gray-900"
                      >
                        Luciane
                      </h3>
                      <div
                        class="text-center text-xs font-semibold text-gray-400"
                      >
                        <p>PEB I</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Card Perfil -->
              <div class="mt-5 flex h-fit w-full justify-evenly">
                <div class="min-w-xs">
                  <div class="rounded-lg bg-white px-9 py-3 shadow-2xl">
                    <div class="photo-wrapper p-2">
                      <img
                        class="mx-auto h-32 w-32 rounded-full"
                        src="/profiles/lucinete.jpeg"
                        alt="alt text"
                      />
                    </div>
                    <div class="p-2">
                      <h3
                        class="text-center text-xl font-medium leading-8 text-gray-900"
                      >
                        Lucinete
                      </h3>
                      <div
                        class="text-center text-xs font-semibold text-gray-400"
                      >
                        <p>PEB I</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Card Perfil -->
              <div class="mt-5 flex h-fit w-full justify-evenly">
                <div class="min-w-xs">
                  <div class="rounded-lg bg-white px-9 py-3 shadow-2xl">
                    <div class="photo-wrapper p-2">
                      <img
                        class="mx-auto h-32 w-32 rounded-full"
                        src="/profiles/monize.jpeg"
                        alt="alt text"
                      />
                    </div>
                    <div class="p-2">
                      <h3
                        class="text-center text-xl font-medium leading-8 text-gray-900"
                      >
                        Monize
                      </h3>
                      <div
                        class="text-center text-xs font-semibold text-gray-400"
                      >
                        <p>Educação Especial</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Card Perfil -->
              <div class="mt-5 flex h-fit w-full justify-evenly">
                <div class="min-w-xs">
                  <div class="rounded-lg bg-white px-9 py-3 shadow-2xl">
                    <div class="photo-wrapper p-2">
                      <img
                        class="mx-auto h-32 w-32 rounded-full"
                        src="/profiles/renata.jpg"
                        alt="alt text"
                      />
                    </div>
                    <div class="p-2">
                      <h3
                        class="text-center text-xl font-medium leading-8 text-gray-900"
                      >
                        Renata
                      </h3>
                      <div
                        class="text-center text-xs font-semibold text-gray-400"
                      >
                        <p>PEB I</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Card Perfil -->
              <div class="mt-5 flex h-fit w-full justify-evenly">
                <div class="min-w-xs">
                  <div class="rounded-lg bg-white px-9 py-3 shadow-2xl">
                    <div class="photo-wrapper p-2">
                      <img
                        class="mx-auto h-32 w-32 rounded-full"
                        src="/profiles/silvana.jpg"
                        alt="alt text"
                      />
                    </div>
                    <div class="p-2">
                      <h3
                        class="text-center text-xl font-medium leading-8 text-gray-900"
                      >
                        Silvana
                      </h3>
                      <div
                        class="text-center text-xs font-semibold text-gray-400"
                      >
                        <p>PEB I</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Card Perfil -->
              <div class="mt-5 flex h-fit w-full justify-evenly">
                <div class="min-w-xs">
                  <div class="rounded-lg bg-white px-9 py-3 shadow-2xl">
                    <div class="photo-wrapper p-2">
                      <img
                        class="mx-auto h-32 w-32 rounded-full"
                        src="/profiles/simonehermogenes.jpeg"
                        alt="alt text"
                      />
                    </div>
                    <div class="p-2">
                      <h3
                        class="text-center font-medium leading-8 text-gray-900"
                      >
                        Simone Hermogenes
                      </h3>
                      <div
                        class="text-center text-xs font-semibold text-gray-400"
                      >
                        <p>PEB I</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Card Perfil -->
              <div class="mt-5 flex h-fit w-full justify-evenly">
                <div class="min-w-xs">
                  <div class="rounded-lg bg-white px-9 py-3 shadow-2xl">
                    <div class="photo-wrapper p-2">
                      <img
                        class="mx-auto h-32 w-32 rounded-full"
                        src="/profiles/simone.jpg"
                        alt="alt text"
                      />
                    </div>
                    <div class="p-2">
                      <h3
                        class="text-center font-medium leading-8 text-gray-900"
                      >
                        Simone Fernandes
                      </h3>
                      <div
                        class="text-center text-xs font-semibold text-gray-400"
                      >
                        <p>PEB I</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Card Perfil -->
              <div class="mt-5 flex h-fit w-full justify-evenly">
                <div class="min-w-xs">
                  <div class="rounded-lg bg-white px-9 py-3 shadow-2xl">
                    <div class="photo-wrapper p-2">
                      <img
                        class="mx-auto h-32 w-32 rounded-full"
                        src="/profiles/amanda.jpeg"
                        alt="Amanda"
                      />
                    </div>
                    <div class="p-2">
                      <h3
                        class="text-center text-xl font-medium leading-8 text-gray-900"
                      >
                        Amanda Yasmini
                      </h3>
                      <div
                        class="text-center text-xs font-semibold text-gray-400"
                      >
                        <p>PEFM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Card Perfil -->
              <div class="mt-5 flex h-fit w-full justify-evenly">
                <div class="min-w-xs">
                  <div class="rounded-lg bg-white px-9 py-3 shadow-2xl">
                    <div class="photo-wrapper p-2">
                      <img
                        class="mx-auto h-32 w-32 rounded-full"
                        src="/profiles/cesarnunes.jpeg"
                        alt="John alt text"
                      />
                    </div>
                    <div class="p-2">
                      <h3
                        class="text-center text-xl font-medium leading-8 text-gray-900"
                      >
                        César Nunes
                      </h3>
                      <div
                        class="text-center text-xs font-semibold text-gray-400"
                      >
                        <p>PROATEC</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Card Perfil -->
              <div class="mt-5 flex h-fit w-full justify-evenly">
                <div class="min-w-xs">
                  <div class="rounded-lg bg-white px-9 py-3 shadow-2xl">
                    <div class="photo-wrapper p-2">
                      <img
                        class="mx-auto h-32 w-32 rounded-full"
                        src="/profiles/daurylene.jpg"
                        alt="alt text"
                      />
                    </div>
                    <div class="p-2">
                      <h3
                        class="text-center text-xl font-medium leading-8 text-gray-900"
                      >
                        Daurylene
                      </h3>
                      <div
                        class="text-center text-xs font-semibold text-gray-400"
                      >
                        <p>PEFM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Card Perfil -->
              <div class="mt-5 flex h-fit w-full justify-evenly">
                <div class="min-w-xs">
                  <div class="rounded-lg bg-white px-9 py-3 shadow-2xl">
                    <div class="photo-wrapper p-2">
                      <img
                        class="mx-auto h-32 w-32 rounded-full"
                        src="/profiles/elaine.jpeg"
                        alt="alt text"
                      />
                    </div>
                    <div class="p-2">
                      <h3
                        class="text-center text-xl font-medium leading-8 text-gray-900"
                      >
                        Elaine
                      </h3>
                      <div
                        class="text-center text-xs font-semibold text-gray-400"
                      >
                        <p>PEFM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Card Perfil -->
              <div class="mt-5 flex h-fit w-full justify-evenly">
                <div class="min-w-xs">
                  <div class="rounded-lg bg-white px-9 py-3 shadow-2xl">
                    <div class="photo-wrapper p-2">
                      <img
                        class="mx-auto h-32 w-32 rounded-full"
                        src="/profiles/elizama.jpeg"
                        alt="alt text"
                      />
                    </div>
                    <div class="p-2">
                      <h3
                        class="text-center text-xl font-medium leading-8 text-gray-900"
                      >
                        Elizama
                      </h3>
                      <div
                        class="text-center text-xs font-semibold text-gray-400"
                      >
                        <p>PEFM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Card Perfil -->
              <div class="mt-5 flex h-fit w-full justify-evenly">
                <div class="min-w-xs">
                  <div class="rounded-lg bg-white px-9 py-3 shadow-2xl">
                    <div class="photo-wrapper p-2">
                      <img
                        class="mx-auto h-32 w-32 rounded-full"
                        src="/profiles/helilda.jpg"
                        alt="alt text"
                      />
                    </div>
                    <div class="p-2">
                      <h3
                        class="text-center text-xl font-medium leading-8 text-gray-900"
                      >
                        Helilda
                      </h3>
                      <div
                        class="text-center text-xs font-semibold text-gray-400"
                      >
                        <p>PEFM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Card Perfil -->
              <div class="mt-5 flex h-fit w-full justify-evenly">
                <div class="min-w-xs">
                  <div class="rounded-lg bg-white px-9 py-3 shadow-2xl">
                    <div class="photo-wrapper p-2">
                      <img
                        class="mx-auto h-32 w-32 rounded-full"
                        src="/profiles/noele.jpeg"
                        alt="alt text"
                      />
                    </div>
                    <div class="p-2">
                      <h3
                        class="text-center text-xl font-medium leading-8 text-gray-900"
                      >
                        Noéle Patrícia
                      </h3>
                      <div
                        class="text-center text-xs font-semibold text-gray-400"
                      >
                        <p>PEFM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Card Perfil -->
              <div class="mt-5 flex h-fit w-full justify-evenly">
                <div class="min-w-xs">
                  <div class="rounded-lg bg-white px-9 py-3 shadow-2xl">
                    <div class="photo-wrapper p-2">
                      <img
                        class="mx-auto h-32 w-32 rounded-full"
                        src="/profiles/valeria.jpg"
                        alt="alt text"
                      />
                    </div>
                    <div class="p-2">
                      <h3
                        class="text-center text-xl font-medium leading-8 text-gray-900"
                      >
                        Valéria Roberta
                      </h3>
                      <div
                        class="text-center text-xs font-semibold text-gray-400"
                      >
                        <p>PEFM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Card Perfil -->
              <div class="mt-5 flex h-fit w-full justify-evenly">
                <div class="min-w-xs">
                  <div class="rounded-lg bg-white px-9 py-3 shadow-2xl">
                    <div class="photo-wrapper p-2">
                      <img
                        class="mx-auto h-32 w-32 rounded-full"
                        src="/profiles/roseli.jpeg"
                        alt="alt text"
                      />
                    </div>
                    <div class="p-2">
                      <h3
                        class="text-center text-xl font-medium leading-8 text-gray-900"
                      >
                        Roseli Cristina
                      </h3>
                      <div
                        class="text-center text-xs font-semibold text-gray-400"
                      >
                        <p>PEFM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Agrupamento administração e serviços  -->
          <div id="administracao" class="mt-4 border-4 border-cor-primaria">
            <!-- Título  -->
            <div class="mt-0 border-2 border-b-2 border-cor-primaria p-5">
              <h1
                class="text-center text-2xl font-bold text-cor-primaria md:text-left md:text-4xl"
              >
                Administração e serviços
              </h1>
            </div>
            <!-- Container Perfis -->
            <div class="m-4 flex flex-col md:grid md:grid-cols-5">
              <!-- Card Perfil -->
              <div class="mt-5 flex h-fit w-full justify-evenly">
                <div class="min-w-xs">
                  <div class="rounded-lg bg-white px-9 py-3 shadow-2xl">
                    <div class="photo-wrapper p-2">
                      <img
                        class="mx-auto h-32 w-32 rounded-full"
                        src="/profiles/eliandro.jpeg"
                        alt="alt text"
                      />
                    </div>
                    <div class="p-2">
                      <h3
                        class="text-center text-xl font-medium leading-8 text-gray-900"
                      >
                        Eliandro
                      </h3>
                      <div
                        class="text-center text-xs font-semibold text-gray-400"
                      >
                        <p>GOE</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Card Perfil -->
              <div class="mt-5 flex h-fit w-full justify-evenly">
                <div class="min-w-xs">
                  <div class="rounded-lg bg-white px-9 py-3 shadow-2xl">
                    <div class="photo-wrapper p-2">
                      <img
                        class="mx-auto h-32 w-32 rounded-full"
                        src="/profiles/adna.jpg"
                        alt="alt text"
                      />
                    </div>
                    <div class="p-2">
                      <h3
                        class="text-center text-xl font-medium leading-8 text-gray-900"
                      >
                        Adna
                      </h3>
                      <div
                        class="text-center text-xs font-semibold text-gray-400"
                      >
                        <p>AOE</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Card Perfil -->
              <div class="mt-5 flex h-fit w-full justify-evenly">
                <div class="min-w-xs">
                  <div class="rounded-lg bg-white px-9 py-3 shadow-2xl">
                    <div class="photo-wrapper p-2">
                      <img
                        class="mx-auto h-32 w-32 rounded-full"
                        src="/profiles/celeide.jpeg"
                        alt="alt text"
                      />
                    </div>
                    <div class="p-2">
                      <h3
                        class="text-center text-xl font-medium leading-8 text-gray-900"
                      >
                        Celeide
                      </h3>
                      <div
                        class="text-center text-xs font-semibold text-gray-400"
                      >
                        <p>AOE</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Card Perfil -->
              <div class="mt-5 flex h-fit w-full justify-evenly">
                <div class="min-w-xs">
                  <div class="rounded-lg bg-white px-9 py-3 shadow-2xl">
                    <div class="photo-wrapper p-2">
                      <img
                        class="mx-auto h-32 w-32 rounded-full"
                        src="/profiles/karem.jpeg"
                        alt="alt text"
                      />
                    </div>
                    <div class="p-2">
                      <h3
                        class="text-center text-xl font-medium leading-8 text-gray-900"
                      >
                        Karem
                      </h3>
                      <div
                        class="text-center text-xs font-semibold text-gray-400"
                      >
                        <p>AOE</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Card Perfil -->
              <div class="mt-5 flex h-fit w-full justify-evenly">
                <div class="min-w-xs">
                  <div class="rounded-lg bg-white px-9 py-3 shadow-2xl">
                    <div class="photo-wrapper p-2">
                      <img
                        class="mx-auto h-32 w-32 rounded-full"
                        src="/profiles/sandra.jpeg"
                        alt="alt text"
                      />
                    </div>
                    <div class="p-2">
                      <h3
                        class="text-center text-xl font-medium leading-8 text-gray-900"
                      >
                        Sandra
                      </h3>
                      <div
                        class="text-center text-xs font-semibold text-gray-400"
                      >
                        <p>AOE</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Card Perfil -->
              <div class="mt-5 flex h-fit w-full justify-evenly">
                <div class="min-w-xs">
                  <div class="rounded-lg bg-white px-9 py-3 shadow-2xl">
                    <div class="photo-wrapper p-2">
                      <img
                        class="mx-auto h-32 w-32 rounded-full"
                        src="/profiles/sumara.jpg"
                        alt="alt text"
                      />
                    </div>
                    <div class="p-2">
                      <h3
                        class="text-center text-xl font-medium leading-8 text-gray-900"
                      >
                        Sumara
                      </h3>
                      <div
                        class="text-center text-xs font-semibold text-gray-400"
                      >
                        <p>AOE</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Card Perfil -->
              <div class="mt-5 flex h-fit w-full justify-evenly">
                <div class="min-w-xs">
                  <div class="rounded-lg bg-white px-9 py-3 shadow-2xl">
                    <div class="photo-wrapper p-2">
                      <img
                        class="mx-auto h-32 w-32 rounded-full"
                        src="/profiles/maurilei.jpg"
                        alt="alt text"
                      />
                    </div>
                    <div class="p-2">
                      <h3
                        class="text-center text-xl font-medium leading-8 text-gray-900"
                      >
                        Maurilei
                      </h3>
                      <div
                        class="text-center text-xs font-semibold text-gray-400"
                      >
                        <p>Chef</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Card Perfil -->
              <div class="mt-5 flex h-fit w-full justify-evenly">
                <div class="min-w-xs">
                  <div class="rounded-lg bg-white px-9 py-3 shadow-2xl">
                    <div class="photo-wrapper p-2">
                      <img
                        class="mx-auto h-32 w-32 rounded-full"
                        src="/profiles/camila.jpg"
                        alt="alt text"
                      />
                    </div>
                    <div class="p-2">
                      <h3
                        class="text-center text-xl font-medium leading-8 text-gray-900"
                      >
                        Camila
                      </h3>
                      <div
                        class="text-center text-xs font-semibold text-gray-400"
                      >
                        <p>Chef</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Card Perfil -->
              <div class="mt-5 flex h-fit w-full justify-evenly">
                <div class="min-w-xs">
                  <div class="rounded-lg bg-white px-9 py-3 shadow-2xl">
                    <div class="photo-wrapper p-2">
                      <img
                        class="mx-auto h-32 w-32 rounded-full"
                        src="/profiles/tatiana.jpeg"
                        alt="alt text"
                      />
                    </div>
                    <div class="p-2">
                      <h3
                        class="text-center text-xl font-medium leading-8 text-gray-900"
                      >
                        Tatiana
                      </h3>
                      <div
                        class="text-center text-xs font-semibold text-gray-400"
                      >
                        <p>Zeladora</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Card Perfil -->
              <div class="mt-5 flex h-fit w-full justify-evenly">
                <div class="min-w-xs">
                  <div class="rounded-lg bg-white px-9 py-3 shadow-2xl">
                    <div class="photo-wrapper p-2">
                      <img
                        class="mx-auto h-32 w-32 rounded-full"
                        src="/profiles/joelma.jpeg"
                        alt="alt text"
                      />
                    </div>
                    <div class="p-2">
                      <h3
                        class="text-center text-xl font-medium leading-8 text-gray-900"
                      >
                        Joelma
                      </h3>
                      <div
                        class="text-center text-xs font-semibold text-gray-400"
                      >
                        <p>Zeladora</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>`;
};

export default renderEquipe;
