const UI = (function() {
    const updateData = (data) => {
        const element = document.getElementById('data')
        const dataAsJson = JSON.stringify(data)
        if (element.innerHTML !== dataAsJson) {
            document.getElementById('data').innerHTML = JSON.stringify(data)
        }
    }
    return {
        updateData
    }
})()