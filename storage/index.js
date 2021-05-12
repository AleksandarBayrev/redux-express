const Storage = (function() {
    let data = []
    const Storage = {}
    Storage.getStorage = () => data
    Storage.add = (item) => {
        const index = data.findIndex(element => element.id === item.id)
        if (index !== -1) {
            data[index] = item
            return
        }
        data.push(item)
    }
    Storage.clear = () => {
        data = []
    }
    return Storage
})()

module.exports = Storage