const {SQLDataSource} = require('datasource-sql')
const DataLoader = require('dataloader')

class TurmasAPI extends SQLDataSource {
    constructor(dbConfig) {
        super(dbConfig)
    }

    async getTurmas({page = 0, pageOffset = Infinity}) {

      const registroInicial = page === 0 || page === 1 ? 0 : (page * pageOffset) - 1 

      return this.db
        .select('*')
        .from('turmas')
        .offset(registroInicial)
        .limit(pageOffset)
    }

    getTurmasCarregadas = new DataLoader(async idsTurmas => {
        const turmas = await this.db
          .select('*')
          .from('turmas')
          .whereIn('id', idsTurmas)
     
     
        return idsTurmas
          .map(id => turmas
            .find(turma => turma.id === id))
      })


}

module.exports = TurmasAPI