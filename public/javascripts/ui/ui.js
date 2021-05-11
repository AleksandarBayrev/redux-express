const UI = (function() {
    const updateData = (data) => {
        document.getElementById('data').innerHTML = JSON.stringify(data)
    }
    return {
        updateData
    }
})()