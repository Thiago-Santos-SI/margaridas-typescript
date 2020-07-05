import Realm from 'realm';

import RepositorySchema from '../schemas/RepositorySchema';
import TintSchema from "../schemas/TintSchema";
import PercentageSchema from "../schemas/PercentageSchema";
import ProfitSchema from "../schemas/ProfitSchema";

export default function getRealm() {
    return Realm.open({
        schema: [RepositorySchema, TintSchema, ProfitSchema , PercentageSchema],
    });
}
