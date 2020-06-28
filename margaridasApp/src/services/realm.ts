import Realm from 'realm';

import RepositorySchema from '../schemas/RepositorySchema';
import TintaSchema from "../schemas/TintSchema";
import PercentageSchema from "../schemas/PercentageSchema";
import ProfitSchema from "../schemas/ProfitSchema";

export default function getRealm() {
    return Realm.open({
        schema: [RepositorySchema, TintaSchema, ProfitSchema , PercentageSchema],
    });
}
