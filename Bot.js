const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");

const client = new Client({
  authStrategy: new LocalAuth({
    clientId: "bot-fofoca" // id único para salvar a sessão e não precisar escanear o qr sempre
  })
});

// vai gerar o qr code 
client.on("qr", qr => {
  qrcode.generate(qr, { small: true });
});

// indica q o bot ta ativo
client.on("ready", () => {
  console.log("✅ Bot do WhatsApp está online!");
});

client.on("message", async msg => {
  const text = msg.body.toLowerCase();

  // comando /carina e so pode ser usado em grupo "@g.us"
  if (text === "/carina") {
    if (msg.from.includes("@g.us")) {
      const numero = "5522981165322@c.us"; // número no formato internacional
      await msg.reply(`@${numero.split("@")[0]}`, undefined, {
        mentions: [{ id: numero }]
      });
    } else {
      await msg.reply("⚠️ O comando `/carina` só pode ser usado em grupos!");
    }
  }

  // comando vini q pode ser usado em chat privado ou em gp
  else if (text === "/vini") {
    await msg.reply(
      `\`\`\`js
if (amiga === desiludida) {
  Carina.contarFofoca();
}
\`\`\``
    );
  }

 // comando q pode ser usado tb em chat ou gp
  else if (text === "/fofoca") {
    await msg.reply("QUEREMOS A FOFOCA DA CARINAAAA 🔥👀");
  }
});

client.initialize();
