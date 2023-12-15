exports.createBlogPost = (req, res, next) => {
    const title = req.body.title;
    /* const image = req.body.image; */
    const city = req.body.city;
    const desc = req.body.desc;
    
    const result = {
        message: 'Create Blog Post Succesfully',
        data: {
            post_id: 1,
            title: "title",
            //image: 
            city: "city city",
            desc: "sinsooosasageyo",
            created_at: "12/9/2023",
            author: {
                uid: 1,
                name: "Dewi"
            }
        }
    }
    res.status(201).json(result)
}