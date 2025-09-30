cat > README.md <<EOL
# WhatsApp Bot

Este é um bot de WhatsApp feito com **whatsapp-web.js** que permite interações via comandos, semelhante a bots de Discord.  
Ele é ideal para enviar mensagens automáticas ou responder a comandos específicos em grupos ou chats privados.

---

## ⚙️ Instalação

1. Clone o repositório:
\`\`\`bash
git clone https://github.com/SEU-USUARIO/SEU-REPO.git
\`\`\`

2. Entre na pasta do projeto:
\`\`\`bash
cd whatsapp-bot
\`\`\`

3. Instale as dependências:
\`\`\`bash
npm install
\`\`\`

---

## 🚀 Como usar

Execute o bot:
\`\`\`bash
node bot.js
\`\`\`

Na primeira execução, será necessário **escanear o QR Code** usando o WhatsApp.  
Após a autenticação inicial, a sessão será salva e **não será necessário escanear novamente**.

---

## 💬 Comandos do Bot

| Comando     | Onde funciona       | Descrição |
|------------|------------------|-----------|
| /carina  | Apenas em grupos  | Menciona o número 22 98116-5322. Se usado em chat privado, o bot avisa que só funciona em grupos. |
| /vini    | Grupos ou privado | Envia a mensagem de teste em formato de código:  
\`\`\`js
if (amiga === desiludida) {
  Carina.contarFofoca();
}
\`\`\` |
| /fofoca  | Grupos ou privado | Envia a mensagem: "QUEREMOS A FOFOCA DA CARINAAAA 🔥👀" |

---

## ⚠️ Observações importantes

- **Não envie a pasta node_modules** para o GitHub. Ela é ignorada via .gitignore e pode ser recriada com npm install.
- Arquivos grandes, como o Chromium do Puppeteer, **não podem ser enviados ao GitHub** diretamente (limite de 100MB).  
- A pasta de sessão .wwebjs_auth é criada automaticamente para salvar sua autenticação e não é necessária no repositório remoto.
- Se você quiser reiniciar a sessão do bot, basta apagar a pasta .wwebjs_auth local e executar o bot novamente.

---

## 📚 Referências

- [whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js)
- [Node.js](https://nodejs.org/)
EOL
