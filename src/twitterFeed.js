function twitterFeed(props) {
//    console.log("----------------")
//console.log(props)

    const twitterFeed = props.data.statuses;

    return(<>
        {Object.keys(twitterFeed).map(key=> {
            //const {screen_name,profile_image_url_https} = props.data[key].user
            //const {text} = props[key]
            //console.log(key)
            //console.log(props.data.statuses)
            //console.log(props.data.statuses[key])
            
            return (
            <div className="d-flex text-muted pt-3">
                <img className="twitterUserIcon" src={twitterFeed[key].user.profile_image_url} />

                <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                    <div className="d-flex justify-content-between">
                        <strong className="text-gray-dark">@{twitterFeed[key].user.screen_name}</strong>
                        <a href="#">Follow</a>
                    </div>
                <span className="d-block">{twitterFeed[key].text}</span>
                </div>
            </div>
            )
        })}

    </>)

}

export default twitterFeed