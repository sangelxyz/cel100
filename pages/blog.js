// fetch blog from server
//import { GetServerSideProps, NextPage } from "next";

import { getDisplayName } from "next/dist/shared/lib/utils";



function Page(props) {
    //props.map(tag=> console.log(tag))
    //console.log(props.data)
//console.log(props)
    

    if(props.data.data.items.length > 0) {

    }
    return props.data.data.items.map((tag,index)=> {
        const {displayName} = tag.author
        const {content, title} = tag
        return (<div key={index} className="d-flex text-muted pt-3">
                        <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"/><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>

                        <p className="pb-3 mb-0 small lh-sm border-bottom">
                            <strong className="d-block text-gray-dark">@{displayName}</strong>
                            {content}
                        </p>
                    </div>
                )
    })
    //console.log(getServerSideProps())
    //getServerSideProps().then(msg => console.log(msg))

}

// export async function getServerSideProps() {
//     // Fetch data from external API
//     const data = {name:"hihih"}

//     // Pass data to the page via props
//     return { props: { data } }
// }


export default Page


