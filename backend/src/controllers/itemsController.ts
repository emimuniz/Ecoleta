import { Request, Response } from 'express'
import knex from '../database/connection'

class ItemsController {

    async index (req: Request, res: Response) {

        // seleciona todos os items
        const items = await knex('items').select('*')
    
        // formata os items selecionados
        const serializedItems = items.map(item => {
            return {
                id: item.id,
                title: item.title,
                image_url: `http://localhost:3333/uploads/${item.image}`,
            }
        })
    
        // retorna os items formatados
        return res.json(serializedItems)

    }
}

export default ItemsController