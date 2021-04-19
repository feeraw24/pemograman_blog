import Header from "./Header";
import Footer from "./Footer";
function layout({ children, layoutProps }) {
  return (
    <div>
      <Header menu={layoutProps} />
      <main className="container">{children}</main>
      <Footer />
    </div>
  );
}

export default layout;
