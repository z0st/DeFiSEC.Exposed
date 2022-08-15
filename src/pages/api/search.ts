import protocols_data from "../../protocols_data";

export default (req, res) => {
  const results = req.query. ?
    protocols_data.filter((protocol_data => protocol_data.name.toLowerCase().includes(req.query.q)) : []
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ results }))
}