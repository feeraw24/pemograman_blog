import Head from "next/head";
// import styles from '../styles/Home.module.css'

import Jumbotron from "../component/jumbotron.js";
import Menu from "../data-dummy/menu.json";

import Sidebar from "../component/sidebar.js";
import Layout from "../component/layout.js";
export default function Search({ props }) {
  return (
    <div>
      <Layout layoutProps={props.menu}>
        <div className="row">
          <div className="col-md-8">
            <h3 className="pb-4 mb-4 fst-italic border-bottom">Seacrh Page</h3>
            <form action="">
              <div class="form-group">
                <label for="">Isikan kata kunci disini</label>
                <input
                  type="text"
                  name=""
                  id=""
                  class="form-control"
                  placeholder=""
                  aria-describedby="helpId"
                />
              </div>
            </form>
          </div>
          <Sidebar />
        </div>
      </Layout>
    </div>
  );
}
Search.getInitialProps = () => {
  return {
    props: {
      menu: Menu,
    },
  };
};
