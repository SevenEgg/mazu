import { methods } from './api';

export const useFetchCates = async () => {
    const {
        success = false,
        data: {
            rows = [],
        }
    } = await methods.getCatesList({
        pageSize: 20,
        page: 1
    });
    if (success) {
        let catesMap = {};
        let cates = [];
        rows.forEach(item => {
            catesMap[`${item.cid}`] = item.name;
            cates.push({
                label: item.name,
                value: item.cid
            });
        })
        return [catesMap, cates]
    }
}