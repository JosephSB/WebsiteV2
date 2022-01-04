import DB from '@database/db'

const ProyectDetail = async (req, res) => {
  try {
    const db = new DB()
    const proyectId = req.query.id

    const proyect = await db.getById(proyectId)
    res.status(200).json(proyect)
  } catch (e) {
    res.status(404).end()
  }
}

export default ProyectDetail