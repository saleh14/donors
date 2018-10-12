exports.handler = function (event, CanvasRenderingContext2D, callback) {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ name: 'saleh' })
  })
}
