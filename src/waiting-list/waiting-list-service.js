const waitingListService = {
    getFromWaitingListBySku(db, product_sku) {
        return db('waiting_list')
            .where({product_sku});
    },
    insertToWaitingList(db, data) {
        return db
            .insert([data], ['*'])
            .into('waiting_list')
    }
};

modole.exports = waitingListService;