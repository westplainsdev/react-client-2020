import React from "react"
import {Link, useRouteMatch} from "react-router-dom"
import DefaultLayout from "./default-layout"

const IndexPage = () => {
  let match = useRouteMatch() //can use from anywhere
  return (
    <DefaultLayout>
        <h1><i className="fa fa-home" aria-hidden="true"></i> Home</h1>
        <p>
            We have access to the current path from any component using <code>useRouteMatch()</code>: {match.url}
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia corrupti illum accusamus maiores veritatis
            cumque laboriosam incidunt ipsam voluptate cupiditate quo excepturi quos aspernatur dicta amet, minus
            repudiandae dolorum assumenda?
        </p>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nam facilis, recusandae ipsa cum
            fugiat quod alias esse, corporis nemo voluptatum autem, vel magni! Iure, fuga. Exercitationem nobis sapiente
            sequi.
        </p>
        <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae iure ducimus ipsa, repellat vero nulla
            libero debitis quo sit facilis, cumque maxime dolore ad laudantium nostrum praesentium soluta explicabo cum!
        </p>
        <p>
            <Link to="/about">Link to about page</Link>
        </p>
    </DefaultLayout>
  )
}

export default IndexPage
