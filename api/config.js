export default function handler(req, res) {
  // Izinkan akses dari mana saja (CORS)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');

  // Ambil ID dari URL (misal: ?id=user1)
  const { id } = req.query;

  // Data User (Nanti bisa dipindah ke Database Supabase/MongoDB)
const users = {
    "andrewsmile": {
      username: "andrewsmile",
      theme: "dark",
      buttonText: "Follow me on Instagram",
      profilePic: "https://unavatar.io/instagram/andrewsmile"
    },
    "skyrabbitsgames": {
      username: "skyrabbitsgames",
      theme: "dark",
      buttonText: "Play with Skyrabbits!",
      profilePic: "https://unavatar.io/instagram/skyrabbitsgames"
    }
  };
  const config = users[id] || users["andrewsmile"];

  res.status(200).json(config);
}