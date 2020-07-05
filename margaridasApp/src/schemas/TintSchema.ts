export default class TintSchema {
    static schema = {
        name: 'Tinta',
        primaryKey: 'id',
        properties:{
            id: 'int',
            priceTinta: {type: 'float'}
        },
    };
}
