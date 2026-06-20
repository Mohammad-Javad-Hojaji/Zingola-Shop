export default function Article({article}) {
    return (
        <div className="col-lg-3 col-sm-6 col-12  pt-3">
            <div className="shadow p-3 mx-2 rounded article ">
                <div className="text-center">
                    <img src={`images/${article.imgUrl}`} className="img-fluid rounded" alt="post" />
                </div>
                <h5 className="pt-4 color555 h6 text-center ">
                   {article.title}
                </h5>
                <h6 className="color777 pt-2">
                    {article.subtitle}
                </h6>
            </div>
        </div>
    )
}