const UI = (function() {
    const shouldUpdateElement = (element, dataAsJson) => element && element.innerHTML !== dataAsJson

    const updateElement = (element, data) => {
        const dataAsJson = JSON.stringify(data)
        if (shouldUpdateElement(element, dataAsJson)) {
            element.innerHTML = dataAsJson
        }
    }

    const updateData = (data) => {
        const element = document.getElementById('data')
        updateElement(element, data)
    }
    return {
        updateData
    }
})()