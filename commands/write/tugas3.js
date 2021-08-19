const Discord = require("discord.js");
const Canvas = require("canvas"); // NPM CANVAS

module.exports = {
  name: "write3",
  category: "write Bot",
  description: "Penulis",
  run: async (bot, message, args) => {
    const canvas = Canvas.createCanvas(3120, 4160); // 850 637 = UKURAN BACKGROUND / FOTO
    const ctx = canvas.getContext("2d");

    const background = await Canvas.loadImage(
      "https://media.discordapp.net/attachments/700020494740619304/765916739954409472/IMG_20201014_191400_1.jpg?width=374&height=499"
      //CARANA KIRIM GAMBAR KE DC SALIN LINK GAMBAR
    );
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "#74037b";
    ctx.strokeRect(0, 0, canvas.width, canvas.height);

      let text = args;
     const array = [text];
    const new_array = [];

	const chunksize = 10;
    while (text.length) {
      const chunk = text.splice(0,chunksize).join(" ");
    	new_array.push(chunk + "\n");
    }
  
    ctx.font = '60px "sans-serif"'; //FONT
    ctx.fillStyle = "#000000"; // WARNA FONT
    ctx.fillText(new_array, canvas.width / 8.0, canvas.height / 5.0); // POSISI FONT

    const attachment = new Discord.MessageAttachment(
      canvas.toBuffer(),
      "tugas3.png"
    ); // GAMBAR JADI

    message.channel.send(attachment); //KIRIM GAMBAR
  }
};
