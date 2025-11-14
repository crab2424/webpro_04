const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.use("/public", express.static(path.join(__dirname + "/public")));
app.use(express.urlencoded({ extended: true }));

app.get("/hello1", (req, res) => {
    const message1 = "Hello world";
    const message2 = "Bon jour";
    res.render("show", { greet1: message1, greet2: message2 });
});

app.get("/hello2", (req, res) => {
    res.render("show", { greet1: "Hello world", greet2: "Bon jour" });
});

app.get("/", (req, res) => {
    res.render("greeting", { message: "25G1034" });
});

app.get("/english", (req, res) => {
    res.render("show", { greet1: "Hello", greet2: "Thank you" });
});

app.get("/france", (req, res) => {
    res.render("show", { greet1: "Bonjour", greet2: "Merci" });
});
app.get("/germany", (req, res) => {
    res.render("show", { greet1: "Guten Morgen", greet2: "Danke" });
});

app.get("/japanese", (req, res) => {
    res.render("show", { greet1: "こんにちは", greet2: "ありがとう" });
});
app.get("/italian", (req, res) => {
    res.render("show", { greet1: "Ciao", greet2: "Grazie" });
});

app.get("/spanish", (req, res) => {
    res.render("show", { greet1: "Hola", greet2: "Gracias" });
});

app.get("/chinese", (req, res) => {
    res.render("show", { greet1: "你好", greet2: "谢谢" });
});

app.get("/icon", (req, res) => {
    res.render("icon", {
        filename: "./public/Apple_logo_black.svg",
        alt: "Apple Logo",
    });
});

app.get("/omikuji1", (req, res) => {
    const num = Math.floor(Math.random() * 6 + 1);
    let luck = "";
    if (num == 1) luck = "大吉";
    else if (num == 2) luck = "中吉";
    else if (num == 3) luck = "小吉";
    else if (num == 4) luck = "吉";
    else if (num == 5) luck = "末吉";
    else if (num == 6) luck = "凶";

    res.send("今日の運勢は" + luck + "です");
});

app.get("/omikuji2", (req, res) => {
    const num = Math.floor(Math.random() * 6 + 1);
    let luck = "";
    if (num == 1) luck = "大吉";
    else if (num == 2) luck = "中吉";
    else if (num == 3) luck = "小吉";
    else if (num == 4) luck = "吉";
    else if (num == 5) luck = "末吉";
    else if (num == 6) luck = "凶";

    res.render("omikuji2", { result: luck });
});

app.get("/omikuji3", (req, res) => {
    const num = Math.floor(Math.random() * 6 + 1);
    let luck = "";
    let comment = "";
    if (num == 1){ luck = "大吉";
    comment = "最高の一日になるでしょう！"; }
    else if (num == 2){ luck = "中吉";
    comment = "良いことが起こる予感があります．"; }
    else if (num == 3){ luck = "小吉";
    comment = "小さな幸運が訪れるでしょう．"; }
    else if (num == 4){ luck = "吉";
    comment = "平凡ながらも穏やかな日になるでしょう．"; }
    else if (num == 5){ luck = "末吉";
    comment = "努力が報われる日が近づいています．"; }
    else if (num == 6){ luck = "凶";
    comment = "注意深く行動しましょう．"; }

    res.render("omikuji3", { result: luck, comment: comment });
});

app.get("/janken", (req, res) => {
    const cpu = Math.floor(Math.random() * 3);
    let Hand = "";
    if (cpu == 0) Hand = "グー";
    else if (cpu == 1) Hand = "チョキ";
    else if (cpu == 2) Hand = "パー";
    res.render("janken", { Hand: Hand });
});

app.get("/100dice", (req, res) => {
    const dice = Math.floor(Math.random() * 100 + 1);
    let comment = "";
    if (dice <= 5) comment = "クリティカル";
    else if (dice >= 96) comment = "ファンブル";
    else if (dice >= 6 && dice <= 50) comment = "成功";
    else if (dice >= 51 && dice <= 95) comment = "失敗";
    res.render("100dice", { dice: dice, comment: comment });

});

app.listen(8080, () => console.log("Example app listening on port 8080!"));
