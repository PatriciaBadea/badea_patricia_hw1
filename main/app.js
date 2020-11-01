function removeOrderItem(orderInfo, position) {

    if (!Array.isArray(orderInfo.items)) {
        throw 'Items should be an array'
    } else if (position > orderInfo.items.length) {
        throw 'Invalid position'
    } 

        for(var i=0; i< orderInfo.items.length; i++)
        {
            if(!(orderInfo.items[i].hasOwnProperty('price') && orderInfo.items[i].hasOwnProperty('quantity')))
            throw 'Malformed item'
        }
        

    orderInfo.items.splice(position,1)
    
    orderInfo.total = 0;
    for(var i=0; i<orderInfo.items.length;i++)
    {
        orderInfo.total = orderInfo.total + orderInfo.items[i].price * orderInfo.items[i].quantity;
    }

   
    return orderInfo;
    
}


const app = {
    removeOrderItem
};

module.exports = app;