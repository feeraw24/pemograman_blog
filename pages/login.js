// import styles from '../styles/Home.module.css'

import Menu from "../data-dummy/menu.json";

import Sidebar from "../component/sidebar.js";
import Layout from "../component/layout.js";
export default function Login({ props }) {
  return (
    <div>
      <Layout layoutProps={props.menu}>
        <div className="row">
          <div className="col-md-8">
            <h3 className="pb-4 mb-4 fst-italic border-bottom">Login Page</h3>
          </div>
          <Sidebar />
        </div>
      </Layout>
    </div>
  );
}
Login.getInitialProps = () => {
  return {
    props: {
      menu: Menu,
    },
  };
};
