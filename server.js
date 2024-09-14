let express = require("express");
let cors = require("cors");

let app = express();
app.use(cors());

app.get("/srikanth", (req, res) => {
    let movieArray = [{
        movieName: "Srikanth",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/8/88/Srikanth_film_poster.jpg/220px-Srikanth_film_poster.jpg",
        heroName: "Raj Kumar Rao",
        para: "Srikanth is a 2024 Indian Hindi-language biographical film on the life of Srikanth Bolla, a visually-impaired industrialist and the founder of Bollant Industries. Starring Rajkummar Rao in the title role, it is directed by Tushar Hiranandani and co-stars Jyothika, Alaya F and Sharad Kelkar.The film was shot in two months at various locations of India and USA, between November 2022 to January 2023.[5] The film was released theatrically on 10 May 2024 on the occasion of Akshay Tritiya, and emerged as a modest commercial success"
        },];
    res.json(movieArray);
});

app.listen(1234, () => {
    console.log("Listening to port 1234")
});