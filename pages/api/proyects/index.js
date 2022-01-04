import DB from '@database/db'

const allProyects = async (req, res) => {
  try {
    const db = new DB()
    const allEntries = await db.getAll()
    const length = allEntries.length
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET')
    res.end(JSON.stringify({ length, data: allEntries }))
    
  } catch (e) {
    res.statusCode = 500
    res.end(
      JSON.stringify({ length: 0, data: [], error: 'Something went wrong' })
    )
  }
}

export default allProyects