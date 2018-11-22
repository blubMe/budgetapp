const getVersion = (() => {
    const data = {
        target: '#notif__text'
    }
    return {
        get: text => {
            return {
                version: ver => Fx.select(data.target).text(`${ver} — ${text}`)
            }
        }
    }
})()

getVersion.get(desc).version(version)