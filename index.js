import express from 'express'

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
	res.json({ status: 200, message: 'Welcome to codedamn!' }).end()
})

app.listen(
	process.env.PUBLIC_PORT || 1337,
	console.log(
		`Express server running on port ${process.env.PUBLIC_PORT}, can be publicly on https://${process.env.PUBLIC_HOSTNAME}`
	)
)
