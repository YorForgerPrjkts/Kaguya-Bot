const Discord = require("discord.js");
const Canvas = require("canvas"); // NPM CANVAS

module.exports = {
  name: "write2",
  category: "write Bot",
  description: "Penulis",
  run: async (bot, message, args) => {
    const canvas = Canvas.createCanvas(810, 1080); // 850 637 = UKURAN BACKGROUND / FOTO
    const ctx = canvas.getContext("2d");

    const background = await Canvas.loadImage(
      "https://cdn.glitch.com/7b2c3c6f-d4f4-4cf5-9a40-528d698414ce%2Fnotebookbuku_catatan_lucu_bergaris_1534657296_9fa99390_progressive.jpg?v=1601629609398"// BACKGROUND PAKE LINK
      //CARANA KIRIM GAMBAR KE DC SALIN LINK GAMBAR
    );
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "#74037b";
    ctx.strokeRect(0, 0, canvas.width, canvas.height);

      let text = args;
     const array = [text];
    const new_array = [];

	const chunksize = 5;
    while (text.length) {
      const chunk = text.splice(0,chunksize).join(" ");
    	new_array.push(chunk + "\n");
    }
  
    ctx.font = '27px "sans-serif"'; //FONT
    ctx.fillStyle = "#000000"; // WARNA FONT
    ctx.fillText(new_array, canvas.width / 7.0, canvas.height / 6.3); // POSISI FONT

    const attachment = new Discord.MessageAttachment(
      canvas.toBuffer(),
      "tugas2.png"
    ); // GAMBAR JADI

    message.channel.send(attachment); //KIRIM GAMBAR
  }
};
