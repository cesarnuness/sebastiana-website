const renderContato = () => {
  return `      <section id="contato" class="mx-auto mb-10 max-w-2xl">
        <div class="flex justify-center md:justify-start md:pl-10">
          <h2 class="mt-4 text-2xl font-bold text-red-800">Horários</h2>
        </div>
        <div
          class="mx-auto flex flex-col items-center justify-center gap-6 bg-amber-50 md:flex-row md:items-start md:justify-evenly"
        >
          <!-- Tabela horários -->
          <div class="w-full max-w-xl rounded-lg bg-amber-50 p-6">
            <table class="w-full text-center">
              <thead>
                <tr class="text-cor-primaria">
                  <th class="bg-amber-100 p-2">Alunos</th>
                  <th class="p-2" colspan="2">Entrada</th>
                  <th class="p-2" colspan="2">Saída</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="p-2 font-semibold">Manhã</td>
                  <td class="p-2" colspan="2">07:00</td>
                  <td class="p-2" colspan="2">11:50</td>
                </tr>
                <tr>
                  <td class="p-2 font-semibold">Tarde</td>
                  <td class="p-2" colspan="2">12:40</td>
                  <td class="p-2" colspan="2">17:30</td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- Tabela horários -->
          <div class="w-full max-w-xl rounded-lg bg-amber-50 p-6">
            <table class="w-full text-center">
              <thead>
                <tr class="text-cor-primaria">
                  <th class="bg-amber-100 p-2">Secretaria</th>
                  <th class="p-2" colspan="2">Entrada</th>
                  <th class="p-2" colspan="2">Saída</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="p-2 font-semibold">Manhã</td>
                  <td class="p-2" colspan="2">07:30</td>
                  <td class="p-2" colspan="2">12:00</td>
                </tr>
                <tr>
                  <td class="p-2 font-semibold">Tarde</td>
                  <td class="p-2" colspan="2">13:00</td>
                  <td class="p-2" colspan="2">17:00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="min-w-screen flex justify-center md:justify-start md:pl-10">
          <h2 class="block text-2xl font-bold text-red-800">Endereço</h2>
        </div>
        <div class="my-4 flex flex-col space-y-1 px-20 md:px-10">
          <p class="text-sm font-semibold tracking-wide text-red-400">
            <span class="font-bold text-red-600">Endereço:</span> Rua Carlos
            Pereira Bicudo Q 2-80
          </p>
          <p class="text-sm font-semibold tracking-wide text-red-400">
            <span class="font-bold text-red-600">CEP:</span> 17066-150
          </p>
          <p class="text-sm font-semibold tracking-wide text-red-400">
            <span class="font-bold text-red-600">Bairro:</span> Parque Jaraguá
          </p>
        </div>
        <div class="min-w-screen flex justify-center md:justify-start md:pl-10">
          <h2 class="block text-2xl font-bold text-red-800">Contato</h2>
        </div>
        <div class="my-4 flex flex-col space-y-1 px-20 md:px-10">
          <p class="text-sm font-semibold tracking-wide text-red-400">
            <span class="font-bold text-red-600">Telefone:</span> (14) 3218-9596
          </p>

          <p class="text-sm font-semibold tracking-wide text-red-400">
            <span class="font-bold text-red-600">WhatsApp:</span>
            <a href="https://wa.me/5514997136784">(14) 99713-6784</a>
          </p>
        </div>
      <!-- Container da seção de citação -->
      <div id="citation2" class="mx-auto max-w-2xl">
        <!-- Borda de cima -->
        <div
          class="mx-auto mt-10 w-3/4 border border-x-2 border-cor-primaria md:mx-24 md:max-w-lg"
        ></div>

        <!-- citação -->
        <div class="bg-amber-50 px-4 py-8">
          <h2 class="mb-4 text-center text-2xl font-bold text-cor-primaria">
            "A educação é a ferramenta mais poderosa que podemos usar para mudar
            o mundo, e começa com cada aluno que entra por nossas portas."
          </h2>
          <p class="mt-10 text-center font-bold text-red-400 md:text-right">
            Rubem Alves
          </p>
        </div>
        <!-- Borda de baixo -->
        <div
          class="mx-auto mb-10 w-2/3 border border-x-2 border-cor-primaria shadow-2xl"
        ></div>
      </div>
      

    </main>`;
};

export default renderContato;
