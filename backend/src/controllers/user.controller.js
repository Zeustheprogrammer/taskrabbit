const jwt = require('jsonwebtoken')




async function login(req, res) {
    const { username, password } = req.body;

    if (username === userCredentials.username &&
        password === userCredentials.password) {

        const accessToken = jwt.sign({
            username: userCredentials.username,
            email: userCredentials.email
        }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '10m'
        });

        const refreshToken = jwt.sign({
            username: userCredentials.username,
        }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '1d' });


        res.cookie('jwt', refreshToken, {
            httpOnly: true,
            sameSite: 'None', secure: true,
            maxAge: 24 * 60 * 60 * 1000
        });
        return res.json({ accessToken });
    }
    else {
        return res.status(406).json({
            message: 'Invalid credentials'
        });
    }
}

app.post('/refresh', (req, res) => {
    if (req.cookies?.jwt) {

        const refreshToken = req.cookies.jwt;

        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET,
            (err, decoded) => {
                if (err) {

                    // Wrong Refesh Token
                    return res.status(406).json({ message: 'Unauthorized' });
                }
                else {
                    // Correct token we send a new access token
                    const accessToken = jwt.sign({
                        username: userCredentials.username,
                        email: userCredentials.email
                    }, process.env.ACCESS_TOKEN_SECRET, {
                        expiresIn: '10m'
                    });
                    return res.json({ accessToken });
                }
            })
    } else {
        return res.status(406).json({ message: 'Unauthorized' });
    }
})

app.get('/', ((req, res) => {
    res.send("Server");
    console.log("server running");
}))

app.listen(8000, () => {
    console.log(`Server active on http://localhost:${8000}!`);
})