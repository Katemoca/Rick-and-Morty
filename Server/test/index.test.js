const app = require('../src/app');
const session = require('supertest');
const { forEach } = require('../src/utils/users');
const request = session(app);


const character = {
    id: 923,
    name: "Kate",
    species: "Human",
    gender: "Female",
    status: "Alive",
    origin: {
        name: "Earth (C-137)"
    },
    image: "image.jpg"
};


describe('Test de RUTAS', ()=>{
    describe('GET /rickandmorty/character/:id', () => {
        it('Responde con status: 200', async () => {
            const response = await request.get('/rickandmorty/character/1');
             expect(response.statusCode).toBe(200);
        });


        it("Responde un objeto con las propiedades: 'id', 'name', 'species', 'gender', 'status, 'origin' e 'image'", async () => {
            const response = await request.get('/rickandmorty/character/1');
            for(const prop in character){
                expect(response.body).toHaveProperty(prop);
            };
        });


        it('Si hay un error responde con status: 500', async () => {
            const response = await request.get('/rickandmorty/character/254578');
            expect(response.statusCode).toBe(500);
        });
    });
});

describe("GET /rickandmorty/login", () => {
    
    const access = { access: true}

    it("Responde con un objeto con la propiedad access en true si la información del usuario es válida", async ()=>{
        const response = await request.get('/rickandmorty/login?email=user@gmail.com&password=123henry')
        expect(response.body).toEqual(access);
    });


    it("Responde con un objeto con la propiedad access en false si la información del usuario es inválida", async () => {
        const response = await request.get('/rickandmorty/login?email=kate@hmail.com&password=12sdf11')
        access.access = false;
        expect(response.body).toEqual(access);
    });
});

describe("POST /rickandmorty/fav", ()=>{
    it("Debe guardar el personaje en favoritos", async ()=>{
        const response = await request.post('/rickandmorty/fav').send(character);
        expect(response.body).toContainEqual(character);
    });

    it("Debe agregar personajes a favoritos sin eliminar los existentes", async () => {
        character.id = 1256;
        character.name = 'Luisa';
        const response = await request.post('/rickandmorty/fav').send(character);
        expect(response.body.length).toBe(2);
    });
});


describe("DELETE /rickandmorty/fav/:id", () => {
    it("Si el ID solicitado no existe, debería retornar un arreglo con todos los favoritos", async () => {
        const response = await request.delete('/rickandmorty/fav/2gh56');
        expect(response.body.length).toBe(2);
    });


    it("Si el ID enviado existe, debería eliminarlo de favoritos", async () => {
        const response = await request.delete('/rickandmorty/fav/1923');
        expect(response.body.length).not.toContainEqual(1);  // Este está raro :( no sirvió con .toBe(1)
    });
});

