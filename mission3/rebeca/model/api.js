export const fetchImg = async (value) => {
    try {
        const result = await fetch(`https://jjalbot.com/api/jjals?text=${value}`)
        return await result.json()
    } catch (e) {
        console.log(e)
    }

}