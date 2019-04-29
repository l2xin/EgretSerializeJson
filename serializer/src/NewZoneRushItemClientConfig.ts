import { SerializeField, DataType } from '@egret/ts-binary-serializer';
import { filename } from './utils';

// const a = {
//     "id": 1001,
//     "rushtype": 1,
//     "rushid": 1,
//     "sort": 1,
//     "goal": [2, 150000],
//     "reward": 800,
//     "desc": "当日提升战力150000",
//     "goto": 1001,
//     "guideUI": ["openui", "UI_Equipment", "ShowMainUserData"]
// };
@filename('newzonerush_item_client1')
export class NewZoneRushItemClientConfig {

    @SerializeField(DataType.Int32, false)
    id: number;

    @SerializeField(DataType.Int32, false)
    rushtype: number

    @SerializeField(DataType.Int32, false)
    rushid: number;

    @SerializeField(DataType.Int32, false)
    sort: number;

    @SerializeField(DataType.Int32, true)
    goal: number[];

    @SerializeField(DataType.Int32, false)
    reward: number;

    @SerializeField(DataType.String, false)
    desc: string;

    @SerializeField(DataType.Int32, false)
    goto: number;

    @SerializeField(DataType.String, true)
    guideUI: string[];
}