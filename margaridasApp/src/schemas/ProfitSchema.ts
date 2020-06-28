
export default class ProfitSchema {
    static schema = {
        name: 'Lucro',
        primaryKey: 'id',
        properties:{
            id: 'int',
            priceLucro: {type: 'float'}
        },
    };
}
