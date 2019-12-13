class chance {
    static welcome(req, res) {
        return res.status(200).json({
            message: 'Welcome to my application!',
            time: new Date().toString(),
        });
    }
}
export default chance;