import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

type User = {
    id: number,
    name: string,
    phone: string,
    email: string,
    website: string,
    posts: Post[]
}

type Post = {
    id: number,
    title: string, 
    body: string,
    userId: number
}

let users: User[] = [
    {
        id: 1,
        name: "Ash",
        phone: "111-111-111",
        email: "Ash1@pokemon.com",
        website: "Ash1.pokemon",
        posts: [
            {
                id: 1,
                title: "Batalha Pokémon", 
                body: "Quem quer fazer uma batalha Pokémon?",
                userId: 1
            },
            {
                id: 2,
                title: "Líderes de Ginásio",
                body: "Me esperem, pois estou indo atrás das minhas insígnias",
                userId: 1
            }
        ]
    },
    {
        id: 2,
        name: "Brock",
        phone: "222-222-222",
        email: "Brock2@pokemon.com",
        website: "Brock2.pokemon",
        posts: [
            {
                id: 3,
                title: "Ginásio de Pedra",
                body: "Venha para cidade de Pewter conquistar sua insígnia da pedra",
                userId: 2
            }
        ]
    },
    {
        id: 3,
        name: "Misty",
        phone: "333-333-333",
        email: "Misty3@pokemon.com",
        website: "Misty3.pokemon",
        posts: [
            {
                id: 4,
                title: "Misty",
                body: "Se acha que consegue me derrotar, estarei esperando pelo seu desafio no meu ginásio da cidade de Cerulean",
                userId: 3
            }
        ]
    }
]

app.get("/", (req, res) => {
    res.send("Hello from Express")
})

app.get("/users", (req, res) => {
    res.send(users)
})

app.get("/posts", (req, res) => {

    const allPosts = users.map((user) => {
        return user.posts
    }).flat(1)

    res.send(allPosts)
})

app.get("/posts/:userId", (req, res) => {

    const userId = req.params.userId
    const indexUser = users.findIndex((usuario) => {
        return usuario.id === Number(userId)
    })

    indexUser >= 0 ? res.send(users[indexUser].posts) : res.send("ID não encontrado")
})

app.listen(3003, () => {
    console.log("Server rodando em localhost:3003")
});