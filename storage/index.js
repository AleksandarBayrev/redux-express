const Storage = (function() {
    let data = []
    const Storage = {}
    Storage.getStorage = () => data
    Storage.add = (item) => {
        data.push(item)
    }
    Storage.clear = () => {
        data = []
    }
    return Storage
})()

module.exports = Storage