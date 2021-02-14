const app = require('../app')
const developerData = [
    { 
        id: 1, 
        name: 'ErickAbe', 
        Sexo: 'Masculino', 
        Idade: '20', 
        Hobby: 'Tecladista', 
        Data_de_nascimento: '1998-12-03' 
    },
]

describe('Test react', () => {
    test('developers returns ', async () => {
        await api
          .get('/api/developers')
          .expect(200)
          .expect('Content-Type', /application\/json/)
      })

    })