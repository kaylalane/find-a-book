import { useNavigate, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";

const routes = [
   { link:  "/young-adult", title: "Young Adult" },
   { link:  "/fantasy", title: "Fantasy" },
   { link: "/romance", title: "Romance" },
]

export default function GenrePage() {
    const params = useParams();
    const navigate = useNavigate();
    const [pageTitle, setPageTitle] = useState(null);

    useEffect(() => {
        setPageTitle(routes.find((route) => route.link === `/${params.id}`));
        if (pageTitle === undefined)  {
            console.log("here");
            navigate("/recommendations");
        }
    }, [pageTitle, navigate, params.id]);


    return (
        <Layout>
            <h1 className="page__title"> 
                <a href="/recommendations" className="link"> Recommendations </a> 
                &lt; {pageTitle?.title}
            </h1>


        </Layout>

  );
}
