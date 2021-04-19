// import styles from '../styles/Home.module.css'

import Menu from "../../data-dummy/menu.json";
import { useRouter } from "next/router";

import Sidebar from "../../component/sidebar.js";
import Layout from "../../component/layout.js";
export default function Kategori({ props }) {
  const router = useRouter();
  const { kategori } = router.query;
  return (
    <div>
      <Layout layoutProps={props.menu}>
        <div className="row">
          <div className="col-md-8">
            <h3 className="pb-4 mb-4 fst-italic border-bottom">
              Halaman Kategori {kategori}
            </h3>
          </div>
          <Sidebar />
        </div>
      </Layout>
    </div>
  );
}
Kategori.getInitialProps = () => {
  return {
    props: {
      menu: Menu,
    },
  };
};
