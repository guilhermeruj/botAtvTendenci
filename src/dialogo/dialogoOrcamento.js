async function dialogoOrcamento(client, message) {
  const texto =
  "Certo! Para qual item você gostaria de um orçamento?\n1 - Movéis\n2 - Planejados\n3 - Estantes\n4 - Quadros\n5 - Mesas e aparadores\n0 - Voltar ao Menu"

  await client
    .sendText(message.from, texto)
    .then(() => {
      console.log("Result: ", "result"); //return object success
    })
    .catch((erro) => {
      console.error("Erro ao enviar mensagem ", erro); //return object error
    });
}

export default dialogoOrcamento;
